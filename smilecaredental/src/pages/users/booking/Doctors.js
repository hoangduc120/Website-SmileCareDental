import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Card,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Doctors() {
  const doctors = [
    {
      name: "Nguyễn Hữu Nam",
      image:
        "https://nhakhoakim.com/wp-content/uploads/2024/03/bs-nguyenhuunam.png",
      info: [],
    },
    {
      name: "Ngô Quốc Dương",
      image:
        "https://nhakhoakim.com/wp-content/uploads/2022/07/Pictur2.png",
      info: [],
    },
    {
      name: "Bùi Ngọc Vĩnh Lộc",
      image:
        "https://nhakhoakim.com/wp-content/uploads/2022/07/locsnhakhoakim.jpg",
      info: [],
    },
    {
      name: "Kiêm Thị Huyền",
      image:
        "https://nhakhoakim.com/wp-content/uploads/2022/07/huyennskim.png",
      info: [],
    },
    {
      name: "Phan Văn Phẩu",
      image:
        "https://nhakhoakim.com/wp-content/uploads/2022/07/phaubsnhakhoakim.png",
      info: [],
    },
    {
      name: "Lê Thị Thùy Dung",
      image:
        "https://nhakhoakim.com/wp-content/uploads/2022/07/dungbsnhakhoakim.jpg",
      info: [],
    },
    {
      name: "Nguyễn Minh Thư",
      image:
        "https://nhakhoakim.com/wp-content/uploads/2019/07/Nguyen-Minh-Thu-15.jpg",
      info: [],
    },
    {
      name: "Nguyễn Thị Lan Anh",
      image:
        "https://nhakhoakim.com/wp-content/uploads/2022/07/Lannhbsnhakhoakim.jpg",
      info: [],
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
          backgroundColor: "",
          padding: "20px 0",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#2098D1",
          }}
        >
          Danh sách các nha sĩ ở nha khoa
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ padding: "0 20px" }}
        >
          {doctors.map((doctor, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  heigh: 300,
                  textAlign: "center",
                  padding: 8,
                  backgroundColor: "#E0F7FA", // Set light blue background color for cards
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 140,
                    height: 140,
                    borderRadius: "50%",
                    margin: "0 auto ",
                  }}
                  image={doctor.image}
                  title={doctor.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {doctor.name}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/booking/${index}`} // Truyền thông tin về bác sĩ qua URL
                  >
                    Đặt Lịch
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Doctors;
