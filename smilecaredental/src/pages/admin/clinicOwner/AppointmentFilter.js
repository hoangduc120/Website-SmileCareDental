import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { format } from 'date-fns';
import {
  TableContainer, Table, TableHead, TableBody, TableRow, TableCell,
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Snackbar
} from '@mui/material';
import { getDentistsByClinic, getFilteredAppointmentsAndReappointments, confirmAppointment, cancelAppointment } from '../../../api/api';

const AppointmentFilter = () => {
  const [appointments, setAppointments] = useState([]);
  const [reappointments, setReappointments] = useState([]);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [actionType, setActionType] = useState('');
  const [dentists, setDentists] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // or 'error'

  const formik = useFormik({
    initialValues: {
      status: '',
      dentistId: '',
      type: '',
      date: '',
    },
    onSubmit: (values) => {
      fetchAppointmentsAndReappointments(values);
    },
  });

  useEffect(() => {
    fetchDentists();
    fetchAppointmentsAndReappointments(formik.values);
  }, []);

  const fetchDentists = () => {
    getDentistsByClinic()
      .then(response => {
        const data = response.data;
        if (data.clinic && data.clinic.length > 0) {
          const dentistList = data.clinic[0].dentist_infos.map(d => ({
            id: d.dentist.id,
            name: d.dentist.name,
          }));
          setDentists(dentistList);
        } else {
          console.error('No clinics found');
        }
      })
      .catch(error => {
        console.error('Error fetching dentists:', error);
      });
  };

  const fetchAppointmentsAndReappointments = (filters) => {
    getFilteredAppointmentsAndReappointments(filters)
      .then(data => {
        const dentistId = filters.dentistId ? parseInt(filters.dentistId, 10) : null;
        const filteredAppointments = data.appointments.filter(appointment => {
          let matchesFilter = true;
          if (filters.status && appointment.status !== filters.status) {
            matchesFilter = false;
          }
          if (dentistId && appointment.dentist.id !== dentistId) {
            matchesFilter = false;
          }
          if (filters.type && appointment.type !== filters.type) {
            matchesFilter = false;
          }
          return matchesFilter;
        });
        const filteredReappointments = data.reappointments.filter(reappointment => {
          let matchesFilter = true;
          if (filters.status && reappointment.status !== filters.status) {
            matchesFilter = false;
          }
          if (dentistId && reappointment.dentist.id !== dentistId) {
            matchesFilter = false;
          }
          if (filters.type && reappointment.type !== filters.type) {
            matchesFilter = false;
          }
          return matchesFilter;
        });
        setAppointments(filteredAppointments);
        setReappointments(filteredReappointments);
      })
      .catch(error => {
        console.error('Lỗi khi tải danh sách cuộc hẹn và tái khám:', error);
        showSnackbar('Lỗi khi tải danh sách cuộc hẹn và tái khám', 'error');
      });
  };

  const handleConfirm = (id) => {
    setActionType('confirm');
    setSelectedAppointment(id);
    setConfirmDialogOpen(true);
  };

  const handleCancel = (id) => {
    setActionType('cancel');
    setSelectedAppointment(id);
    setConfirmDialogOpen(true);
  };

  const handleCloseConfirmDialog = () => {
    setConfirmDialogOpen(false);
  };

  const handleConfirmAction = () => {
    if (actionType === 'confirm') {
      confirmAppointment(selectedAppointment)
        .then(response => {
          console.log('Xác nhận cuộc hẹn thành công:', response);
          fetchAppointmentsAndReappointments(formik.values);
          showSnackbar('Xác nhận cuộc hẹn thành công', 'success');
        })
        .catch(error => {
          console.error('Lỗi khi xác nhận cuộc hẹn:', error);
          showSnackbar('Lỗi khi xác nhận cuộc hẹn', 'error');
        });
    } else if (actionType === 'cancel') {
      cancelAppointment(selectedAppointment)
        .then(response => {
          console.log('Hủy cuộc hẹn thành công:', response);
          fetchAppointmentsAndReappointments(formik.values);
          showSnackbar('Hủy cuộc hẹn thành công', 'success');
        })
        .catch(error => {
          console.error('Lỗi khi hủy cuộc hẹn:', error);
          showSnackbar('Lỗi khi hủy cuộc hẹn', 'error');
        });
    }
    setConfirmDialogOpen(false);
  };

  const handleDateChange = (event) => {
    formik.setFieldValue('date', event.target.value);
    fetchAppointmentsAndReappointments({ ...formik.values, date: event.target.value });
  };

  const renderActionButtons = (status, id, type) => {
    if (status === 'Pending') {
      return (
        <>
          <Button variant="contained" color="primary" onClick={() => handleConfirm(id)}>Xác nhận</Button>
          <Button variant="contained" color="error" onClick={() => handleCancel(id)}>Hủy</Button>
        </>
      );
    } else if (status === 'Confirmed') {
      return (
        <Button variant="contained" color="error" onClick={() => handleCancel(id)}>Hủy</Button>
      );
    } else {
      return null;
    }
  };

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label>
            Trạng thái:
            <select
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Tất cả</option>
              <option value="Pending">Đang chờ</option>
              <option value="Confirmed">Đã xác nhận</option>
              <option value="Cancelled">Đã hủy</option>
              <option value="Completed">Hoàn thành</option>
            </select>
          </label>
          <label style={{ marginLeft: '10px' }}>
            Nha sĩ:
            <select
              name="dentistId"
              value={formik.values.dentistId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Tất cả</option>
              {dentists.map(dentist => (
                <option key={dentist.id} value={dentist.id}>{dentist.name}</option>
              ))}
            </select>
          </label>
          <label style={{ marginLeft: '10px' }}>
            Loại:
            <select
              name="type"
              value={formik.values.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Tất cả</option>
              <option value="Appointment">Cuộc hẹn</option>
              <option value="Reappointment">Cuộc tái khám</option>
            </select>
          </label>
          <TextField
            fullWidth
            id="date"
            name="date"
            label="Ngày"
            type="date"
            margin="normal"
            value={formik.values.date}
            onChange={(event) => {
              formik.handleChange(event);
              handleDateChange(event);
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained" color="primary" type="submit" style={{ marginLeft: '10px' }}>Tìm Kiếm</Button>
        </div>
      </form>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tên bệnh nhân</TableCell>
              <TableCell>Tên nha sĩ</TableCell>
              <TableCell>Ngày hẹn</TableCell>
              <TableCell>Thời gian hẹn</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell>Loại</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map(appointment => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.customer.name}</TableCell>
                <TableCell>{appointment.dentist.name}</TableCell>
                <TableCell>{format(new Date(appointment.appointment_date), 'dd/MM/yyyy')}</TableCell>
                <TableCell>{appointment.slot.start_time + ' - ' + appointment.slot.end_time}</TableCell>
                <TableCell>{appointment.status}</TableCell>
                <TableCell>Cuộc hẹn</TableCell>
                <TableCell>
                  {renderActionButtons(appointment.status, appointment.id, 'appointment')}
                </TableCell>
              </TableRow>
            ))}
            {reappointments.map(reappointment => (
              <TableRow key={reappointment.id}>
                <TableCell>{reappointment.customer.name}</TableCell>
                <TableCell>{reappointment.dentist.name}</TableCell>
                <TableCell>{format(new Date(reappointment.reappointment_date), 'dd/MM/yyyy')}</TableCell>
                <TableCell>{reappointment.slot.start_time + ' - ' + reappointment.slot.end_time}</TableCell>
                <TableCell>{reappointment.status}</TableCell>
                <TableCell>Cuộc tái khám</TableCell>
                <TableCell>
                  {renderActionButtons(reappointment.status, reappointment.id, 'reappointment')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={confirmDialogOpen} onClose={handleCloseConfirmDialog}>
        <DialogTitle>Xác nhận hành động</DialogTitle>
        <DialogContent>
          <DialogContentText>Bạn có chắc chắn muốn {actionType === 'confirm' ? 'xác nhận' : 'hủy'} hành động này?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmDialog}>Hủy</Button>
          <Button onClick={handleConfirmAction} autoFocus>
            {actionType === 'confirm' ? 'Xác nhận' : 'Hủy'}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </div>
  );
};

export default AppointmentFilter;
