import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
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
  Select,
  MenuItem,
} from "@mui/material";
import { timeSlots } from "../../../components/datatest/doctor/TimeData";
import { clinics } from "../../../components/datatest/doctor/ClinicsData";

function Booking() {
  const { doctorId } = useParams();
  const [gender, setGender] = useState("");
  const [time, setTime] = useState("");
  const [doctor, setDoctor] = useState(null);
  const [appointmentType, setAppointmentType] = useState("");

  const generalRef = useRef(null);
  const experienceRef = useRef(null);
  const trainingRef = useRef(null);

  useEffect(() => {
    clinics.forEach((clinic) => {
      const foundDoctor = clinic.doctors.find(
        (doc) => doc.id === parseInt(doctorId)
      );
      if (foundDoctor) setDoctor(foundDoctor);
    });
  }, [doctorId]);

  const handleBookingSubmit = (event) => {
    event.preventDefault();
  };

  const scrollToSection = (section) => {
    if (section === "general" && generalRef.current) {
      generalRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "experience" && experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "training" && trainingRef.current) {
      trainingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!doctor) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: "#f0f8ff" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box padding={2} bgcolor="#ffffff" borderRadius={2} boxShadow={3}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              mt={2}
            >
              <Avatar
                alt={doctor.name.toString()}
                src={doctor.image}
                sx={{ width: 100, height: 100 }}
              />
              <Typography
                variant="subtitle1"
                mt={1}
                sx={{ fontWeight: "bold" }}
              >
                {doctor.name}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {doctor.specialty}
              </Typography>
            </Box>

            <Box display="flex" justifyContent="left" mt={2}>
              <Button
                variant="outlined"
                onClick={() => scrollToSection("general")}
                sx={{
                  "&:hover": {
                    backgroundColor: "#005f9d",
                    color: "white",
                  },
                  marginRight: "5px",
                }}
              >
                Thông tin chung
              </Button>
              <Button
                variant="outlined"
                onClick={() => scrollToSection("experience")}
                sx={{
                  "&:hover": {
                    mr: 2,
                    backgroundColor: "#005f9d",
                    color: "white",
                  },
                  marginRight: "5px",
                }}
              >
                Kinh nghiệm
              </Button>
              <Button
                variant="outlined"
                onClick={() => scrollToSection("training")}
                sx={{
                  "&:hover": {
                    mr: 2,
                    backgroundColor: "#005f9d",
                    color: "white",
                  },
                  marginRight: "5px",
                }}
              >
                Đào tạo
              </Button>
            </Box>

            <Box mt={2} p={2} bgcolor="#f9f9f9" borderRadius={2} boxShadow={1}>
              <Box ref={generalRef}>
                <Typography sx={{fontWeight:'bold'}} variant="h6" gutterBottom >
                  Thông tin chung
                </Typography>
                {doctor.generalInfo &&
                  doctor.generalInfo.split("\n").map((info, index) => (
                    <Typography variant="body1" key={index} paragraph>
                      {info}
                    </Typography>
                  ))}
              </Box>
              <Box ref={experienceRef} mt={4}>
                <Typography sx={{fontWeight:'bold'}} variant="h6" gutterBottom>
                  Kinh nghiệm
                </Typography>
                {doctor.experience &&
                  doctor.experience.split("\n").map((exp, index) => (
                    <Typography variant="body1" key={index} paragraph>
                      {exp}
                    </Typography>
                  ))}
              </Box>
              <Box ref={trainingRef} mt={4}>
                <Typography sx={{fontWeight:'bold'}} variant="h6" gutterBottom>
                  Đào tạo
                </Typography>
                {doctor.training &&
                  doctor.training.split("\n").map((train, index) => (
                    <Typography variant="body1" key={index} paragraph>
                      {train}
                    </Typography>
                  ))}
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box padding={2} bgcolor="#ffffff" borderRadius={2} boxShadow={3}>
            <Typography variant="h5" gutterBottom textAlign="center">
              Đặt lịch hẹn
            </Typography>
            <form onSubmit={handleBookingSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {/* Appointment type select */}
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <FormLabel component="legend">Loại cuộc hẹn</FormLabel>
                    <Select
                      value={appointmentType}
                      onChange={(e) => setAppointmentType(e.target.value)}
                      variant="outlined"
                      fullWidth
                    >
                      <MenuItem value="treatment">Điều trị</MenuItem>
                      <MenuItem value="checkup">Khám bệnh</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Tên của bạn"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                </Grid>
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
