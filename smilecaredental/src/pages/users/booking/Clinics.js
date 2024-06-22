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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Clinics() {
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    axios
      .get("https://667113c7e083e62ee439f20f.mockapi.io/clinics")
      .then((response) => {
        setClinics(response.data);
      })
      .catch((error) => {
        console.error("Error fetching clinics:", error);
      });
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
          backgroundColor: "#f4f6f8",
          padding: { xs: "10px 0", sm: "20px 0" },
        }}
      >
        <Typography
          variant="h5"
          textTransform={"uppercase"}
          sx={{
            color: "#2098D1",
            fontWeight: "bold",
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.75rem" },
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
          sx={{ padding: { xs: "0 10px", sm: "0 20px" } }}
        >
          {clinics.map((clinic, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: { xs: "100%", sm: 345 },
                  minHeight: 400,
                  textAlign: "center",
                  padding: 2,
                  backgroundColor: "#ffffff",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "10px",
                  margin: "0 auto",
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
                  image={clinic.imageRoom}
                  
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: "#333",
                      fontWeight: "bold",
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                    }}
                  >
                    {clinic.nameRoom}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {clinic.info}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      backgroundColor: "#2098D1",
                      "&:hover": { backgroundColor: "#176a8c" },
                      width: "100%",
                    }}
                    component={Link}
                    to={`/clinic/${clinic.id}`}
                  >
                    Đặt Lịch
                  </Button>
                  <Button variant="outlined" sx={{ width: "100%" }}>
                    <Link
                      to={`/brand/${clinic.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Xem thông tin
                    </Link>
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

export default Clinics;
