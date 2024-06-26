const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have your database config here

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(255), allowNull: false },
    name: { type: DataTypes.STRING(255), allowNull: false },
    phonenumber: { type: DataTypes.STRING(20), allowNull: false, unique: true },
    status: DataTypes.BOOLEAN,
    role_id: { type: DataTypes.INTEGER, allowNull: false },
    image: DataTypes.BLOB,
    token_user: DataTypes.STRING(255),
    resetPasswordToken: DataTypes.STRING(255),
    resetPasswordExpires: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
});

const Role = sequelize.define('role', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING(50), allowNull: false }
});

const DentistInfo = sequelize.define('dentist_info', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    dentist_id: { type: DataTypes.INTEGER, allowNull: false, unique: true, references: { model: User, key: 'id' } },
    clinic_id: { type: DataTypes.INTEGER, references: { model: 'clinic', key: 'id' } },
    actived_date: DataTypes.DATEONLY,
    degree: DataTypes.STRING(100),
    description: DataTypes.TEXT
});

const Clinic = sequelize.define('clinic', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    address: DataTypes.STRING(255),
    name: DataTypes.STRING(50),
    phonenumber: DataTypes.STRING(20),
    clinic_owner_id: { type: DataTypes.INTEGER, unique: true, references: { model: User, key: 'id' } },
    status: DataTypes.BOOLEAN,
    description: DataTypes.TEXT
});

const ClinicSchedule = sequelize.define('clinic_schedule', {
    schedule_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    clinic_id: { type: DataTypes.INTEGER, references: { model: Clinic, key: 'id' } },
    day_of_week: DataTypes.STRING(20),
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME
});

const Service = sequelize.define('service', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    detail: DataTypes.TEXT,
    image: DataTypes.BLOB
});

const Appointment = sequelize.define('appointment', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    customer_id: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
    clinic_id: { type: DataTypes.INTEGER, references: { model: Clinic, key: 'id' } },
    status: { type: DataTypes.STRING(255), allowNull: false, validate: { isIn: [['Confirmed', 'Cancelled', 'Completed']] } },
    appointment_date: DataTypes.DATE,
    dentist_id: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
    service_id: { type: DataTypes.INTEGER, references: { model: Service, key: 'id' } },
    slot_id: { type: DataTypes.INTEGER, references: { model: 'slot', key: 'id' } } // Assuming you have a Slot model
});

const ExaminationResult = sequelize.define('examination_result', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    customer_id: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
    result: DataTypes.TEXT,
    result_date: DataTypes.DATE,
    appointment_id: { type: DataTypes.INTEGER, unique: true, references: { model: Appointment, key: 'id' } },
    reappointment_id: { type: DataTypes.INTEGER, unique: true, references: { model: 'reappointment', key: 'id' } }
});


const Reappointment = sequelize.define('reappointment', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    customer_id: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
    dentist_id: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
    clinic_id: { type: DataTypes.INTEGER, references: { model: Clinic, key: 'id' } },
    reappointment_date: DataTypes.DATE,
    is_periodic: DataTypes.BOOLEAN,
    periodic_interval: DataTypes.INTEGER,
    service_id: { type: DataTypes.INTEGER, references: { model: Service, key: 'id' } },
    slot_id: { type: DataTypes.INTEGER, references: { model: 'slot', key: 'id' } },
    status: { type: DataTypes.STRING(255), allowNull: false, validate: { isIn: [['Confirmed', 'Cancelled', 'Completed']] } }
});

const Slot = sequelize.define('slot', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    dentist_id: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
    examination_date: DataTypes.DATEONLY,
    max_patients: DataTypes.INTEGER,
});

const ClinicService = sequelize.define('clinic_service', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    clinic_id: { type: DataTypes.INTEGER, references: { model: Clinic, key: 'id' } },
    service_id: { type: DataTypes.INTEGER, references: { model: Service, key: 'id' } }
});

const Feedback = sequelize.define('feedback', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    customer_id: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
    rating: { type: DataTypes.INTEGER, allowNull: false },
    feedback_text: DataTypes.STRING(255),
    feedback_date: DataTypes.DATE,
    examination_result_id: { type: DataTypes.INTEGER, unique: true, references: { model: ExaminationResult, key: 'id' } }
});

