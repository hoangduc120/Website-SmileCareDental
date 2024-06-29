import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { timeSlots } from "../../../components/datatest/doctor/TimeData";
import { getDetailDoctorPage } from "../../../api/api";

function Booking() {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [clinicsData, setClinicsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const generalRef = useRef(null);
  const experienceRef = useRef(null);
  const trainingRef = useRef(null);

  useEffect(() => {
    const fetchClinics = async (id) => {
      try {
        const response = await getDetailDoctorPage(id)
        setClinicsData(response.data.clinic);
      } catch (error) {
        console.error("Error fetching clinics:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchClinics()
  }, []);

  useEffect(() => {
    if (clinicsData) {
      const foundDoctor = clinicsData
        .map((clinic) =>
          clinic.dentist_infos.find((doc) => doc.dentist_id === parseInt(doctorId))
        )
        .find((doctor) => doctor !== undefined);

      if (foundDoctor) {
        setDoctor(foundDoctor.dentist);
      }
    }
  }, [doctorId, clinicsData]);

  const formik = useFormik({
    initialValues: {
      appointmentType: "",
      name: "",
      gender: "",
      phone: "",
      date: "",
      time: "",
    },
    onSubmit: (values, props) => {
      setTimeout(() => {
        props.resetForm();
        props.setSubmitting(false);
      }, 2000);
    },
    validationSchema: Yup.object().shape({
      appointmentType: Yup.string().required("Vui lòng chọn loại cuộc hẹn"),
      name: Yup.string().required("Vui lòng nhập tên của bạn"),
      gender: Yup.string()
        .oneOf(["male", "female"], "Required")
        .required("Vui lòng không để trống"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Số điện thoại chỉ chứa các số")
        .length(10, "Số điện thoại phải có ít nhất 10 chữ số")
        .required("Vui lòng nhập số điện thoại"),
      date: Yup.date().required("Vui lòng chọn ngày khám"),
      time: Yup.string().required("Vui lòng chọn giờ khám"),
    }),
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

  if (loading) return <Typography>Loading...</Typography>;
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
                alt={doctorName.toString()}
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
                {doctor?.generalInfo &&
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
            <Typography variant="h5" gutterBottom textAlign="center">
              Đặt lịch hẹn
            </Typography>
            <Formik
              initialValues={formik.initialValues}
              onSubmit={formik.handleSubmit}
              validationSchema={formik.validationSchema}
            >
              {(props) => (
                <Form>
                  <Stack spacing={2}>
                    <TextField
                      id="date"
                      label="Ngày khám"
                      type="date"
                      variant="outlined"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      sx={{ mb: 2 }}
                      value={formik.values.date}
                      onBlur={formik.handleBlur}
                      error={formik.touched.date && Boolean(formik.errors.date)}
                      helperText={formik.touched.date && formik.errors.date}
                    />
                    {/* Tên */}
                    <TextField
                      fullWidth
                      name="name"
                      label="Tên của bạn"
                      placeholder="Nhập tên của bạn"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      onBlur={formik.handleBlur}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                    {/* Select loại cuộc hẹn */}
                    <FormControl fullWidth>
                      <InputLabel id="appointmentType-label">
                        Loại cuộc hẹn
                      </InputLabel>
                      <Select
                        labelId="appointmentType-label"
                        id="appointmentType"
                        name="appointmentType"
                        label="Loại cuộc hẹn"
                        value={formik.values.appointmentType}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.appointmentType &&
                          Boolean(formik.errors.appointmentType)
                        }
                        onChange={formik.handleChange}
                      >
                        <MenuItem value="">Chọn loại cuộc hẹn</MenuItem>
                        <MenuItem value="Khám">Khám</MenuItem>
                        <MenuItem value="Điều trị">Điều trị</MenuItem>
                      </Select>
                      {formik.touched.appointmentType &&
                        formik.errors.appointmentType && (
                          <Typography variant="caption" color="error">
                            {formik.errors.appointmentType}
                          </Typography>
                        )}
                    </FormControl>
                    {/* Giới tính */}
                    <FormControl
                      component="fieldset"
                      error={
                        formik.touched.gender && Boolean(formik.errors.gender)
                      }
                    >
                      <FormLabel component="legend">Giới Tính</FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="gender"
                        value={formik.values.gender}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                      >
                        <Stack direction="row">
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Nam"
                          />
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Nữ"
                          />
                        </Stack>
                      </RadioGroup>
                      {formik.touched.gender && formik.errors.gender && (
                        <Typography variant="caption" color="error">
                          {formik.errors.gender}
                        </Typography>
                      )}
                    </FormControl>

                    <TextField
                      fullWidth
                      name="phone"
                      label="Số điện thoại"
                      placeholder="Nhập số điện thoại"
                      value={formik.values.phone}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                      helperText={formik.touched.phone && formik.errors.phone}
                      onChange={formik.handleChange}
                    />

                    <FormControl
                      component="fieldset"
                      error={formik.touched.time && Boolean(formik.errors.time)}
                    >
                      <FormLabel component="legend">Chọn giờ khám</FormLabel>
                      <Grid container spacing={1}>
                        {timeSlots.map((slot, index) => (
                          <Grid item xs={6} sm={4} md={3} key={index}>
                            <Button
                              variant={
                                formik.values.time === slot
                                  ? "contained"
                                  : "outlined"
                              }
                              fullWidth
                              onClick={() => formik.setFieldValue("time", slot)}
                            >
                              {slot}
                            </Button>
                          </Grid>
                        ))}
                      </Grid>
                      {formik.touched.time && formik.errors.time && (
                        <Typography variant="caption" color="error">
                          {formik.errors.time}
                        </Typography>
                      )}
                    </FormControl>

                    <Button
                      type="submit"
                      variant="contained"
                      disabled={props.isSubmitting}
                      color="primary"
                    >
                      {props.isSubmitting ? "Loading" : "Đặt Lịch"}
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Booking;
