import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Avatar,
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
    imageUrl:
      "https://nhakhoakim.com/wp-content/uploads/2022/07/Pictur2.png",
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

function BookingPage() {
  const [time, setTime] = useState("");
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

  return (
    <div>
      <Grid container spacing={2}>
        {/* Phần thông tin bác sĩ */}
        <Grid item xs={12} md={6}>
          <Box padding={2} bgcolor="#ffff">
            <Typography variant="h5" gutterBottom>
              Thông tin bác sĩ
            </Typography>
            <Avatar
              alt={doctor.name}
              src={doctor.imageUrl}
              sx={{ width: 170, height: 173 }}
            />
            <Typography variant="subtitle1">Tên bác sĩ: {doctor.name}</Typography>
            <Typography variant="subtitle1">
              Chuyên môn: {doctor.specialty}
            </Typography>
            <Typography variant="subtitle1">Địa chỉ: {doctor.address}</Typography>
          </Box>
        </Grid>
        {/* Phần lựa chọn giờ đặt lịch và thông tin đặt lịch */}
        <Grid item xs={12} md={6}>
          <Box padding={2} bgcolor="#ffffff">
            <Typography variant="h5" gutterBottom>
              Đặt lịch hẹn
            </Typography>
            <form onSubmit={handleBookingSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <TextField
                    label="Tên của bạn"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    label="Số điện thoại"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    id="date"
                    label="Ngày khám"
                    type="date"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Chọn giờ khám</Typography>
                  <Grid container spacing={1}>
                    {timeSlots.map((slot) => (
                      <Grid item key={slot}>
                        <Button
                          variant={time === slot ? "contained" : "outlined"}
                          color="primary"
                          onClick={() => setTime(slot)}
                        >
                          {slot}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Ghi chú"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                  />
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
    </div>
  );
}

export default BookingPage;