const Notification = sequelize.define('notification', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    appointment_id: { type: DataTypes.INTEGER, unique: true, references: { model: Appointment, key: 'id' } },
    reappointment_id: { type: DataTypes.INTEGER, unique: true, references: { model: Reappointment, key: 'id' } },
    content: DataTypes.TEXT,
    status: DataTypes.BOOLEAN
});


// Associations 
User.belongsTo(Role, { foreignKey: 'role_id' });
User.hasMany(Appointment, { foreignKey: 'customer_id' });
User.hasMany(Appointment, { foreignKey: 'dentist_id' });
User.hasMany(ExaminationResult, { foreignKey: 'customer_id' });
User.hasOne(DentistInfo, { foreignKey: 'dentist_id' });

Role.hasMany(User, { foreignKey: 'role_id' });

DentistInfo.belongsTo(User, { foreignKey: 'dentist_id' });
DentistInfo.belongsTo(Clinic, { foreignKey: 'clinic_id' });

Clinic.belongsTo(User, { foreignKey: 'clinic_owner_id', as: 'clinicOwner' }); // Alias for clinic owner
Clinic.hasMany(ClinicSchedule, { foreignKey: 'clinic_id' });
Clinic.belongsToMany(Service, { through: ClinicService, foreignKey: 'clinic_id' });

ClinicSchedule.belongsTo(Clinic, { foreignKey: 'clinic_id' });

Service.belongsToMany(Clinic, { through: ClinicService, foreignKey: 'service_id' });
Service.hasMany(Appointment, { foreignKey: 'service_id' });
Service.hasMany(Reappointment, { foreignKey: 'service_id' });

Appointment.belongsTo(User, { foreignKey: 'customer_id', as: 'customer' });
Appointment.belongsTo(User, { foreignKey: 'dentist_id', as: 'dentist' });
Appointment.belongsTo(Clinic, { foreignKey: 'clinic_id' });
Appointment.belongsTo(Service, { foreignKey: 'service_id' });
Appointment.belongsTo(Slot, { foreignKey: 'slot_id' });
Appointment.hasOne(ExaminationResult, { foreignKey: 'appointment_id' });
Appointment.hasOne(Notification, { foreignKey: 'appointment_id' });

ExaminationResult.belongsTo(User, { foreignKey: 'customer_id', as: 'customer' });
ExaminationResult.belongsTo(Appointment, { foreignKey: 'appointment_id' });
ExaminationResult.belongsTo(Reappointment, { foreignKey: 'reappointment_id' });
ExaminationResult.hasOne(Feedback, { foreignKey: 'examination_result_id' });

Reappointment.belongsTo(User, { foreignKey: 'customer_id', as: 'customer' });
Reappointment.belongsTo(User, { foreignKey: 'dentist_id', as: 'dentist' });
Reappointment.belongsTo(Clinic, { foreignKey: 'clinic_id' });
Reappointment.belongsTo(Service, { foreignKey: 'service_id' });
Reappointment.belongsTo(Slot, { foreignKey: 'slot_id' });
Reappointment.hasOne(ExaminationResult, { foreignKey: 'reappointment_id' });
Reappointment.hasOne(Notification, { foreignKey: 'reappointment_id' });

Slot.belongsTo(User, { foreignKey: 'dentist_id', as: 'dentist' });
Slot.hasMany(Appointment, { foreignKey: 'slot_id' });
Slot.hasMany(Reappointment, { foreignKey: 'slot_id' });

ClinicService.belongsTo(Clinic, { foreignKey: 'clinic_id' });
ClinicService.belongsTo(Service, { foreignKey: 'service_id' });

Feedback.belongsTo(User, { foreignKey: 'customer_id' });
Feedback.belongsTo(ExaminationResult, { foreignKey: 'examination_result_id' });

Notification.belongsTo(Appointment, { foreignKey: 'appointment_id' });
Notification.belongsTo(Reappointment, { foreignKey: 'reappointment_id' });

module.exports = {
    User,
    Role,
    DentistInfo,
    Clinic,
    ClinicSchedule,
    Service,
    Appointment,
    ExaminationResult,
    Reappointment,
    Slot,
    ClinicService,
    Feedback,
    Notification
};