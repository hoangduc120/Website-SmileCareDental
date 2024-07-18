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
import { getDentistsByClinicIdWithUser } from "../../../api/api";

function Doctors() {
  const { id } = useParams();
  const [clinic, setClinic] = useState(null);

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const response = await getDentistsByClinicIdWithUser(id)
        setClinic(response.data.clinic[0]);
      } catch (error) {
        console.error("Error fetching clinics:", error);
      }
    }
    fetchClinics()
  }, [id]);


  if (!clinic) {
    return <Typography variant="h4">Loading...</Typography>;

  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 2, textAlign: "center" }}>
        Danh sách bác sĩ tại {clinic.name}
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
                image={dentist_info.dentist.image}
                title={dentist_info.dentist.name || "Bác sĩ"}
              />
              <CardContent>
                <Typography variant="h6">{dentist_info.dentist.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {dentist_info.degree}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/book-appointment/${dentist_info.dentist_id}`}
                    sx={{
                      height: 50,
                      backgroundColor: '#1898F3',
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '14px',
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: '#000AFE',
                        color: 'white',
                      },
                    }}
                  >
                    Đặt lịch
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Doctors;