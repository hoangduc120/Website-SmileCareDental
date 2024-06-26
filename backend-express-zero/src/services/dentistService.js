const { Appointment, examination_result: ExaminationResult, reappointment: Reappointment, slot: Slot, User, notification: Notification, service: Service, dentist_info: DentistInfo } = require('../models'); 
const { Op } = require('sequelize');
const moment = require('moment');


// Get Dentist Schedule (getDentistSchedule)
async function getDentistSchedule(dentistId) {
  try {
      const startOfWeek = moment().startOf('week').toDate();
      const endOfWeek = moment().endOf('week').toDate();

      const appointments = await Appointment.findAll({
          where: {
              dentist_id: dentistId,
              appointment_date: { [Op.between]: [startOfWeek, endOfWeek] }
          },
          include: [User, Service] 
      });
      return appointments;
  } catch (err) {
      console.error('Error retrieving dentist schedule:', err);
      throw err;
  }
}

// Propose Recurring Schedule (proposeRecurringSchedule)
async function proposeRecurringSchedule(userId, dentistId, startDate, endDate, isPeriodic, periodicInterval) {
  try {
      const dentistInfo = await DentistInfo.findOne({ where: { dentist_id: dentistId } }); // Use DentistInfo model

      const reappointment = await Reappointment.create({
          customer_id: userId,
          dentist_id: dentistId,
          clinic_id: dentistInfo.clinic_id,
          reappointment_date: startDate,
          is_periodic: isPeriodic,
          periodic_interval: periodicInterval,
          status: 'Proposed',
      });

      return reappointment;
  } catch (err) {
      console.error('Error proposing recurring schedule:', err);
      throw err;
  }
}

// Upload Examination Results (uploadResult)
async function uploadResult(data) {
  const { customerId, result, appointmentId, reappointmentId, dentistId } = data; // Use correct data.dentistId

  try {
      const resultRecord = await ExaminationResult.create({
          customer_id: customerId,
          dentist_id: dentistId, 
          result,
          result_date: new Date(),
          appointment_id: appointmentId,
          reappointment_id: reappointmentId,
      });
      return resultRecord;
  } catch (err) {
      console.error('Error uploading result:', err);
      throw err;
  }
}

// Get Patient Records (getPatientRecords)
async function getPatientRecords(userId, dentistId) {
  try {
      const records = await ExaminationResult.findAll({
          where: { customer_id: userId, dentist_id: dentistId },
          include: [{ model: User, as: 'customer' }] // Alias User as 'customer' for clarity
      });
      return records;
  } catch (err) {
      console.error('Error retrieving records:', err);
      throw err;
  }
}

// Get Dentist Messages (getDentistMessages)
async function getDentistMessages(dentistId) {
  try {
      const messages = await Notification.findAll({
          where: {
              [Op.or]: [
                  { appointment_id: { [Op.in]: sequelize.literal(`(SELECT id FROM appointment WHERE dentist_id = ${dentistId})`) } },
                  { reappointment_id: { [Op.in]: sequelize.literal(`(SELECT id FROM reappointment WHERE dentist_id = ${dentistId})`) } }
              ]
          }
      });
      return messages;
  } catch (err) {
      console.error('Error retrieving messages:', err);
      throw err;
  }
}

module.exports = {
  getDentistSchedule,
  proposeRecurringSchedule,
  uploadResult,
  getPatientRecords,
  getDentistMessages
};