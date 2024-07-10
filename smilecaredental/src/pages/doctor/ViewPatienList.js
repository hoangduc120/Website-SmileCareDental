import React, { useEffect, useState } from 'react';
import { Grid, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, MenuItem } from '@mui/material';
import { getPatients } from '../../api/api';

const ViewPatientList = () => {
    const [openReappointmentDialog, setOpenReappointmentDialog] = useState(false);
    const [openResultDialog, setOpenResultDialog] = useState(false);
    const [openCreateResultDialog, setOpenCreateResultDialog] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [searchName, setSearchName] = useState('');
    const [doctorSchedules, setDoctorSchedules] = useState([]);
    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await getPatients()
                setDoctorSchedules(response.data);
            } catch (error) {
                console.error("Error fetching patients data:", error);
            }
        };

        fetchPatients();
    }, []);


    const handleViewResult = (appointment) => {
        setSelectedAppointment(appointment);
        setOpenResultDialog(true);
    };

    const handleReappointment = (appointment) => {
        setSelectedAppointment(appointment);
        setOpenReappointmentDialog(true);
    };

    const handleCreateResult = (appointment) => {
        setSelectedAppointment(appointment);
        setOpenCreateResultDialog(true);
    };

    const handleCloseReappointmentDialog = () => {
        setOpenReappointmentDialog(false);
    };

    const handleCloseResultDialog = () => {
        setOpenResultDialog(false);
    };

    const handleCloseCreateResultDialog = () => {
        setOpenCreateResultDialog(false);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleSearchChange = (event) => {
        setSearchName(event.target.value);
    };

    const filterAppointments = (appointments) => {
        if (selectedDate && selectedDate !== '') {
            appointments = appointments.filter(appointment => appointment.date === selectedDate);
        }
        if (searchName.trim() !== '') {
            appointments = appointments.filter(appointment =>
                appointment.patient.toLowerCase().includes(searchName.trim().toLowerCase())
            );
        }
        return appointments;
    };

    const handleSaveResult = (appointment, result) => {
        console.log(`Saving result for appointment ID ${appointment.id}: ${result}`);
    };

    return (
        <Grid container spacing={3}>
            {doctorSchedules.map((doctorSchedule, index) => (
                <Grid item xs={12} key={index}>
                    <Typography variant="h4" gutterBottom style={{ marginBottom: '16px' }}>
                        Lịch khám và Danh sách bệnh nhân của {doctorSchedule.doctorName}
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Tìm kiếm theo tên bệnh nhân"
                                variant="outlined"
                                fullWidth
                                value={searchName}
                                onChange={handleSearchChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="date"
                                label="Chọn ngày"
                                type="date"
                                defaultValue=""
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                                onChange={(e) => handleDateChange(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <TableContainer component={Paper} elevation={3} style={{ marginTop: '16px' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Tên bệnh nhân</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Số điện thoại</TableCell>
                                    <TableCell>Ngày</TableCell>
                                    <TableCell>Hành động</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filterAppointments(doctorSchedule.appointments).map((appointment) => (
                                    <TableRow key={appointment.id}>
                                        <TableCell>{appointment.patient}</TableCell>
                                        <TableCell>{appointment.email}</TableCell>
                                        <TableCell>{appointment.phone}</TableCell>
                                        <TableCell>{appointment.date}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="outlined"
                                                style={{ marginRight: '10px' }}
                                                onClick={() => handleViewResult(appointment)}
                                            >
                                                Xem kết quả
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                style={{ marginRight: '10px' }}
                                                onClick={() => handleReappointment({ ...appointment, doctorName: doctorSchedule.doctorName })}
                                            >
                                                Đặt lịch tái khám
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                onClick={() => handleCreateResult(appointment)}
                                            >
                                                Tạo kết quả khám
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            ))}
            <ReappointmentDetailDialog isOpen={openReappointmentDialog} onClose={handleCloseReappointmentDialog} appointment={selectedAppointment} />
            <ResultDetailDialog isOpen={openResultDialog} onClose={handleCloseResultDialog} appointment={selectedAppointment} />
            <CreateResultDialog isOpen={openCreateResultDialog} onClose={handleCloseCreateResultDialog} appointment={selectedAppointment} onSave={handleSaveResult} />
        </Grid>
    );
};

const ResultDetailDialog = ({ isOpen, onClose, appointment }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            maxWidth="lg"
            fullWidth
            PaperProps={{
                style: {
                    backgroundColor: "rgba(255, 255, 255, 0.95)", // Tăng độ trong suốt
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    borderRadius: "8px",
                    padding: "20px",
                    border: "1px solid rgba(0, 0, 0, 0.3)", // Đường viền rõ hơn
                },
            }}
        >
            <DialogTitle
                style={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "center" }}
            >
                Kết quả khám
            </DialogTitle>
            <DialogContent style={{ padding: "20px" }}>
                {appointment && (
                    <div
                        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
                    >
                        <Typography style={{ display: "flex", alignItems: "center" }}>
                            <span style={{ fontWeight: "bold", width: "150px", backgroundColor: "white" }}>
                                ID bệnh nhân:
                            </span>{" "}
                            {appointment.id}
                        </Typography>
                        <Typography style={{ display: "flex", alignItems: "center" }}>
                            <span style={{ fontWeight: "bold", width: "150px", backgroundColor: "white" }}>
                                Tên bệnh nhân:
                            </span>{" "}
                            {appointment.patient}
                        </Typography>
                        <Typography style={{ display: "flex", alignItems: "center" }}>
                            <span style={{ fontWeight: "bold", width: "150px", backgroundColor: "white" }}>
                                Kết quả:
                            </span>{" "}
                            {appointment.result}
                        </Typography>
                    </div>
                )}
            </DialogContent>
            <DialogActions style={{ justifyContent: "center" }}>
                <Button onClick={onClose} color="primary">
                    Đóng
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const ReappointmentDetailDialog = ({ isOpen, onClose, appointment }) => {
    const [periodicInterval, setPeriodicInterval] = useState(appointment ? appointment.periodicInterval : '');
    const [periodicCount, setPeriodicCount] = useState(appointment ? appointment.periodicCount : '');
    const [selectedSlot, setSelectedSlot] = useState(appointment ? appointment.slotId : '');

    const handleSubmit = () => {
        // Xử lý submit dữ liệu ở đây
        console.log({
            patientName: appointment.patient,
            doctorName: appointment.doctorName,
            serviceId: appointment.serviceId,
            periodicInterval,
            periodicCount,
            selectedSlot,
        });
        onClose();
    };

    if (!appointment) return null;

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                style: {
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    borderRadius: "8px",
                    padding: "20px",
                    border: "1px solid rgba(0, 0, 0, 0.3)"
                },
            }}
        >
            <DialogTitle>Đặt lịch tái khám</DialogTitle>
            <DialogContent dividers>
                <TextField
                    label="Tên bệnh nhân"
                    fullWidth
                    margin="normal"
                    value={appointment.patient} // Fix cứng
                    InputProps={{
                        readOnly: true,
                        style: { backgroundColor: "white" }
                    }}
                />
                <TextField
                    label="Tên bác sĩ"
                    fullWidth
                    margin="normal"
                    value={appointment.doctorName} // Fix cứng
                    InputProps={{
                        readOnly: true,
                        style: { backgroundColor: "white" }
                    }}
                />
                <TextField
                    label="Dịch vụ tái khám"
                    fullWidth
                    margin="normal"
                    value={appointment.serviceId} // Fix cứng
                    InputProps={{
                        readOnly: true,
                        style: { backgroundColor: "white" }
                    }}
                />
                <TextField
                    label="Thời gian định kỳ"
                    type="number"
                    fullWidth
                    margin="normal"
                    value={periodicInterval}
                    onChange={(e) => setPeriodicInterval(e.target.value)}
                    InputProps={{
                        style: { backgroundColor: "white" }
                    }}
                />
                <TextField
                    label="Số lần định kỳ"
                    type="number"
                    fullWidth
                    margin="normal"
                    value={periodicCount}
                    onChange={(e) => setPeriodicCount(e.target.value)}
                    InputProps={{
                        style: { backgroundColor: "white" }
                    }}
                />
                <TextField
                    label="Slot tái khám"
                    select
                    fullWidth
                    margin="normal"
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    InputProps={{
                        style: { backgroundColor: "white" }
                    }}
                >
                    {slots.map((slot, index) => (
                        <MenuItem key={index} value={slot}>
                            {slot}
                        </MenuItem>
                    ))}
                </TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Đóng
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const CreateResultDialog = ({ isOpen, onClose, appointment, onSave }) => {
    const [result, setResult] = useState('');

    const handleSave = () => {
        onSave(appointment, result);
        onClose();
    };

    return (
        <Dialog open={isOpen} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Tạo kết quả khám</DialogTitle>
            <DialogContent>
                <Typography variant="h6" gutterBottom>
                    Tên bệnh nhân: {appointment?.patient}
                </Typography>
                <TextField
                    autoFocus
                    margin="dense"
                    id="result"
                    label="Kết quả khám"
                    type="text"
                    fullWidth
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Hủy
                </Button>
                <Button onClick={handleSave} color="primary">
                    Lưu
                </Button>
            </DialogActions>
        </Dialog>
    );
};
export default ViewPatientList;
