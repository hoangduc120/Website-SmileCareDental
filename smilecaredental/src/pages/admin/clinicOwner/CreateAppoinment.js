import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Grid, Button } from '@mui/material';

const AppointmentForm = () => {
    return (
        <>
            <h2>Tạo lịch khám</h2>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="dentist-select-label">Bác sĩ</InputLabel>
                        <Select
                            labelId="dentist-select-label"
                            id="dentist-select"
                            name="dentistId"
                            label="Bác sĩ"
                        >
                            <MenuItem value="">Tất cả</MenuItem>
                            {/* Thêm các MenuItem khác ở đây */}
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
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                variant="contained"
                sx={{
                    marginTop: '20px', height: 50, backgroundColor: '#1898F3', color: 'white', fontWeight: '700', fontSize: '14px', borderRadius: '8px',
                    '&:hover': {
                        backgroundColor: '#000AFE', color: 'white',
                    },
                    display: 'block', margin: '20px auto 0',
                }}
            >
                Đặt lịch hẹn
            </Button>
        </>
    );
};

export default AppointmentForm;
