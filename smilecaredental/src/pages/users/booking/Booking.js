import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Avatar,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
} from "@mui/material";
import { useParams } from "react-router-dom";

const doctors = [
  {
    name: "Nguyễn Hữu Nam ",
    specialty: "Nha khoa",
    address: "Số 123 Đường ABC, Thành phố XYZ",
    imageUrl:
      "https://nhakhoakim.com/wp-content/uploads/2024/03/bs-nguyenhuunam.png",
  },
  {
    name: "Ngô Quốc Dương",
    specialty: "Nha khoa",
    address: "Số 123 Đường ABC, Thành phố XYZ",
    imageUrl: "https://nhakhoakim.com/wp-content/uploads/2022/07/Pictur2.png",
  },
  {
    name: "Bùi Ngọc Vĩnh Lộc",
    specialty: "Nha khoa",
    address: "Số 123 Đường ABC, Thành phố XYZ",
    imageUrl:
      "https://nhakhoakim.com/wp-content/uploads/2022/07/locsnhakhoakim.jpg",
  },
  {
    name: "Huỳnh Ngọc Dung Hiền",
    specialty: "Nha khoa",
    address: "Số 123 Đường ABC, Thành phố XYZ",
    imageUrl:
      "https://nhakhoakim.com/wp-content/uploads/2022/07/bsHiennhakhoaKim.jpg",
  },
  {
    name: "Phan Văn Phẩu",
    specialty: "Nha khoa",
    address: "Số 123 Đường ABC, Thành phố XYZ",
    imageUrl:
      "https://nhakhoakim.com/wp-content/uploads/2022/07/phaubsnhakhoakim.png",
  },
  {
    name: "Lê Thị Thùy Dung",
    specialty: "Nha khoa",
    address: "Số 123 Đường ABC, Thành phố XYZ",
    imageUrl:
      "https://nhakhoakim.com/wp-content/uploads/2022/07/dungbsnhakhoakim.jpg",
  },
  {
    name: "Nguyễn Minh Thư",
    specialty: "Nha khoa",
    address: "Số 123 Đường ABC, Thành phố XYZ",
    imageUrl:
      "https://nhakhoakim.com/wp-content/uploads/2019/07/Nguyen-Minh-Thu-15.jpg",
  },
  {
    name: "Nguyễn Thị Lan Anh",
    specialty: "Nha khoa",
    address: "Số 123 Đường ABC, Thành phố XYZ",
    imageUrl:
      "https://nhakhoakim.com/wp-content/uploads/2022/07/Lannhbsnhakhoakim.jpg",
  },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const services = [
  "Cấy Ghép IMPLANT",
  "Niềng Răng Chỉnh",
  "Bọc Răng Sứ Thẩm Mỹ",
  "Nhổ Răng Khôn",
  "Nội Nha Chữa Tủy",
  "Hàm Giả Tháo Lắp",
  "Cạo Vôi Răng",
  "Cắt Nạo Chóp",
  "Nhổ Răng Thường",
  "Điều Trị Cười Hở Lợi",
  "Phẩu Thuật Nướu",
];

function getStyles(service, selectedServices, theme) {
  return {
    fontWeight:
      selectedServices.indexOf(service) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function BookingPage() {
  const theme = useTheme();
  const [time, setTime] = useState("");
  const [gender, setGender] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  const timeSlots = [
    "09:00",
    "09:45",
    "10:30",
    "11:15",
    "13:00",
    "13:45",
    "14:30",
    "15:15",
    "16:00",
    "16:45",
  ];

  let { index } = useParams();
  const doctor = doctors[index];

  const handleServiceChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedServices(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#f0f8ff' }}>
      <Grid container spacing={4}>
        {/* Phần thông tin bác sĩ */}
        <Grid item xs={12} md={6}>
          <Box padding={2} bgcolor="#ffff" borderRadius={2} boxShadow={3}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            >
              Thông tin bác sĩ
            </Typography>
            <Avatar
              alt={doctor.name}
              src={doctor.imageUrl}
              sx={{
                width: 170,
                height: 170,
                mb: 2,
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
              }}
            />
            <Typography variant="subtitle1">
              Tên bác sĩ: <strong>{doctor.name}</strong>
            </Typography>
            <Typography variant="subtitle1">
              Chuyên môn: <strong>{doctor.specialty}</strong>
            </Typography>
            <Typography variant="subtitle1">
              Địa chỉ: <strong>{doctor.address}</strong>
            </Typography>
          </Box>
        </Grid>
        {/* Phần lựa chọn giờ đặt lịch và thông tin đặt lịch */}
        <Grid item xs={12} md={6}>
          <Box padding={2} bgcolor="#ffffff" borderRadius={2} boxShadow={3}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            >
              Đặt lịch hẹn
            </Typography>
            <form onSubmit={handleBookingSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Tên của bạn"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
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
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel id="multiple-service-label">Dịch vụ</InputLabel>
                    <Select
                      labelId="multiple-service-label"
                      id="multiple-service"
                      multiple
                      value={selectedServices}
                      onChange={handleServiceChange}
                      input={<OutlinedInput label="Dịch vụ" />}
                      MenuProps={MenuProps}
                    >
                      {services.map((service) => (
                        <MenuItem
                          key={service}
                          value={service}
                          style={getStyles(service, selectedServices, theme)}
                        >
                          {service}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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

export default BookingPage;
