import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  CircularProgress,
  FormLabel
} from "@mui/material";
import { getDetailDoctorPage, createAppointment, getAvailableSlotsForDate } from "../../../api/api";

function Booking() {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [clinicsData, setClinicsData] = useState(null);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [services, setServices] = useState([]);

  const generalRef = useRef(null);
  const experienceRef = useRef(null);
  const trainingRef = useRef(null);


  const today = new Date();
  const oneWeekFromNow = new Date(today);
  oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

  useEffect(() => {
    const fetchDoctorDetails = async (id) => {
      try {
        const response = await getDetailDoctorPage(id);
        console.log("Doctor details response:", response.data); // Kiểm tra dữ liệu nhận được từ API

        if (response.data.doctor) {
          setDoctor(response.data.doctor);
        }
        if (response.data.doctor.dentist_info.clinic) {
          setClinicsData(response.data.doctor.dentist_info.clinic);
          if (response.data.doctor.dentist_info.clinic.clinic_services) {
            setServices(response.data.doctor.dentist_info.clinic.clinic_services.map(cs => cs.service));
          }
        }
      } catch (error) {
        setError(error);
        console.error("Error fetching doctor details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctorDetails(doctorId);
  }, [doctorId]);

  const handleDateChange = async (event) => {
    const selectedDate = event.target.value;
    try {
      if (!selectedDate) return;

      console.log("Fetching slots for date:", selectedDate);
      const response = await getAvailableSlotsForDate(doctorId, selectedDate);
      console.log("Slots response:", response.data);

      const now = new Date();
      const currentDate = now.toISOString().split("T")[0];
      const currentTime = now.toTimeString().split(" ")[0].substring(0, 5); // 'HH:MM' format

      const updatedSlots = response.data.map(slot => {
        const slotStartTime = slot.slot.start_time;

        // Vô hiệu hóa các slot đã qua giờ cho ngày hiện tại
        if (selectedDate === currentDate && slotStartTime < currentTime) {
          return {
            ...slot,
            disabled: true,
          };
        }
        return slot;
      });

      setSlots(updatedSlots);
    } catch (error) {
      console.error("Error fetching available slots:", error);
    }
  };

  const handleSlotSelect = (slotId) => {
    setSelectedSlot(slotId);
    formik.setFieldValue("slotId", slotId);
  };

  const formik = useFormik({
    initialValues: {
      appointmentType: "",
      date: "",
      slotId: "",
    },
    validationSchema: Yup.object().shape({
      appointmentType: Yup.string().required("Vui lòng chọn loại dịch vụ"),
      date: Yup.date().required("Vui lòng chọn ngày khám"),
      slotId: Yup.string().required("Vui lòng chọn giờ khám"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const appointmentData = {
          clinicId: clinicsData.id,
          dentistId: doctorId,
          serviceId: values.appointmentType,
          slotId: values.slotId,
          appointmentDate: values.date,
        };
        const response = await createAppointment(appointmentData);
        console.log("Appointment created successfully:", response.data);
        alert("Đặt lịch hẹn thành công! Vui lòng check Email để nhận được mail phản hồi từ Phòng Khám.");
        resetForm();
      } catch (error) {
        console.error("Error creating appointment:", error);
        if (error.data && error.data.error) {
          console.log("Thông báo lỗi từ back-end:", error.data.error); // Thêm console.log để kiểm tra
          alert(`Có lỗi xảy ra: ${error.data.error}`);
        } else {
          alert("Có lỗi xảy ra khi đặt lịch hẹn. Vui lòng thử lại.");
        }
      } finally {
        setSubmitting(false);
        resetForm();
      }
    },
  });

  const scrollToSection = (section) => {
    if (section === "general" && generalRef.current) {
      generalRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "experience" && experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "training" && trainingRef.current) {
      trainingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <CircularProgress />
    </Box>
  );
  if (error) return <Typography>Error loading data: {error.message}</Typography>;

  const doctorName = doctor?.name || "Bác sĩ chưa cập nhật tên";
  const doctorImage = doctor?.image || "default-image-url"; // Replace with a valid default image URL

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
                alt={doctorName}
                src={doctorImage}
                sx={{ width: 100, height: 100 }}
              />
              <Typography
                variant="subtitle1"
                mt={1}
                sx={{ fontWeight: "bold" }}
              >
                {doctorName}
              </Typography>
            </Box>

            <Box display="flex" justifyContent="left" mt={2}>
              <Button
                variant="outlined"
                onClick={() => scrollToSection("general")}
                sx={{
                  "&:hover": { backgroundColor: "#005f9d", color: "white" },
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
                <Typography
                  sx={{
                    fontWeight: "bold"
                  }}
                  variant="h6"
                  color="textPrimary"
                >
                  Thông tin bác sĩ
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {doctor?.dentist_info.description || "Không có mô tả"}
                </Typography>
              </Box>
            </Box>


            <Box mt={2} p={2} bgcolor="#f9f9f9" borderRadius={2} boxShadow={1}>
              <Box ref={experienceRef}>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h6"
                  color="textPrimary"
                >
                  Kinh nghiệm
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {doctor?.dentist_info.actived_date || "Chưa cập nhật kinh nghiệm"}
                </Typography>
              </Box>
            </Box>

            <Box mt={2} p={2} bgcolor="#f9f9f9" borderRadius={2} boxShadow={1}>
              <Box ref={trainingRef}>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h6"
                  color="textPrimary"
                >
                  Đào tạo
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {doctor?.dentist_info.degree || "Chưa cập nhật thông tin đào tạo"}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box padding={2} bgcolor="#ffffff" borderRadius={2} boxShadow={3}>
            <Typography
              variant="h6"
              color="textPrimary"
              align="center"
              sx={{ fontWeight: "bold" }}
            >
              Đặt lịch hẹn
            </Typography>

            <form onSubmit={formik.handleSubmit}>

              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="clinicLabel">Phòng khám</InputLabel>
                <Select
                  labelId="clinicLabel"
                  id="clinicId"
                  name="clinicId"
                  label="Phòng khám"
                  value={formik.values.clinicId || doctor.dentist_info.clinic.id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.clinicId && Boolean(formik.errors.clinicId)}
                  helperText={formik.touched.clinicId && formik.errors.clinicId}
                  disabled
                >
                  <MenuItem value={doctor.dentist_info.clinic.id}>
                    {doctor.dentist_info.clinic.name}
                  </MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="doctorLabel">Bác sĩ</InputLabel>
                <Select
                  labelId="doctorLabel"
                  id="doctorId"
                  name="doctorId"
                  label="Bác sĩ"
                  value={formik.values.doctorId || doctor.id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.doctorId && Boolean(formik.errors.doctorId)}
                  helperText={formik.touched.doctorId && formik.errors.doctorId}
                  disabled
                >
                  <MenuItem value={doctor.id}>
                    {doctor.name}
                  </MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="appointmentTypeLabel">Loại dịch vụ</InputLabel>
                <Select
                  labelId="appointmentTypeLabel"
                  id="appointmentType"
                  name="appointmentType"
                  label="Loại dịch vụ"
                  value={formik.values.appointmentType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.appointmentType && Boolean(formik.errors.appointmentType)}
                  helperText={formik.touched.appointmentType && formik.errors.appointmentType}
                >
                  {services.map(service => (
                    <MenuItem key={service.id} value={service.id}>
                      {service.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                id="date"
                name="date"
                label="Chọn ngày"
                type="date"
                fullWidth
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formik.values.date}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleDateChange(e);
                }}
                inputProps={{
                  min: new Date().toISOString().split("T")[0], // disable ngày quá khứ
                  max: oneWeekFromNow.toISOString().split("T")[0], // Ngày hiện tại + 7 ngày 
                }}
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
              />

              <FormControl fullWidth margin="normal">
                <FormLabel component="legend">Chọn giờ khám</FormLabel>
                <Grid container spacing={1}>
                  {slots.length > 0 ? (
                    slots.map((slot, index) => (
                      <Grid item xs={6} sm={4} md={3} key={index}>
                        <Button
                          variant={selectedSlot === slot.slot_id ? "contained" : "outlined"}
                          fullWidth
                          disabled={slot.disabled || slot.current_patients >= slot.slot.max_patients}
                          sx={{
                            backgroundColor:
                              slot.disabled || slot.current_patients >= slot.slot.max_patients
                                ? "red"
                                : selectedSlot === slot.slot_id
                                  ? "#3f51b5"
                                  : "inherit",
                            color:
                              slot.disabled || slot.current_patients >= slot.slot.max_patients
                                ? "#ffffff"
                                : "inherit",
                            fontWeight: selectedSlot === slot.slot_id ? "bold" : "normal",
                          }}
                          onClick={() => handleSlotSelect(slot.slot_id)}
                        >
                          {`${slot.slot.start_time} - ${slot.slot.end_time}`}
                        </Button>
                      </Grid>
                    ))
                  ) : (
                    <Grid item xs={12}>
                      <Typography color="error">Không có giờ khám khả dụng</Typography>
                    </Grid>
                  )}
                </Grid>
                {formik.touched.time && formik.errors.time && (
                  <Typography color="error">{formik.errors.time}</Typography>
                )}
              </FormControl>


              <Box mt={2} display="flex" justifyContent="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={formik.isSubmitting}
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
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Booking;
