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
  FormLabel,

} from "@mui/material";
import { createAppointment, getAvailableSlotsForDate, getDetailDoctorPage, getPageAllServices,  } from "../../../api/api";
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

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getPageAllServices();
        setServices(response.data.services);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    const fetchDoctorDetails = async (id) => {
      try {
        const response = await getDetailDoctorPage(id);
        setDoctor(response.data.doctor);
        setClinicsData(response.data.clinic);
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
      if (!selectedDate) return
      console.log("Fetching slots for date:", selectedDate)
      const response = await getAvailableSlotsForDate(doctorId, selectedDate)
      console.log("Slots response:", response.data)
      setSlots(response.data.map(item => item.slot))
    } catch (error) {
      console.error("Error fetching available slots:", error);
      console.log("Doctor ID:", doctorId);
      console.log("Selected Date:", selectedDate);
    }
  };

  const handleSlotSelect = (slotId) => {
    setSelectedSlot(slotId);
    formik.setFieldValue("time", slotId);
  };

  const formik = useFormik({
    initialValues: {
      appointmentType: "",
      name: "",
      phone: "",
      date: "",
      time: "",
      clinicId: clinicsData?.id || "",
      dentistId: doctorId,
      serviceId: "",
      slotId: "",
      appointmentDate: "",
    },
    validationSchema: Yup.object().shape({
      appointmentType: Yup.string().required("Vui lòng chọn loại dịch vụ"),
      name: Yup.string().required("Vui lòng nhập tên của bạn"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Số điện thoại chỉ chứa các số")
        .length(10, "Số điện thoại phải có 10 chữ số")
        .required("Vui lòng nhập số điện thoại"),
      date: Yup.date().required("Vui lòng chọn ngày khám"),
      time: Yup.string().required("Vui lòng chọn giờ khám"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const appointmentData = {
          clinicId: clinicsData.id,
          dentistId: values.dentistId,
          serviceId: values.appointmentType,
          slotId: values.slotId,
          appointmentDate: values.date,
        }
        const response = await createAppointment(appointmentData);
        console.log("Appointment created successfully:", response.data);
        alert("Đặt lịch hẹn thành công!");
        resetForm();
      } catch (error) {
        console.error("Error creating appointment:", error);
        alert("Có lỗi xảy ra khi đặt lịch hẹn. Vui lòng thử lại.");
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
  const doctorSpecialty = doctor?.specialty || "Chưa cập nhật chuyên môn";

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
              <Typography variant="subtitle2" color="textSecondary">
                {doctorSpecialty}
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
                  sx={{ fontWeight: "bold" }}
                  variant="h6"
                  gutterBottom
                >
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
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h6"
                  gutterBottom
                >
                  Kinh nghiệm
                </Typography>
                {doctor?.experience &&
                  doctor.experience.split("\n").map((exp, index) => (
                    <Typography variant="body1" key={index} paragraph>
                      {exp}
                    </Typography>
                  ))}
              </Box>
              <Box ref={trainingRef} mt={4}>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h6"
                  gutterBottom
                >
                  Đào tạo
                </Typography>
                {doctor?.training &&
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
            <Typography variant="h6" gutterBottom>
              Đặt lịch hẹn
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="date"
                name="date"
                label="Ngày khám"
                type="date"
                margin="normal"
                value={formik.values.date}
                onChange={(event) => {
                  formik.handleChange(event);
                  handleDateChange(event);
                }}
                onBlur={formik.handleBlur}
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Loại Dịch Vụ</InputLabel>
                <Select
                  labelId="appointmentType-label"
                  id="appointmentType"
                  name="appointmentType"
                  value={formik.values.appointmentType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.appointmentType && Boolean(formik.errors.appointmentType)}
                >
                  {services.map((service) => (
                    <MenuItem key={service.id} value={service.id}>
                      {service.name}
                    </MenuItem>
                  ))}
                </Select>
                {formik.touched.appointmentType && formik.errors.appointmentType ? (
                  <Typography variant="body2" color="error">
                    {formik.errors.appointmentType}
                  </Typography>
                ) : null}
              </FormControl>

              <TextField
                fullWidth
                id="name"
                name="name"
                label="Họ và Tên"
                margin="normal"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                fullWidth
                id="phone"
                name="phone"
                label="Số điện thoại"
                margin="normal"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />

              <FormControl fullWidth margin="normal">
                <FormLabel component="legend">Chọn giờ khám</FormLabel>
                <Grid container spacing={1}>
                  {slots.map((slot, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                      <Button
                        variant={selectedSlot === slot.id ? "contained" : "outlined"}
                        fullWidth
                        onClick={() => handleSlotSelect(slot.id)}
                      >
                        {`${slot.start_time} - ${slot.end_time}`}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
                {
                  formik.touched.time && formik.errors.time && (
                    <Typography color="error">{formik.errors.time}</Typography>
                  )
                }
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                sx={{ mt: 3 }}
              >
                Đặt lịch
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
     
    </Box>
  );
}

export default Booking;
