import React from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Grid, Typography, Button } from "@mui/material";
import { clinics } from "../../../components/datatest/doctor/ClinicsData";

function Doctors() {
  const { id } = useParams();
  const clinic = clinics.find((clinic) => clinic.id === parseInt(id));

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 2, textAlign: "center" }}>
        Danh sách bác sĩ tại {clinic.name}
      </Typography>
      {/* <Typography variant="h6" sx={{ marginBottom: 2, textAlign: "center" }}>
        Thông tin phòng khám
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2, textAlign: "center" }}>
        {clinic.info}
      </Typography> */}
      <Grid container spacing={2}>
        {clinic.doctors.map((doctor) => (
          <Grid item xs={12} sm={6} md={4} key={doctor.index}>
            <Card sx={{ textAlign: "center" }}>
              <CardMedia
                component="img"
                sx={{ height: 140, width: 140, borderRadius: "50%", margin: "0 auto" }}
                image={doctor.image}
                title={doctor.name}
              />
              <CardContent>
                <Typography variant="h6">{doctor.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {doctor.specialty}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`/book-appointment/${doctor.index}`}
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
