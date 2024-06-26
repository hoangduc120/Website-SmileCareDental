const { Appointment, examination_result: ExaminationResult, reappointment: Reappointment, slot: Slot, User, notification: Notification } = require('../models');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { validationResult } = require('express-validator');
const moment = require('moment'); // Added for date calculations


const authorizeDentist = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Get token from header
    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Check if the decoded token has the correct role
        if (decoded.role !== 'dentist') {
            return res.status(403).json({ error: 'Forbidden. Not a dentist.' });
        }
        // Attach the decoded user data to the request for later use
        req.user = decoded;
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        res.status(400).json({ error: 'Invalid token.' });
    }
};
module.exports = authorizeDentist;

// View personal weekly schedule (GET /dentists/:dentistId/schedule)
exports.getSchedule = async (req, res) => {
    authorizeDentist(req, res, async () => {
        const dentistId = req.user.userId;
        const startOfWeek = moment().startOf('week').toDate();
        const endOfWeek = moment().endOf('week').toDate();
        
        try {
            const appointments = await Appointment.findAll({
                where: { 
                    dentist_id: dentistId,
                    appointment_date: { [Op.between]: [startOfWeek, endOfWeek] }
                },
                include: [User, service]
            });
            res.json(appointments);
        } catch (err) {
            console.error('Error retrieving schedule:', err);
            res.status(500).json({ error: 'Failed to retrieve schedule' });
        }
    });
};

// Propose recurring schedule to patient (POST /dentists/appointments/recurring/propose)
exports.proposeRecurringSchedule = async (req, res) => {
    authorizeDentist(req, res, async () => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { userId, serviceId, startDate, endDate, isPeriodic, periodicInterval } = req.body;

        try {
            const dentistId = req.user.userId;
            const dentistInfo = await dentist_info.findOne({ where: { dentist_id: dentistId } });

            const reappointment = await Reappointment.create({
                customer_id: userId,
                dentist_id: dentistId,
                clinic_id: dentistInfo.clinic_id, 
                reappointment_date: startDate,
                is_periodic: isPeriodic,
                periodic_interval: periodicInterval,
                service_id: serviceId,
                status: 'Proposed',
            });

            res.status(201).json(reappointment);
        } catch (err) {
            console.error('Error proposing recurring schedule:', err);
            res.status(500).json({ error: 'Failed to propose schedule' });
        }
    });
};

// Upload examination results (POST /dentists/results)
exports.uploadResult = async (req, res) => {
    authorizeDentist(req, res, async () => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { customerId, result, appointmentId, reappointmentId } = req.body;

        try {
            const resultRecord = await ExaminationResult.create({
                customer_id: customerId,
                dentist_id: req.user.userId,
                result,
                result_date: new Date(),
                appointment_id: appointmentId,
                reappointment_id: reappointmentId,
            });

            res.json({ message: 'Examination result uploaded successfully', result: resultRecord });
        } catch (err) {
            console.error('Error uploading result:', err);
            res.status(500).json({ error: 'Failed to upload result' });
        }
    });
};
exports.getPatientRecords = async (req, res) => {
    authorizeDentist(req, res, async () => {
        try {
            const userId = req.params.userId;
            const dentistId = req.user.userId;

            const records = await ExaminationResult.findAll({
                where: { customer_id: userId, dentist_id: dentistId },
                include: [{ model: User, as: 'customer', attributes: ['name', 'email', 'phonenumber'] }]
            });

            res.json(records);
        } catch (err) {
            console.error('Error retrieving records:', err);
            res.status(500).json({ error: 'Failed to retrieve records' });
        }
    });
};

// Receive and view messages from patients (GET /dentists/messages)
exports.getMessages = async (req, res) => {
    authorizeDentist(req, res, async () => {
        const dentistId = req.user.userId;

        try {
            const messages = await Notification.findAll({
                where: {
                    [Op.or]: [
                        { appointment_id: { [Op.in]: sequelize.literal(`(SELECT id FROM appointment WHERE dentist_id = ${dentistId})`) } },
                        { reappointment_id: { [Op.in]: sequelize.literal(`(SELECT id FROM reappointment WHERE dentist_id = ${dentistId})`) } }
                    ]
                }
            });
            res.json(messages);
        } catch (err) {
            console.error('Error retrieving messages:', err);
            res.status(500).json({ error: 'Failed to retrieve messages' });
        }
    });
};