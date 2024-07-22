import React, { useState, useEffect } from 'react';
import { Typography, Grid, Card, CardContent, TextField, Button, Box, Container } from '@mui/material';

const DoctorAccount = () => {
    const [userData, setUserData] = useState({});
    const [isEditing, setIsEditing] = useState(false);



    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        // Validate user data here (e.g., email format, DOB range)
        // Implement logic to save updated data to API or database here
        // Handle success or error scenarios and provide feedback to the user
        setIsEditing(false); // Assume saving is successful, disable editing mode
    };

    const handleCancel = () => {
        // Logic to reset user data to original state if editing is cancelled
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'dob') {
            setUserData({ ...userData, dob: value });
        } else {
            setUserData({ ...userData, [id]: value });
        }
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4" gutterBottom
                            style={{ color: '#0477CA', display: 'flex', justifyContent: 'center', fontWeight: '400' }}>Tài khoản của tôi</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="body2">Tên của bạn:</Typography>
                                        <TextField
                                            id="username"
                                            value={userData.userName}
                                            variant="outlined"
                                            onChange={handleChange}
                                            fullWidth
                                            disabled={!isEditing}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body2">Số điện thoại:</Typography>
                                        <TextField
                                            id="phone"
                                            value={userData.phone}
                                            variant="outlined"
                                            fullWidth
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body2">Email:</Typography>
                                        <TextField
                                            id="email"
                                            value={userData.email}
                                            variant="outlined"
                                            fullWidth
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {isEditing ? (
                            <>
                                <Button variant="contained" color="primary" onClick={handleSave} sx={{ mr: 2 }}>
                                    Lưu
                                </Button>
                                <Button variant="contained" color="secondary" onClick={handleCancel}>
                                    Hủy
                                </Button>
                            </>
                        ) : (
                            <Button variant="contained" color="primary" onClick={handleEdit}>
                                Chỉnh sửa
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default DoctorAccount;
