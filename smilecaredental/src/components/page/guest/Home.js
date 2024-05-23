import React from "react";
import {
  Box,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Services } from "./data/dichvu/DataServices.js"; // Adjust the import path as necessary

function Home() {
  return (
    <Container>
      <Typography
        variant="h4"
        component="div"
        align="center"
        gutterBottom
        color={"#2098D1"}
        padding={"30px"}
      >
        Dịch vụ tốt nhất ở nha khoa
      </Typography>
      <Box sx={{ paddingX: "15px" }}>
        <Grid container spacing={2}>
          {Services.map((service, index) => (
            <Grid item xs={4} key={index}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <CardMedia
                  component="img"
                  image={service.image}
                  alt={service.alt}
                  height="200"
                />
                <CardContent>
                  <Typography variant="h6" component="div" color="#2098D1">
                    {service.title}
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ paddingX: "15px", marginTop: 4 }}>
        <Typography
          variant="h5"
          component="div"
          align="center"
          gutterBottom
          color={"#2098D1"}
        >
          Đội ngũ y bác sĩ nha khoa
        </Typography>
        {/* You can add additional content for "Đội ngũ y bác sĩ" here */}
      </Box>
    </Container>
  );
}

export default Home;