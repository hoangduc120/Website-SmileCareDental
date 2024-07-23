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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [slots, setSlots] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  const today = new Date();
  const oneWeekFromNow = new Date(today);
  oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDetailClinicPage(id);
        setClinics(res.data.clinic);
        setFeedbacks(res.data.clinic.feedbacks);
        console.log(res.data.clinic.feedbacks);
        setLoading(false);
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
        const slots = response.data; // Set slots with response.data.slots

        // Get current date and time
        const now = new Date();
        const currentDate = now.toISOString().split("T")[0];
        const currentTime = now.toTimeString().split(" ")[0].substring(0, 5); // 'HH:MM' format

        console.log("Current date:", currentDate);
        console.log("Current time:", currentTime);

        // Disable slots that are past the current time for today
        const updatedSlots = slots.map(slot => {
          const slotStartTime = slot.slot.start_time;

          // Check if the slot date is today and past the current time
          if (date === currentDate && slotStartTime < currentTime) {
            console.log("Disabling slot at:", slotStartTime);
            return {
              ...slot,
              isDisabled: true,
            };
          }
          return slot;
        });

        console.log("Updated slots:", updatedSlots);

        setSlots(updatedSlots); // Update slots with the disabled status
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
    const selectedSlot = slots.find(slot => slot.slot_id === slotId);
    if (selectedSlot && !selectedSlot.isDisabled) {
      setSelectedSlot(slotId);
      formik.setFieldValue("slotId", slotId);
      formik.setFieldValue("time", slotId);
    }
  };

  const handleScrollToInfo = () => {
    const infoSection = document.getElementById("infoSection");
    infoSection.scrollIntoView({ behavior: "smooth" });
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
                    <Typography>{`${(service.service.price * 1000).toLocaleString('vi-VN')} VNĐ`}</Typography>
                  </Box>
                ))}
            </Box>

            <Box
              sx={{
                backgroundColor: "#E0F7FA",
                padding: "12px",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                Đánh giá
              </Typography>
              {/* Display feedbacks */}
              {feedbacks.length > 0 ? (
                feedbacks.map((feedback) => (
                  <Box key={feedback.id} sx={{ marginBottom: "10px" }}>
                    <Typography variant="subtitle1">{feedback.feedback_text}</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                      <TextRating value={feedback.rating} readOnly />
                      <Typography variant="body2" sx={{ marginLeft: "10px" }}>
                        {new Date(feedback.feedback_date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                      <Typography variant="body2" sx={{ marginLeft: "10px" }}>
                        {feedback.customer.name}
                      </Typography>
                    </Box>
                  </Box>
                ))
              ) : (
                <Typography>Chưa có đánh giá nào cho phòng khám này.</Typography>
              )}
            </Box>

          </Grid>

          {/* Booking Section */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#ffffff",
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
                  inputProps={{
                    min: new Date().toISOString().split("T")[0], // disable ngày quá khứ
                    max: oneWeekFromNow.toISOString().split("T")[0], // Ngày hiện tại + 7 ngày 
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
                    {slots.length > 0 ? (
                      slots.map((slot, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                          <Button
                            variant={selectedSlot === slot.slot_id ? "contained" : "outlined"}
                            fullWidth
                            disabled={slot.isDisabled || slot.current_patients >= slot.slot.max_patients}
                            sx={{
                              backgroundColor:
                                slot.isDisabled || slot.current_patients >= slot.slot.max_patients
                                  ? "red"
                                  : selectedSlot === slot.slot_id
                                    ? "#3f51b5"
                                    : "inherit",
                              color:
                                slot.isDisabled || slot.current_patients >= slot.slot.max_patients
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

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={formik.isSubmitting}
                  fullWidth
                  sx={{
                    marginTop: '20px', height: 50, backgroundColor: '#1898F3', color: 'white', fontWeight: '700', fontSize: '14px', borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: '#000AFE', color: 'white',
                    },
                    display: 'block', margin: '20px auto 0',
                  }}
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

