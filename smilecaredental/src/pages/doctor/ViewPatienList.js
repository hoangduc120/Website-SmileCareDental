import React, { useEffect, useState } from 'react';
import {
    Grid,
    Typography,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Button,
    TextField,
    DialogActions,
    DialogContent,
    DialogTitle,
    Dialog,
    Snackbar,
    Alert
} from '@mui/material';
import { createExaminationResult, getHistory, getPatients } from '../../api/api';

const PatientList = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [openCreateDialog, setOpenCreateDialog] = useState(false);
    const [openRescheduleDialog, setOpenRescheduleDialog] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [searchName, setSearchName] = useState('');
    const [patients, setPatients] = useState([]);
    const [examinationResult, setExaminationResult] = useState('');
    const [appointmentId, setAppointmentId] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await getPatients();
                setPatients(response.data);
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        fetchPatients();
    }, []);

    const handleViewResult = async (customerId) => {
        try {
            const response = await getHistory(customerId);
            setSelectedPatient(response.data);
            setOpenDialog(true);
        } catch (error) {
            console.error("Error fetching patient history:", error);
        }
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedPatient(null);
    };

    const handleSearchChange = (event) => {
        setSearchName(event.target.value);
    };

    const filterPatients = (patients) => {
        if (searchName.trim() !== '') {
            return patients.filter(patient =>
                patient.customer.name.toLowerCase().includes(searchName.trim().toLowerCase())
            );
        }
        return patients;
    };

    const handleOpenCreateDialog = (patient) => {
        setSelectedPatient(patient);
        setAppointmentId(patient.appointmentId ? Number(patient.appointmentId) : '');
        setExaminationResult(patient.examinationResult || ''); // Load existing result if any
        setOpenCreateDialog(true);
    };

    const handleCloseCreateDialog = () => {
        setOpenCreateDialog(false);
        setSelectedPatient(null);
        setExaminationResult('');
        setAppointmentId('');
    };

    const handleCreateResult = async () => {
        try {
            const response = await createExaminationResult(appointmentId, examinationResult);
            console.log('Examination result created:', response.data);
            setSnackbarMessage('Kết quả khám đã được tạo thành công!');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);

            const updatedResponse = await getHistory(selectedPatient.customer.id);
            setSelectedPatient(updatedResponse.data);
            setOpenDialog(true);
            handleCloseCreateDialog();
        } catch (error) {
            console.error("Error creating examination result:", error);
            setSnackbarMessage('Đã xảy ra lỗi khi tạo kết quả khám.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };
    const handleOpenRescheduleDialog = (patient) => {
        setSelectedPatient(patient);
        setOpenRescheduleDialog(true);
    };

    const handleCloseRescheduleDialog = () => {
        setOpenRescheduleDialog(false);
        setSelectedPatient(null);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    Danh sách bệnh nhân
                </Typography>
                <TextField
                    label="Tìm kiếm theo tên bệnh nhân"
                    variant="outlined"
                    fullWidth
                    value={searchName}
                    onChange={handleSearchChange}
                />
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Tên bệnh nhân</TableCell>
                                <TableCell>Số điện thoại</TableCell>
                                <TableCell>Ngày</TableCell>
                                <TableCell>Dịch vụ</TableCell>
                                <TableCell>Thời gian</TableCell>
                                <TableCell>Hành Động</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filterPatients(patients).map((patient) => (
                                <TableRow key={patient.appointmentId}>
                                    <TableCell>{patient.customer.name}</TableCell>
                                    <TableCell>{patient.customer.phonenumber}</TableCell>
                                    <TableCell>{patient.date}</TableCell>
                                    <TableCell>{patient.serviceName}</TableCell>
                                    <TableCell>{`${patient.slot.start_time} - ${patient.slot.end_time}`}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="outlined"
                                            style={{ marginRight: '10px' }}
                                            onClick={() => handleViewResult(patient.customer.id)}
                                        >
                                            Xem hồ sơ
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            onClick={() => handleOpenCreateDialog(patient)}
                                        >
                                            {patient.examinationResult ? 'Chỉnh sửa kết quả khám' : 'Tạo kết quả khám'}
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            style={{ marginLeft: '10px' }}
                                            onClick={() => handleOpenRescheduleDialog(patient)}
                                        >
                                            Tạo lịch tái khám
                                        </Button>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            {selectedPatient && (
                <Dialog
                    open={openDialog}
                    onClose={handleCloseDialog}
                    maxWidth="lg"
                    fullWidth
                    PaperProps={{
                        style: {
                            backgroundColor: "rgba(255, 255, 255, 0.95)",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            borderRadius: "8px",
                            padding: "20px",
                            border: "1px solid rgba(0, 0, 0, 0.3)",
                        },
                    }}
                >
                    <DialogTitle
                        style={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "center" }}
                    >
                        Kết quả khám
                    </DialogTitle>
                    <DialogContent style={{ padding: "20px" }}>
                        {Array.isArray(selectedPatient) ? (
                            selectedPatient.map((result, index) => (
                                <div key={index} style={{ marginBottom: '20px' }}>
                                    <Typography style={{ display: "flex", alignItems: "center" }}>
                                        <span style={{ fontWeight: "bold", width: "150px", backgroundColor: "white" }}>
                                            Tên bệnh nhân:
                                        </span>{" "}
                                        {result.customer.name || "N/A"}
                                    </Typography>
                                    <Typography style={{ display: "flex", alignItems: "center" }}>
                                        <span style={{ fontWeight: "bold", width: "150px", backgroundColor: "white" }}>
                                            Ngày khám:
                                        </span>{" "}
                                        {result.result_date}
                                    </Typography>
                                    <Typography style={{ display: "flex", alignItems: "center" }}>
                                        <span style={{ fontWeight: "bold", width: "150px", backgroundColor: "white" }}>
                                            Kết quả khám:
                                        </span>{" "}
                                        {result.result || "No result found"}
                                    </Typography>
                                </div>
                            ))
                        ) : (
                            <Typography>No results found</Typography>
                        )}
                    </DialogContent>
                    <DialogActions style={{ justifyContent: "center" }}>
                        <Button onClick={handleCloseDialog} color="primary">
                            Đóng
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
            {selectedPatient && (
                <Dialog
                    open={openCreateDialog}
                    onClose={handleCloseCreateDialog}
                    maxWidth="sm"
                    fullWidth
                >
                    <DialogTitle>{selectedPatient.examinationResult ? 'Chỉnh sửa kết quả khám' : 'Tạo kết quả khám'}</DialogTitle>
                    <DialogContent>
                        <Typography>Tên bệnh nhân: {selectedPatient.customer?.name || "N/A"}</Typography>
                        <input type="hidden" value={selectedPatient.appointmentId} />
                        <TextField
                            label="Kết quả khám"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            value={examinationResult}
                            onChange={(e) => setExaminationResult(e.target.value)}
                            style={{ marginTop: '20px' }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseCreateDialog} color="secondary">
                            Hủy
                        </Button>
                        <Button onClick={handleCreateResult} color="primary">
                            {selectedPatient.examinationResult ? 'Lưu thay đổi' : 'Tạo'}
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
            {selectedPatient && (
                <Dialog
                    open={openRescheduleDialog}
                    onClose={handleCloseRescheduleDialog}
                    maxWidth="sm"
                    fullWidth
                >
                    <DialogTitle>Tạo lịch tái khám</DialogTitle>
                    <DialogContent>
                        <Typography>Tên bệnh nhân: {selectedPatient.customer?.name || "N/A"}</Typography>
                        <TextField
                            label="Tên bác sĩ"
                            variant="outlined"
                            fullWidth
                            style={{ marginTop: '20px' }}
                        />
                        <TextField
                            label="Dịch vụ"
                            variant="outlined"
                            fullWidth
                            style={{ marginTop: '20px' }}
                        />
                         <TextField
                            label="Thời gian định kỳ"
                            variant="outlined"
                            fullWidth
                            style={{ marginTop: '20px' }}
                        />
                         <TextField
                            label="Số lần định kỳ"
                            variant="outlined"
                            fullWidth
                            style={{ marginTop: '20px' }}
                        />
                         <TextField
                            label="Slot tái khám"
                            variant="outlined"
                            fullWidth
                            style={{ marginTop: '20px' }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseRescheduleDialog} color="secondary">
                            Đóng
                        </Button>
                        <Button color="primary">
                            Tạo
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Grid>
    );
};

export default PatientList;