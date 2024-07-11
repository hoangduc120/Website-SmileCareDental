import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
} from "@mui/material";
import { useParams } from "react-router-dom";
import TextRating from "@mui/material/Rating";
import { createAppointment, getAvailableSlotsForDate, getDetailClinicPage } from "../../../api/api";
import { useFormik } from "formik";
import * as Yup from "yup";
function Brand() {
  const { id } = useParams();
  const [clinics, setClinics] = useState(null);
  const [showReviewInput, setShowReviewInput] = useState(false);
  const [reviewContent, setReviewContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [slots, setSlots] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDetailClinicPage(id);
        setClinics(res.data.clinic);
        setLoading(false);
        console.log("Clinic details:", clinics);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);


  const handleDateChange = async (event) => {
    const date = event.target.value;
    setSelectedDate(date);

    if (date && selectedDoctor) {
      try {
        console.log("Fetching slots for doctor:", selectedDoctor, "on date:", date);
        const response = await getAvailableSlotsForDate(selectedDoctor, date);
        console.log("Slots response:", response.data);
        setSlots(response.data.map(item => item.slot));
      } catch (error) {
        console.error("Error fetching available slots:", error);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      date: "",
      clinicId: "", 
      time: "",
      dentistId: "",
      serviceId: "",
      slotId: "",
      appointmentDate: "",
    },
    validationSchema: Yup.object().shape({
      date: Yup.date().required("Vui lòng chọn ngày khám"),
      time: Yup.string().required("Vui lòng chọn giờ khám"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const appointmentData = {
          clinicId: id,
          dentistId: values.dentistId,
          serviceId: values.serviceId,
          slotId: values.slotId,
          appointmentDate: values.date,
        };
        console.log("Appointment data being sent:", appointmentData);
        const response = await createAppointment(appointmentData);
        console.log("Appointment created successfully:", response.data);
        alert("Đặt lịch hẹn thành công!");
        setSelectedDoctor("");
        setSelectedService("");
        setSelectedDate("");
        setSelectedSlot("");
        resetForm();
        setSlots([]);
      } catch (error) {
        console.error("Error creating appointment:", error);
        alert("Có lỗi xảy ra khi đặt lịch hẹn. Vui lòng thử lại.");
      } finally {
        setSubmitting(false);
        resetForm();
      }
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!clinics) {
    return <div>Không tìm thấy phòng khám!</div>;
  }

  const {
    name,
    address,
    phonenumber,
    clinic_owner,
    image,
    bannerUrl,
    description,
    clinic_schedules: workingHours,
    clinic_services: services,
    dentist_infos: dentists,
  } = clinics;

  const handleSlotSelect = (slotId) => {
    setSelectedSlot(slotId);
    formik.setFieldValue("slotId", slotId);
    formik.setFieldValue("time", slotId);
  };

  const handleScrollToInfo = () => {
    const infoSection = document.getElementById("infoSection");
    infoSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleWriteReview = () => {
    setShowReviewInput(true);
  };

  const handleChangeReviewContent = (event) => {
    setReviewContent(event.target.value);
  };

  const handleSubmitReview = () => {
    console.log("Review submitted:", reviewContent);
    setReviewContent("");
    setShowReviewInput(false);
  };

  const handleDoctorChange = (event) => {
    const doctorId = event.target.value;
    setSelectedDoctor(doctorId);
    formik.setFieldValue("dentistId", doctorId);
  };

  const handleServiceChange = (event) => {
    const serviceId = event.target.value;
    setSelectedService(serviceId);
    formik.setFieldValue("serviceId", serviceId);
  };


  return (
    <Box>
      {/* Banner */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "200px", md: "300px" },
          backgroundImage: `url(${bannerUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>

      {/* Clinic Information */}
      <Box sx={{ marginTop: "-30px", alignItems: "center" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              alt={name}
              src={image}
              sx={{
                width: { xs: 100, md: 150 },
                height: { xs: 100, md: 150 },
                marginBottom: "10px",
                border: "5px solid",
                borderColor: "#9FD7F9",
              }}
            />
          </Grid>
          <Grid item xs={12} md>
            <Typography variant="h5" sx={{ marginBottom: "10px" }}>
              {name}
            </Typography>
          </Grid>
        </Grid>

        {/* Navigation Buttons */}
        <Box sx={{ mt: 2, mb: 4, display: "flex", flexWrap: "wrap", gap: 2 }}>
          <Button
            variant="contained"
            sx={{ marginRight: "10px" }}
            onClick={handleScrollToInfo}
          >
            Xem thông tin chung
          </Button>
          {/* Add more buttons as needed */}
        </Box>
      </Box>

      {/* General Information Section */}
      <Box id="infoSection" sx={{ mt: 5, p: 3, bgcolor: "#f5f5f5" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            {/* Working Hours */}
            <Box
              sx={{
                backgroundColor: "#E0F7FA",
                padding: "12px",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                Giờ làm việc
              </Typography>
              {Array.isArray(workingHours) &&
                workingHours.map(({ day_of_week, start_time, end_time }) => (
                  <Box
                    key={day_of_week}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: day_of_week === "Sunday" ? "red" : "inherit",
                      marginBottom: "5px",
                    }}
                  >
                    <Typography>{day_of_week}</Typography>
                    <Typography>{`${start_time} - ${end_time}`}</Typography>
                  </Box>
                ))}
            </Box>

            {/* Description */}
            <Box
              sx={{
                backgroundColor: "#E0F7FA",
                padding: "12px",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                Giới thiệu
              </Typography>
              <Typography>{description}</Typography>
            </Box>

            {/* Address and Contact */}
            <Box
              sx={{
                backgroundColor: "#E0F7FA",
                padding: "12px",
                borderRadius: "4px",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                Địa Chỉ
              </Typography>
              <Typography variant="body1">{`Địa chỉ: ${address}`}</Typography>
              <Typography variant="body1">{`Số điện thoại: ${phonenumber}`}</Typography>
              <Typography variant="body1">{`Email: ${clinic_owner?.email || ""
                }`}</Typography>
            </Box>

            {/* Price List */}
            <Box
              id="priceListSection"
              sx={{
                border: "2px solid #9FD7F9",
                padding: "10px",
                borderRadius: "5px",
                marginTop: "20px",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                Bảng Giá Dịch Vụ
              </Typography>
              {Array.isArray(services) &&
                services.map((service) => (
                  <Box
                    key={service.id}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                      padding: "10px",
                      backgroundColor: "#BBDEFB",
                    }}
                  >
                    <Typography>
                      <strong>{service.service.name}:</strong>{" "}
                    </Typography>
                    <Typography>{`${service.service.price} VNĐ`}</Typography>
                  </Box>
                ))}
            </Box>

            {/* Introduction */}
            <Box
              id="introduction"
              sx={{
                backgroundColor: "#E0F7FA",
                padding: "12px",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                Giới Thiệu
              </Typography>
              <Typography>{description}</Typography>
            </Box>

            {/* Reviews */}
            <Box
              id="review"
              sx={{
                border: "2px solid #9FD7F9",
                padding: "10px",
                borderRadius: "5px",
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                Đánh Giá
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TextRating
                  sx={{ marginRight: "10px", alignSelf: "center" }}
                ></TextRating>

                <Button variant="contained" onClick={handleWriteReview}>
                  Viết Đánh Giá
                </Button>
              </Box>
            </Box>
            {/* Review Input */}
            {showReviewInput && (
              <Box
                sx={{
                  border: "2px solid #9FD7F9",
                  padding: "10px",
                  borderRadius: "5px",
                  marginTop: "20px",
                }}
              >
                <TextField
                  id="outlined-multiline-static"
                  label="Viết Đánh Giá"
                  multiline
                  rows={4}
                  value={reviewContent}
                  onChange={handleChangeReviewContent}
                  variant="outlined"
                  fullWidth
                  sx={{ marginBottom: "10px" }}
                />
                <Button
                  variant="contained"
                  onClick={handleSubmitReview}
                  sx={{ marginRight: "10px" }}
                >
                  Gửi Đánh Giá
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => setShowReviewInput(false)}
                >
                  Hủy
                </Button>
              </Box>
            )}
          </Grid>
          {/* Booking Section */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#E0F7FA",
                padding: "12px",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                Đặt Lịch Khám
              </Typography>
              <form onSubmit={formik.handleSubmit}>
                <FormControl fullWidth sx={{ marginBottom: "10px" }}>
                  <InputLabel id="doctor-label">Bác Sĩ</InputLabel>
                  <Select
                    labelId="doctor-label"
                    id="doctor-select"
                    value={selectedDoctor}
                    onChange={handleDoctorChange}
                    label="Bác Sĩ"
                  >
                    {Array.isArray(dentists) &&
                      dentists.map((dentist) => (
                        <MenuItem key={dentist.dentist_id} value={dentist.dentist_id}>
                          {dentist.dentist.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
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

                <FormControl fullWidth sx={{ marginBottom: "10px" }}>
                  <InputLabel id="service-label">Dịch Vụ</InputLabel>
                  <Select
                    labelId="service-label"
                    id="service-select"
                    value={selectedService}
                    onChange={handleServiceChange}
                    label="Dịch Vụ"
                  >
                    {Array.isArray(services) &&
                      services.map((service) => (
                        <MenuItem key={service.id} value={service.id}>
                          {service.service.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>

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
                  {formik.touched.time && formik.errors.time && (
                    <Typography color="error">{formik.errors.time}</Typography>
                  )}
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
    </Box>
  );
}

export default Brand;

