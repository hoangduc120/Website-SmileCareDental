import React, { useEffect, useState } from "react";
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
} from "@mui/material";
import { getSchedule } from "../../api/api";

function ViewScheduleAppointment() {
    const [schedules, setSchedules] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedDoctor, setSelectedDoctor] = useState("");
    const [weekDates, setWeekDates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getSchedule();
                const data = res.data;
                console.log("Schedule data:", data);
                setSchedules(data);
                if (data.length > 0) {
                    setSelectedDoctor(data[0].dentist.name);
                }
            } catch (e) {
                console.error("Error fetching schedule:", e);
            }
        };
        fetchData();
    }, []);

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

    const getSlotDetails = (appointments = [], date, slotId) => {
        const filteredAppointments = appointments.filter(
            (appointment) => appointment.date === date && appointment.slot.slot_id === slotId
        );

        if (filteredAppointments.length > 0) {
            const slotDetail = filteredAppointments[0];
            const { start_time, end_time } = slotDetail.slot;
            return {
                timeRange: `${start_time} - ${end_time}`,
                patients: slotDetail.current_patients,
                status: slotDetail.status || "not yet",
            };
        }
        return null;
    };

    const selectedDoctorSchedule = schedules.find(
        (schedule) => schedule.dentist.name === selectedDoctor
    );

    if (!selectedDoctorSchedule) {
        return (
            <Typography variant="h5" align="center">
                No schedule available.
            </Typography>
        );
    }

    return (
        <Container>
            <div>
                <Typography variant="h5" align="center" gutterBottom>
                    {`Lịch khám của bác sĩ ${selectedDoctor}`}
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
                                        const slotDetail = getSlotDetails(
                                            selectedDoctorSchedule.appointments,
                                            date,
                                            slotIndex + 1 // Slot ID starts from 1
                                        );
                                        return (
                                            <TableCell key={dateIndex} align="center">
                                                {slotDetail ? (
                                                    <>
                                                        <Typography variant="body2">
                                                            {slotDetail.timeRange}
                                                        </Typography>
                                                        <Typography variant="body2">{`Số bệnh nhân: ${slotDetail.patients}`}</Typography>
                                                        <Typography
                                                            variant="body2"
                                                            style={{
                                                                color:
                                                                    slotDetail.status === "not yet"
                                                                        ? "red"
                                                                        : "green",
                                                            }}
                                                        >
                                                            {`Trạng thái: ${slotDetail.status}`}
                                                        </Typography>
                                                    </>
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
