import React, { useState } from "react";
import {
    Container,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from "@mui/material";

const doctorSchedules = [
    {
        doctorName: "Dr. John Doe",
        appointments: [
            { date: "2024-07-08", time: "09:00", status: "not yet" },
            { date: "2024-07-08", time: "10:00", status: "done" },
            // Các dữ liệu khác...
        ],
    },
    {
        doctorName: "Dr. Jane Smith",
        appointments: [
            { date: "2024-07-09", time: "09:00", status: "done" },
            { date: "2024-07-09", time: "10:00", status: "not yet" },
            // Các dữ liệu khác...
        ],
    },
    // Các bác sĩ khác...
];

function ViewScheduleAppointment() {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedDoctor, setSelectedDoctor] = useState(
        doctorSchedules.length > 0 ? doctorSchedules[0].doctorName : ""
    );
    const [weekDates, setWeekDates] = useState([]);

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setSelectedDate(selectedDate);

        const startOfWeekDate = getMonday(new Date(selectedDate));
        const dates = [...Array(7)].map((_, i) => {
            const date = new Date(startOfWeekDate);
            date.setDate(date.getDate() + i);
            return date.toISOString().split("T")[0];
        });
        setWeekDates(dates);
    };

    const getMonday = (date) => {
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(date.setDate(diff));
    };

    const getSlotDetails = (appointments, date) => {
        const filteredAppointments = appointments.filter(
            (appointment) => appointment.date === date
        );
        const slotDetails = filteredAppointments.map((appointment) => ({
            time: appointment.time,
            patients: filteredAppointments.length,
            status: appointment.status,
        }));
        return slotDetails;
    };

    const selectedDoctorSchedule = doctorSchedules.find(
        (doctor) => doctor.doctorName === selectedDoctor
    );

    if (!selectedDoctorSchedule) {
        return (
            <Typography variant="h5" align="center">
                No doctor schedule available.
            </Typography>
        );
    }

    return (
        <Container>
            <FormControl fullWidth margin="normal">
                <InputLabel>Chọn bác sĩ</InputLabel>
                <Select
                    value={selectedDoctor}
                    onChange={(event) => setSelectedDoctor(event.target.value)}
                >
                    {doctorSchedules.map((doctor, index) => (
                        <MenuItem key={index} value={doctor.doctorName}>
                            {doctor.doctorName}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <div>
                <Typography variant="h5" align="center" gutterBottom>
                    {`Lịch khám của bác sĩ ${selectedDoctorSchedule.doctorName}`}
                </Typography>
                <TextField
                    type="date"
                    label="Chọn ngày"
                    value={selectedDate}
                    onChange={handleDateChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth
                    margin="normal"
                />
                {selectedDate && (
                    <Typography variant="body1" align="center" gutterBottom>
                        {`Ngày đã chọn: ${selectedDate}`}
                    </Typography>
                )}
                <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Slot</TableCell>
                                {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
                                    (day, index) => (
                                        <TableCell key={index} align="center">
                                            {day}
                                        </TableCell>
                                    )
                                )}
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                {weekDates.map((date, index) => (
                                    <TableCell key={index} align="center">
                                        {date.split("-").reverse().join("/")}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[...Array(9)].map((_, slotIndex) => (
                                <TableRow key={slotIndex}>
                                    <TableCell>{`Slot ${slotIndex + 1}`}</TableCell>
                                    {weekDates.map((date, dateIndex) => {
                                        const slotDetails = getSlotDetails(
                                            selectedDoctorSchedule.appointments,
                                            date
                                        );
                                        return (
                                            <TableCell key={dateIndex} align="center">
                                                {slotDetails.length > 0 ? (
                                                    slotDetails.map((detail, detailIndex) => (
                                                        <div key={detailIndex}>
                                                            <Typography variant="body2">
                                                                {detail.time}
                                                            </Typography>
                                                            <Typography variant="body2">{`Số bệnh nhân: ${detail.patients}`}</Typography>
                                                            <Typography
                                                                variant="body2"
                                                                style={{
                                                                    color:
                                                                        detail.status === "not yet"
                                                                            ? "red"
                                                                            : "green",
                                                                }}
                                                            >
                                                                {`Trạng thái: ${detail.status}`}
                                                            </Typography>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <Typography variant="body2">--</Typography>
                                                )}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Container>
    );
}

export default ViewScheduleAppointment;
