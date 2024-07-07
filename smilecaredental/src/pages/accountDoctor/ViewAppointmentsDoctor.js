import React, { useState } from 'react';
import { Grid, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button } from '@mui/material';
import ReappointmentDetailDialog from './ReappointmentDetailDiaLog';
import ResultDetailDialog from './ResultDetailDiaLog';

const doctorSchedules = [
    {
        doctorName: 'Bác sĩ Nguyễn Văn A',
        appointments: [
            {
                id: 1,
                date: '2024-07-08',
                time: '09:00 AM',
                patient: 'Nguyễn Văn A',
                address: '123 Đường ABC, Quận XYZ, TP HCM',
                email: 'nguyenvana@example.com',
                phone: '0987654321',
                reappointmentDate: '2024-07-15',
                isPeriodic: true,
                periodicInterval: '1 tháng',
                serviceId: 'Service A',
                slotId: 'Slot 1',
                result: 'Kết quả khám: Bệnh nhân súng răng, cần trồng thêm răng.'
            },
            {
                id: 2,
                date: '2024-07-09',
                time: '10:30 AM',
                patient: 'Trần Thị B',
                address: '456 Đường DEF, Quận UVW, Hà Nội',
                email: 'tranthib@example.com',
                phone: '0123456789',
                reappointmentDate: '2024-07-20',
                isPeriodic: false,
                periodicInterval: '',
                serviceId: 'Service B',
                slotId: 'Slot 2',
                result: 'Kết quả khám: Bệnh nhân sâu răng, cần nhổ răng.'
            },
            {
                id: 3,
                date: '2024-07-10',
                time: '02:00 PM',
                patient: 'Phạm Văn C',
                address: '789 Đường GHI, Quận MNO, Đà Nẵng',
                email: 'phamvanc@example.com',
                phone: '0909090909',
                reappointmentDate: '2024-07-18',
                isPeriodic: true,
                periodicInterval: '2 tháng',
                serviceId: 'Service C',
                slotId: 'Slot 3',
                result: 'Kết quả khám: Bệnh nhân bị thiếu răng'
            },
        ]
    },
];

const ViewAppointmentsDoctors = () => {
    const [openReappointmentDialog, setOpenReappointmentDialog] = useState(false);
    const [openResultDialog, setOpenResultDialog] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    const handleViewResult = (appointment) => {
        setSelectedAppointment(appointment);
        setOpenResultDialog(true);
    };

    const handleReappointment = (appointment) => {
        setSelectedAppointment(appointment);
        setOpenReappointmentDialog(true);
    };

    const handleCloseReappointmentDialog = () => {
        setOpenReappointmentDialog(false);
    };

    const handleCloseResultDialog = () => {
        setOpenResultDialog(false);
    };

    return (
        <Grid container spacing={3}>
            {doctorSchedules.map((doctorSchedule, index) => (
                <Grid item xs={12} key={index}>
                    <Typography variant="h4" gutterBottom>
                        Lịch khám và Danh sách bệnh nhân của {doctorSchedule.doctorName}
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Ngày</TableCell>
                                    <TableCell>Giờ</TableCell>
                                    <TableCell>Tên bệnh nhân</TableCell>
                                    <TableCell>Địa chỉ</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Số điện thoại</TableCell>
                                    <TableCell>Hành động</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {doctorSchedule.appointments.map((appointment) => (
                                    <TableRow key={appointment.id}>
                                        <TableCell>{appointment.date}</TableCell>
                                        <TableCell>{appointment.time}</TableCell>
                                        <TableCell>{appointment.patient}</TableCell>
                                        <TableCell>{appointment.address}</TableCell>
                                        <TableCell>{appointment.email}</TableCell>
                                        <TableCell>{appointment.phone}</TableCell>
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
                                                onClick={() => handleReappointment(appointment)}
                                            >
                                                Xem lịch tái khám
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
        </Grid>
    );
};

export default ViewAppointmentsDoctors;
