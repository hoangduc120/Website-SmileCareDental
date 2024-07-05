import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import TextRating from "@mui/material/Rating";
import { getDetailClinicPage } from "../../../api/api";

function Brand() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [brand, setBrand] = useState(null);
  const [showReviewInput, setShowReviewInput] = useState(false); // State để kiểm soát việc hiển thị phần ghi chú
  const [reviewContent, setReviewContent] = useState(""); // State để lưu nội dung ghi chú
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await getDetailClinicPage(id)
        setBrand(res.data.clinic)
        setLoading(false)
      }
      catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchData()
  }, [id])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!brand) {
    return <div>Không tìm thấy phòng khám!</div>;
  }

  const {
    name,
    address,
    phonenumber,
    clinic_owner,
    image,
    bannerUrl,
    description,
    clinic_schedules: workingHours,
    clinic_services: services,
    promotionalBannerUrl,
  } = brand;

  const handleScrollToInfo = () => {
    const infoSection = document.getElementById("infoSection");
    infoSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleWriteReview = () => {
    // Khi nhấn vào nút "Viết Đánh Giá", cập nhật state để hiển thị phần ghi chú
    setShowReviewInput(true);
  };

  const handleChangeReviewContent = (event) => {
    // Lưu nội dung ghi chú vào state
    setReviewContent(event.target.value);
  };

  const handleSubmitReview = () => {
    // Xử lý logic gửi đánh giá ở đây
    console.log("Review submitted:", reviewContent);
    // Reset state sau khi gửi đánh giá
    setReviewContent("");
    setShowReviewInput(false);
  };

  const handleBookAppointment = () => {
    // Redirect to doctor page
    navigate(`/clinic/${id}`);
  };

  // phần này dùng cuộn đến bảng giá
  const handleScrollToPriceList = () => {
    const priceListSection = document.getElementById("priceListSection");
    priceListSection.scrollIntoView({ behavior: "smooth" });
  };

  // phần này dùng cuộn đến phần thông tin chi tiết
  const handleScrollToIntroduction = () => {
    const priceListSection = document.getElementById("introduction");
    priceListSection.scrollIntoView({ behavior: "smooth" });
  };

  // phần này dùng cuộn đến đánh giá
  const handleScrollToReview = () => {
    const priceListSection = document.getElementById("review");
    priceListSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box>
      {/* Phần tiêu đề */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "200px", md: "300px" },
          backgroundImage: `url(${bannerUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>

      {/* Thông tin phòng khám */}
      <Box sx={{ marginTop: "-30px", alignItems: "center" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              alt={name}
              src={image}
              sx={{
                width: { xs: 100, md: 150 },
                height: { xs: 100, md: 150 },
                marginBottom: "10px",
                border: "5px solid",
                borderColor: "#9FD7F9",
              }}
            />
          </Grid>
          <Grid item xs={12} md>
            <Typography variant="h5" sx={{ marginBottom: "10px" }}>
              {name}
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: 2, mb: 4, display: "flex", flexWrap: "wrap", gap: 2 }}>
          <Button
            variant="contained"
            sx={{ marginRight: "10px" }}
            onClick={handleScrollToInfo}
          >
            Xem thông tin chung
          </Button>
          <Button
            variant="contained"
            sx={{ marginRight: "10px" }}
            onClick={handleScrollToPriceList}
          >
            Bảng giá
          </Button>
          <Button
            variant="contained"
            sx={{ marginRight: "10px" }}
            onClick={handleScrollToIntroduction}
          >
            Giới thiệu
          </Button>
          <Button variant="contained" onClick={handleScrollToReview}>
            Đánh giá
          </Button>
        </Box>
      </Box>

      {/* Phần thông tin chi tiết */}
      <Box id="infoSection" sx={{ mt: 5, p: 3, bgcolor: "#f5f5f5" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
              Giờ làm việc
            </Typography>
            <Box
              sx={{
                backgroundColor: "#E0F7FA",
                padding: "12px",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
            >
              {Array.isArray(workingHours) &&
                workingHours.map(({ day_of_week, start_time, end_time }) => (
                  <Box
                    key={day_of_week}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: day_of_week === "Sunday" ? "red" : "inherit",
                      marginBottom: "5px",
                    }}
                  >
                    <Typography>{[day_of_week]}</Typography>
                    <Typography>{`${start_time} - ${end_time}`}</Typography>
                  </Box>
                ))
              }

            </Box>

            <Box
              sx={{
                backgroundColor: "#E0F7FA",
                padding: "12px",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                Giới thiệu
              </Typography>
              <Typography>{description}</Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#E0F7FA",
                padding: "12px",
                borderRadius: "4px",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                Địa Chỉ
              </Typography>
              <Typography variant="body1">{`Địa chỉ: ${address}`}</Typography>
              <Typography variant="body1">{`Số điện thoại: ${phonenumber}`}</Typography>
              <Typography variant="body1">{`Email: ${clinic_owner?.email}`}</Typography>

            </Box>

            <Box
              id="priceListSection"
              sx={{
                border: "2px solid #9FD7F9",
                padding: "10px",
                borderRadius: "5px",
                marginTop: "20px",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                Bảng Giá Dịch Vụ Nha Khoa
              </Typography>
              {Array.isArray(services) && services.map((service, index) => (
                <Box key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    padding: "10px",
                    backgroundColor: index % 2 === 0 ? "#BBDEFB" : "#E3F2FD",
                  }}
                >
                  <Typography>
                    <strong>{service.service.name}:</strong>{" "}
                  </Typography>
                  <Typography>{service.service.price} VNĐ</Typography>
                </Box>
              ))}
            </Box>

            <Box
              id="introduction"
              sx={{
                backgroundColor: "#E0F7FA",
                padding: "12px",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                Giới Thiệu
              </Typography>
              <Typography variant="body1">{description}</Typography>
            </Box>

            <Box
              id="review"
              sx={{
                border: "2px solid #9FD7F9",
                padding: "10px",
                borderRadius: "5px",
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                Đánh Giá
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TextRating
                  sx={{ marginRight: "10px", alignSelf: "center" }}
                ></TextRating>

                <Button variant="contained" onClick={handleWriteReview}>
                  Viết Đánh Giá
                </Button>
              </Box>
            </Box>
            {/* Hiển thị phần ghi chú khi showReviewInput === true */}
            {showReviewInput && (
              <Box
                sx={{
                  border: "2px solid #9FD7F9",
                  padding: "10px",
                  borderRadius: "5px",
                  marginTop: "20px",
                }}
              >
                <TextField
                  label="Viết đánh giá của bạn"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  value={reviewContent}
                  onChange={handleChangeReviewContent}
                />
                <Button
                  variant="contained"
                  sx={{ marginTop: "10px" }}
                  onClick={handleSubmitReview}
                >
                  Gửi Đánh Giá
                </Button>
              </Box>
            )}
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: { xs: "200px", md: "300px" },
                mb: 2,
                borderRadius: "5px",
                marginBottom: "20px",
                backgroundImage: `url(${promotionalBannerUrl})`,
                backgroundSize: "100% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Box>
            <Button
              variant="contained"
              color="primary"
              onClick={handleBookAppointment}
            >
              Đặt lịch ngay
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Brand;