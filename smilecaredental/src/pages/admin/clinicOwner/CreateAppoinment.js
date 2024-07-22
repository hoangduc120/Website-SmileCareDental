import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Grid, Button, Typography } from '@mui/material';
import { getDentistsByClinic, getSlotsForDate, getAllSlots, createDentistScheduleByDate, updateDentistSlotsByDate } from '../../../api/api';

const AppointmentForm = () => {
    const [dentists, setDentists] = useState([]);
    const [selectedDentist, setSelectedDentist] = useState('');
    const [date, setDate] = useState('');
    const [slots, setSlots] = useState([]);
    const [selectedSlots, setSelectedSlots] = useState([]);

    useEffect(() => {
        const fetchDentists = async () => {
            try {
                const response = await getDentistsByClinic();
                const activeDentists = response.data.clinic[0].dentist_infos.filter(dentistInfo => dentistInfo.dentist.status);
                setDentists(activeDentists);
            } catch (error) {
                console.error('Error fetching dentists:', error);
            }
        };

        fetchDentists();
    }, []);

    useEffect(() => {
        const fetchSlots = async () => {
            if (selectedDentist && date) {
                try {
                    const [slotsResponse, allSlotsResponse] = await Promise.all([
                        getSlotsForDate(selectedDentist, date),
                        getAllSlots()
                    ]);

                    const bookedSlots = slotsResponse.map(slot => ({
                        ...slot,
                        isBooked: slot.current_patients > 0
                    }));

                    // Filter slots to only include those that are yet to start
                    const now = new Date();
                    const transformedSlots = allSlotsResponse
                        .filter(slot => new Date(`${date}T${slot.start_time}`).getTime() > now.getTime())
                        .map(slot => ({
                            ...slot,
                            isBooked: bookedSlots.find(bookedSlot => bookedSlot.slot_id === slot.id)?.isBooked || false
                        }));

                    setSlots(transformedSlots);
                    const currentSlotIds = bookedSlots.map(slot => slot.slot_id);
                    setSelectedSlots(currentSlotIds);

                } catch (error) {
                    console.error('Error fetching slots:', error);
                }
            }
        };

        fetchSlots();
    }, [selectedDentist, date]);

    const handleSlotClick = (slotId) => {
        setSelectedSlots(prev => {
            if (prev.includes(slotId)) {
                return prev.filter(id => id !== slotId);
            } else {
                return [...prev, slotId];
            }
        });
    };

    const handleSave = async () => {
        console.log('Saving slots:', selectedSlots); // Debugging statement
        if (selectedDentist && date && selectedSlots.length > 0) {
            try {
                const isUpdate = slots.map(slot => slot.id).some(slotId => selectedSlots.includes(slotId));

                if (isUpdate) {
                    await updateDentistSlotsByDate({
                        dentist_id: selectedDentist,
                        slot_ids: selectedSlots,
                        date
                    });
                    alert('Lịch khám đã được cập nhật!');
                } else {
                    await createDentistScheduleByDate({
                        dentist_id: selectedDentist,
                        slot_ids: selectedSlots,
                        date
                    });
                    alert('Lịch khám mới đã được lưu!');
                }

                setSelectedSlots([]);
                // Fetch updated slots
                const fetchSlots = async () => {
                    const [slotsResponse, allSlotsResponse] = await Promise.all([
                        getSlotsForDate(selectedDentist, date),
                        getAllSlots()
                    ]);

                    const bookedSlots = slotsResponse.map(slot => ({
                        ...slot,
                        isBooked: slot.current_patients > 0
                    }));

                    const transformedSlots = allSlotsResponse
                        .filter(slot => new Date(`${date}T${slot.start_time}`).getTime() > new Date().getTime())
                        .map(slot => ({
                            ...slot,
                            isBooked: bookedSlots.find(bookedSlot => bookedSlot.slot_id === slot.id)?.isBooked || false
                        }));

                    setSlots(transformedSlots);
                    const currentSlotIds = bookedSlots.map(slot => slot.slot_id);
                    setSelectedSlots(currentSlotIds);
                };
                fetchSlots();
            } catch (error) {
                console.error('Error saving schedule:', error);
                alert('Đã xảy ra lỗi khi lưu lịch khám.');
            }
        } else {
            alert('Vui lòng chọn bác sĩ, ngày và ít nhất một lịch khám.');
        }
    };

    return (
        <>
            <h2>Tạo/ Cập Nhật Lịch Khám</h2>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="dentist-select-label">Bác sĩ</InputLabel>
                        <Select
                            labelId="dentist-select-label"
                            id="dentist-select"
                            name="dentistId"
                            label="Bác sĩ"
                            value={selectedDentist}
                            onChange={(e) => {
                                setSelectedDentist(e.target.value);
                                setDate('');
                            }}
                        >
                            <MenuItem value="">Tất cả</MenuItem>
                            {dentists.map(dentistInfo => (
                                <MenuItem key={dentistInfo.dentist.id} value={dentistInfo.dentist.id}>
                                    {dentistInfo.dentist.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        id="date"
                        name="date"
                        label="Ngày"
                        type="date"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            min: new Date().toISOString().split("T")[0]
                        }}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>Lịch Khám</Typography>
                    <Grid container spacing={1}>
                        {slots.map(slot => {
                            return (
                                <Grid item key={slot.id}>
                                    <Button
                                        variant={selectedSlots.includes(slot.id) ? "contained" : "outlined"}
                                        disabled={slot.isBooked && selectedSlots.includes(slot.id)}
                                        onClick={() => handleSlotClick(slot.id)}
                                        sx={{
                                            margin: '5px',
                                            backgroundColor: selectedSlots.includes(slot.id) ? '#1898F3' : 'transparent',
                                            color: slot.isBooked ? 'gray' : '#000',
                                            '&:hover': {
                                                backgroundColor: selectedSlots.includes(slot.id) ? '#000AFE' : '#f5f5f5',
                                            },
                                        }}
                                    >
                                        {`${slot.start_time} - ${slot.end_time}`}
                                    </Button>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
            <Button
                type="button"
                variant="contained"
                onClick={handleSave}
                sx={{
                    marginTop: '20px', height: 50, backgroundColor: '#1898F3', color: 'white', fontWeight: '700', fontSize: '14px', borderRadius: '8px',
                    '&:hover': {
                        backgroundColor: '#000AFE', color: 'white',
                    },
                    display: 'block', margin: '0 auto'
                }}
            >
                Lưu Lịch Khám
            </Button>
        </>
    );
};

export default AppointmentForm;
