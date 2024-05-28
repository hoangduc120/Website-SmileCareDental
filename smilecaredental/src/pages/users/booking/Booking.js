import React, { useState } from "react";
import {timeSlots} from "../../../components/datatest/doctor/TimeData";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Grid,
  Avatar,
} from "@mui/material";

function Booking() {
  const [gender, setGender] = useState("");
  const [time, setTime] = useState("");
  const handleBookingSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: "#f0f8ff" }}>
      <Grid container spacing={2}>
        {/* Phần thông tin bác sĩ bên trái */}
        <Grid item xs={5} md={5}>
          <Box padding={2} bgcolor="#ffffff" borderRadius={2} boxShadow={3}>
            <Typography variant="h5" gutterBottom textAlign="center">
              Thông tin bác sĩ
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              mt={2}
            >
              <Avatar
                alt={""}
                src={""}
                sx={{ width: 100, height: 100 }}
              />
              <Typography variant="subtitle1" mt={1}>
                Tên bác sĩ
              </Typography>
            </Box>
            {/* Thêm thông tin bác sĩ ở đây */}
          </Box>
        </Grid>
        {/* Phần đặt lịch khám */}
        <Grid item xs={7} md={7}>
          <Box padding={2} bgcolor="#ffffff" borderRadius={2} boxShadow={3}>
            <Typography variant="h5" gutterBottom textAlign="center">
              Đặt lịch hẹn
            </Typography>
            <form onSubmit={handleBookingSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Tên của bạn"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2, width: "100",  }}
                  />
                </Grid>
                {/* Thêm phần giới tính */}
                <Grid item xs={12}>
                  <FormControl component="fieldset" sx={{ mb: 2 }}>
                    <FormLabel component="legend">Giới tính</FormLabel>
                    <RadioGroup
                      row
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Nữ"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Nam"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Khác"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Số điện thoại"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="date"
                    label="Ngày khám"
                    type="date"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    sx={{ mb: 2 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6">Chọn giờ khám</Typography>
                  <Grid container spacing={1} sx={{ mb: 2 }}>
                    {timeSlots.map((slot) => (
                      <Grid item key={slot}>
                        <Button
                          variant={time === slot ? "contained" : "outlined"}
                          color="primary"
                          onClick={() => setTime(slot)}
                          sx={{ minWidth: 80 }}
                        >
                          {slot}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Đặt lịch
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Booking;
