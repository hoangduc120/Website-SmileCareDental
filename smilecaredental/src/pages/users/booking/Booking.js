import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Avatar, Box, Button, FormControl, FormControlLabel,
  FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack,
  TextField, Typography
} from "@mui/material";
import { timeSlots } from "../../../components/datatest/doctor/TimeData";
import { clinics } from "../../../components/datatest/doctor/ClinicsData";

function Booking() {

  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);

  const generalRef = useRef(null);
  const experienceRef = useRef(null);
  const trainingRef = useRef(null);

  useEffect(() => {
    clinics.forEach((clinic) => {
      const foundDoctor = clinic.doctors.find(
        (doc) => doc.index === parseInt(doctorId)
      );
      if (foundDoctor) setDoctor(foundDoctor);
    });
  }, [doctorId]);

  const initialValues = {
    appointmentType: "",
    name: "",
    gender: "",
    phone: "",
    date: "",
    time: "",
  }
  // onSubmit sẽ còn chỉnh sửa
  const onSubmit = (values, props) => {
    setTimeout(() => {
      props.resetForm()
      props.setSubmitting(false)
    }, 2000)
  }

  const validationSchema = Yup.object().shape({
    appointmentType: Yup.string().required("Vui lòng chọn loại cuộc hẹn"),
    name: Yup.string().required("Vui lòng nhập tên của bạn"),
    gender: Yup.string().oneOf(["male", "female"], "Required").required("Vui lòng không để trống"),
    phone: Yup
      .string()
      .matches(/^[0-9]+$/, "Số điện thoại chỉ chứa các số")
      .length(10, "Số điện thoại phải có ít nhất 10 chữ số")
      .required("Vui lòng nhập số điện thoại"),
    date: Yup.date().required("Vui lòng chọn ngày khám"),
    time: Yup.string().required("Vui lòng chọn giờ khám"),
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
                {doctor.experience &&
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
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              {(props) => (
                <Form>

                  <Grid item xs={12}>
                    <Field as={TextField}
                      id="date"
                      label="Ngày khám"
                      type="date"
                      variant="outlined"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      sx={{ mb: 2 }}
                    />
                  </Grid>

                  <ErrorMessage name="date" component="div" style={{ color: "red" }} />
                  <Stack spacing={2}>
                    {/* tên */}
                    <Field as={TextField} fullWidth name="name" label="Tên của bạn" placeholder="Nhập tên của bạn" />
                    <ErrorMessage name="name" component="div" style={{ color: "red" }} />
                    {/* select cuộc hẹn */}
                    <FormControl fullWidth>
                      <InputLabel id="appointmentType-label">Loại cuộc hẹn</InputLabel>
                      <Field
                        as={Select}
                        labelId="appointmentType-label"
                        id="appointmentType"
                        name="appointmentType"
                        label="Loại cuộc hẹn"
                      >
                        <MenuItem value="">Chọn loại cuộc hẹn</MenuItem>
                        <MenuItem value="Khám">Khám</MenuItem>
                        <MenuItem value="Điều trị">Điều trị</MenuItem>
                      </Field>
                      <ErrorMessage name="appointmentType" component="div" style={{ color: "red" }} />
                    </FormControl>
                    {/* giới tính */}
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Giới Tính</FormLabel>
                      <RadioGroup aria-label="gender" name="gender">
                        <Stack direction="row">
                          <FormControlLabel value="male" control={<Radio />} label="Name" />
                          <FormControlLabel value="female" control={<Radio />} label="Nữ" />
                        </Stack>
                      </RadioGroup>
                    </FormControl>
                    <ErrorMessage name="gender" component="div" style={{ color: "red" }} />

                    <Field as={TextField} fullWidth name="phone" label="Số điện thoại" placeholder="Nhập số điện thoại" />
                    <ErrorMessage name="phone" component="div" style={{ color: "red" }} />

                    <FormControl component="fieldset">
                      <FormLabel component="legend">Chọn giờ khám</FormLabel>
                      <Grid container spacing={1}>
                        {timeSlots.map((slot, index) => (
                          <Grid item xs={6} sm={4} md={3} key={index}>
                            <Button
                              variant={props.values.time === slot ? 'contained' : 'outlined'}
                              fullWidth
                              onClick={() => {
                                props.setFieldValue('time', slot);
                              }}
                            >
                              {slot}
                            </Button>
                          </Grid>
                        ))}
                      </Grid>
                      <ErrorMessage name="time" component="div" style={{ color: "red" }} />
                    </FormControl>


                    <Button type='submit' variant='contained' disabled={props.isSubmitting}
                      color='primary'>{props.isSubmitting ? "Loading" : "Đặt Lịch"}</Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>

      </Grid>
    </Box >
  );
}

export default Booking;
