import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,

} from "@mui/material";
import axiosInstance from "../../../api/axiosInstance";

function Doctors() {
  const { id } = useParams();
  // const [clinics, setClinics] = useState([]);
  const [clinic, setClinic] = useState(null);

  useEffect(() => {

    axiosInstance
      .get(`clinic/${id}/dentists`)
      .then((res) => {
        setClinic(res.data); // Lưu trữ danh sách phòng khám vào state
      })
      .catch((error) => {
        console.error("Error fetching clinics:", error);
      });
  }, [id]);

  // useEffect(() => {
  //   // Tìm kiếm phòng khám theo id từ params
  //   const foundClinic = clinics.find((clinic) => clinic.id === parseInt(id));
  //   setClinic(foundClinic); // Lưu trữ thông tin phòng khám được tìm thấy vào state
  // }, [clinics, id]);

  if (!clinic) {
    return <Typography variant="h4">Loading...</Typography>;

  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 2, textAlign: "center" }}>
        Danh sách bác sĩ tại {clinic.nameRoom}
      </Typography>

      <Grid container spacing={2}>
        {clinic.dentist_infos.map((dentist_info) => (
          <Grid item xs={12} sm={6} md={4} key={dentist_info.id}>
            <Card sx={{ textAlign: "center" }}>
              <CardMedia
                component="img"
                sx={{
                  height: 140,
                  width: 140,
                  borderRadius: "50%",
                  margin: "0 auto",
                }}
                image={dentist_info.dentist.image } 
                title={dentist_info.dentist.name || "Bác sĩ"}
              />
              <CardContent>
                <Typography variant="h6">{dentist_info.dentist.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {dentist_info.degree}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`/book-appointment/${dentist_info.dentist_id}`}
                  sx={{ marginTop: 2 }}
                >
                  Đặt lịch
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Doctors;