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
import { clinics } from "../../../components/datatest/doctor/ClinicsData";

function Clinics() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
          backgroundColor: "#f4f6f8",
          padding: "20px 0",
        }}
      >
        <Typography
          variant="h5"
          textTransform={"uppercase"}
          sx={{
            color: "#2098D1",
            fontWeight: "bold",
          }}
        >
          Danh sách các phòng khám đa khoa
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}> 
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ padding: "0 20px" }}
        >
          {clinics.map((clinic, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  minHeight: 400,
                  textAlign: "center",
                  padding: 2,
                  backgroundColor: "#ffffff",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "10px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 140,
                    height: 140,
                    borderRadius: "50%",
                    margin: "0 auto ",
                    border: "3px solid #2098D1",
                  }}
                  image={clinic.image}
                  title={clinic.name}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#333", fontWeight: "bold" }}
                  >
                    {clinic.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {clinic.info}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      backgroundColor: "#2098D1",
                      "&:hover": { backgroundColor: "#176a8c" },
                    }}
                    component={Link}
                    to={`/clinic/${clinic.id}`}
                  >
                    Đặt Lịch
                  </Button>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                     <Button variant="outlined" style={{ margin: "0 5px" }}>
                      <Link to={`/brand/${clinic.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        Xem thông tin
                      </Link>
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Clinics;
