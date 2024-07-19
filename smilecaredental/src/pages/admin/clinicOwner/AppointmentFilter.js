import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { format } from 'date-fns';
import {
  TableContainer, Table, TableHead, TableBody, TableRow, TableCell,
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Snackbar,
  Chip,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Box
} from '@mui/material';
import { getDentistsByClinic, getFilteredAppointmentsAndReappointments, confirmAppointment, cancelAppointment } from '../../../api/api';
import { TablePagination } from '@mui/material';

const statusMap = {
  'Confirmed': 'Đã xác nhận',
  'Pending': 'Đang chờ',
  'Completed': 'Hoàn thành',
  'Cancelled': 'Đã hủy'
};
const statusColors = {
  'Pending': 'warning',
  'Confirmed': 'primary',
  'Cancelled': 'error',
  'Completed': 'success',
};

const AppointmentFilter = () => {
  const [appointments, setAppointments] = useState([]);
  const [reappointments, setReappointments] = useState([]);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [actionType, setActionType] = useState('confirm');
  const [dentists, setDentists] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // or 'error'
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Hiển thị 5 hàng mỗi trang


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
          <Box sx={{ display: 'flex' }}>
            <Button
              variant="contained"
              sx={{
                height: 40, backgroundColor: '#1898F3', color: 'white', fontWeight: '700', fontSize: '12px', borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#000AFE', color: 'white',
                },
                margin: '5px',
              }}
              onClick={() => handleConfirm(id)}
            >
              Xác nhận
            </Button>
            <Button
              variant="contained" sx={{
                height: 40, backgroundColor: '#FF0000', color: 'white', fontWeight: '700', fontSize: '12px', borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#D32F2F', color: 'white',
                },
                margin: '5px',
              }}
              onClick={() => handleCancel(id)}
            >
              Hủy
            </Button>
          </Box>
        </>
      );
    } else if (status === 'Confirmed') {
      return (
        <Button
          variant="contained" sx={{
            height: 40, backgroundColor: '#FF0000', color: 'white', fontWeight: '700', fontSize: '12px', borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#D32F2F', color: 'white',
            },
          }
          }
          onClick={() => handleCancel(id)}
        >
          Hủy
        </Button >
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
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const paginatedAppointments = appointments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const paginatedReappointments = reappointments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const getStatusChip = (status) => {
    const statusInVietnamese = statusMap[status] || status;
    switch (status) {
      case 'Confirmed':
        return <Chip label={statusInVietnamese} color={statusColors[status]} variant='outlined' />;
      case 'Pending':
        return <Chip label={statusInVietnamese} color={statusColors[status]} variant='outlined' />;
      case 'Completed':
        return <Chip label={statusInVietnamese} color={statusColors[status]} variant='outlined' />;
      case 'Cancelled':
        return <Chip label={statusInVietnamese} color={statusColors[status]} variant='outlined' />;
      default:
        return <Chip label={statusInVietnamese} />;
    }
  };
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <FormControl style={{ width: '33.33%' }}>
            <InputLabel id="status-select-label">Trạng thái</InputLabel>
            <Select
              labelId="status-select-label"
              id="status-select"
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Trạng thái"
            >
              <MenuItem value="">Tất cả</MenuItem>
              <MenuItem value="Pending">
                <Chip label="Đang chờ" variant='outlined' color={statusColors['Pending']} size="small" sx={{ marginRight: 1 }} />
              </MenuItem>
              <MenuItem value="Confirmed">
                <Chip label="Đã xác nhận" variant='outlined' color={statusColors['Confirmed']} size="small" sx={{ marginRight: 1 }} />
              </MenuItem>
              <MenuItem value="Cancelled">
                <Chip label="Đã hủy" variant='outlined' color={statusColors['Cancelled']} size="small" sx={{ marginRight: 1 }} />
              </MenuItem>
              <MenuItem value="Completed">
                <Chip label="Hoàn thành" variant='outlined' color={statusColors['Completed']} size="small" sx={{ marginRight: 1 }} />
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl style={{ width: '33.33%' }}>
            <InputLabel id="dentist-select-label">Bác sĩ</InputLabel>
            <Select
              labelId="dentist-select-label"
              id="dentist-select"
              name="dentistId"
              value={formik.values.dentistId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Bác sĩ"
            >
              <MenuItem value="">Tất cả</MenuItem>
              {dentists.map(dentist => (
                <MenuItem key={dentist.id} value={dentist.id}>{dentist.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl style={{ width: '33.33%' }}>
            <InputLabel id="type-select-label">Loại</InputLabel>
            <Select
              labelId="type-select-label"
              id="type-select"
              name="type"
              value={formik.values.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Loại"
            >
              <MenuItem value="">Tất cả</MenuItem>
              <MenuItem value="Appointment">Cuộc hẹn</MenuItem>
              <MenuItem value="Reappointment">Tái khám</MenuItem>
            </Select>
          </FormControl>
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
          <Button
            variant="contained"
            sx={{
              marginTop: '20px', height: 50, backgroundColor: '#1898F3', color: 'white', fontWeight: '700', fontSize: '14px', borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#000AFE', color: 'white',
              },
              display: 'block', margin: '20px auto 0',
            }}
            type='submit'
          >
            Tìm Kiếm
          </Button>
        </div>
      </form>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Tên bệnh nhân</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Tên nha sĩ</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Ngày hẹn</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Thời gian hẹn</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Trạng thái</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Loại</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedAppointments.map(appointment => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.customer.name}</TableCell>
                <TableCell>{appointment.dentist.name}</TableCell>
                <TableCell>{format(new Date(appointment.appointment_date), 'dd/MM/yyyy')}</TableCell>
                <TableCell>{appointment.slot.start_time + ' - ' + appointment.slot.end_time}</TableCell>
                <TableCell>{getStatusChip(appointment.status)}</TableCell>
                <TableCell>Cuộc hẹn</TableCell>
                <TableCell>
                  {renderActionButtons(appointment.status, appointment.id, 'appointment')}
                </TableCell>
              </TableRow>
            ))}
            {paginatedReappointments.map(reappointment => (
              <TableRow key={reappointment.id}>
                <TableCell>{reappointment.customer.name}</TableCell>
                <TableCell>{reappointment.dentist.name}</TableCell>
                <TableCell>{format(new Date(reappointment.reappointment_date), 'dd/MM/yyyy')}</TableCell>
                <TableCell>{reappointment.slot.start_time + ' - ' + reappointment.slot.end_time}</TableCell>
                <TableCell>{getStatusChip(reappointment.status)}</TableCell>
                <TableCell>Tái khám</TableCell>
                <TableCell>
                  {renderActionButtons(reappointment.status, reappointment.id, 'reappointment')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={appointments.length + reappointments.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <Dialog open={confirmDialogOpen} onClose={handleCloseConfirmDialog}>
        <DialogTitle>Xác nhận hành động</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bạn có chắc chắn muốn {actionType === 'confirm' ? 'xác nhận' : 'hủy'} hành động này?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmDialog}>Hủy</Button>
          <Button onClick={handleConfirmAction} autoFocus>
            {actionType || 'confirm' ? 'Xác nhận' : 'Hủy'}
          </Button>

        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />

    </div>
  );
};

export default AppointmentFilter;
