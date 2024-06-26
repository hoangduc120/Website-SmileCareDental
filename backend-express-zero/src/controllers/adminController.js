const { User, Clinic, dentist_info, Role, clinic_schedule, service, clinic_service } = require('../models');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const authorizeAdmin = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'admin') {
            return res.status(403).json({ error: 'Forbidden. Not an admin.' });
        }
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ error: 'Invalid token.' });
    }
};

// View all clinic information (GET /admin/clinics)
exports.getAllClinics = async (req, res) => {
    authorizeAdmin(req, res, async () => {
        try {
            const clinics = await Clinic.findAll({
                include: [
                    { model: clinic_schedule },
                    { 
                        model: clinic_service,
                        include: [service]
                    },
                    { model: User, as: 'clinicOwner', attributes: ['name', 'email'] } // Assuming a clinic has a foreign key 'clinic_owner_id' referencing User
                ],
            });
            res.json(clinics);
        } catch (err) {
            console.error('Error retrieving clinics:', err);
            res.status(500).json({ error: 'Failed to retrieve clinics' });
        }
    });
};

// View all dentist information (GET /admin/dentists)
exports.getAllDentists = async (req, res) => {
    authorizeAdmin(req, res, async () => {
        try {
            const dentists = await User.findAll({
                where: { role_id: 3 },  // Assuming role_id 3 is for dentists
                include: [
                    dentist_info, 
                    { model: Clinic, through: dentist_info }
                ]
            });
            res.json(dentists);
        } catch (err) {
            console.error('Error retrieving dentists:', err);
            res.status(500).json({ error: 'Failed to retrieve dentists' });
        }
    });
};

// Create new user accounts (POST /admin/users)
exports.createUser = async (req, res) => {
    authorizeAdmin(req, res, async () => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        const { email, password, name, phonenumber, role_id, image, clinic_id } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const user = await User.create({
                email,
                password: hashedPassword,
                name,
                phonenumber,
                role_id,
                image,
            });

            if (role_id === 3 && clinic_id) { // If the user is a dentist, associate with clinic
                await dentist_info.create({
                    dentist_id: user.id,
                    clinic_id,
                });
            }

            res.status(201).json({ message: 'User created successfully', user });
        } catch (err) {
            console.error('Error creating user:', err);
            res.status(500).json({ error: 'Failed to create user' });
        }
    });
};

// Update user information (PUT /admin/users/:userId)
exports.updateUser = async (req, res) => {
    authorizeAdmin(req, res, async () => {
        const { userId } = req.params;
        const { email, password, name, phonenumber, role_id, image, clinic_id } = req.body;

        try {
            const user = await User.findByPk(userId);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Update basic user information
            await user.update({
                email: email || user.email,
                phonenumber: phonenumber || user.phonenumber,
                name: name || user.name,
                password: password ? await bcrypt.hash(password, 10) : user.password,
                role_id: role_id || user.role_id,
                image: image || user.image
            });

            // Update dentist_info if applicable
            if (role_id === 3 && clinic_id) { 
                await dentist_info.upsert({ // Use upsert to create or update
                    dentist_id: userId,
                    clinic_id 
                });
            } else if (role_id !== 3) {
                await dentist_info.destroy({ where: { dentist_id: userId } }); // Remove association if not a dentist
            }

            res.json(user);
        } catch (err) {
            console.error('Error updating user:', err);
            res.status(500).json({ error: 'Failed to update user' });
        }
    });
};


// Delete user accounts (DELETE /admin/users/:userId)
exports.deleteUser = async (req, res) => {
    authorizeAdmin(req, res, async () => {
        const { userId } = req.params;
        
        try {
            const user = await User.findByPk(userId);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Delete associated dentist_info first if the user is a dentist
            if (user.role_id === 3) {
                await dentist_info.destroy({ where: { dentist_id: userId } });
            }
            await user.destroy();

            res.json({ message: 'User deleted successfully' });
        } catch (err) {
            console.error('Error deleting user:', err);
            res.status(500).json({ error: 'Failed to delete user' });
        }
    });
};