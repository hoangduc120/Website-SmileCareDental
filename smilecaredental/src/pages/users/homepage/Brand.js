import React, { useState } from "react";
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
import brandsData from "../../../components/datatest/brands/BrandsData";

const vietnameseDays = {
  Monday: "Thứ hai",
  Tuesday: "Thứ ba",
  Wednesday: "Thứ tư",
  Thursday: "Thứ năm",
  Friday: "Thứ sáu",
  Saturday: "Thứ bảy",
  Sunday: "Chủ nhật",
};

function Brand() {
  const { id } = useParams();
  const navigate = useNavigate();
  const validId = id && brandsData.some((brand) => brand.id === id);
  const [showReviewInput, setShowReviewInput] = useState(false);
  const [reviewContent, setReviewContent] = useState("");

  if (!validId) {
    return <div>Không tìm thấy phòng khám!</div>;
  }

  const brand = brandsData.find((brand) => brand.id === id);
  const {
    name,
    address,
    imageUrl,
    bannerUrl,
    introduction,
    workingHours,
    promotionalBannerUrl,
  } = brand;

  const handleScrollToInfo = () => {
    const infoSection = document.getElementById("infoSection");
    infoSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleWriteReview = () => {
    setShowReviewInput(true);
  };

  const handleChangeReviewContent = (event) => {
    setReviewContent(event.target.value);
  };

  const handleSubmitReview = () => {
    console.log("Review submitted:", reviewContent);
    setReviewContent("");
    setShowReviewInput(false);
  };

  const handleBookAppointment = () => {
    navigate(`/clinic/${id}`);
  };

  const handleScrollToPriceList = () => {
    const priceListSection = document.getElementById("priceListSection");
    priceListSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToIntroduction = () => {
    const introductionSection = document.getElementById("introduction");
    introductionSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToReview = () => {
    const reviewSection = document.getElementById("review");
    reviewSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={{ mx: 5 }}>
      <Box
        sx={{
          width: "100%",
          height: "300px",
          backgroundImage: `url(${bannerUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>

      <Box sx={{ marginTop: "-30px", alignItems: "center" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              alt={name}
              src={imageUrl}
              sx={{
                width: 150,
                height: 150,
                marginBottom: "10px",
                border: "5px solid",
                borderColor: "#9FD7F9",
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h5" sx={{ marginBottom: "10px" }}>
              {name}
            </Typography>
            <Typography variant="body1">{`Địa chỉ: ${address}`}</Typography>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: "20px" }}>
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
              {Object.entries(workingHours).map(([day, hours]) => (
                <Box
                  key={day}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: day === "Sunday" ? "red" : "inherit",
                    marginBottom: "5px",
                  }}
                >
                  <Typography>{vietnameseDays[day]}</Typography>
                  <Typography>{hours}</Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                backgroundColor: "#E0F7FA",
                padding: "12px",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
            >
              <Typography variant="body1">{brand.customInfo}</Typography>
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
                Danh sách cơ sở
              </Typography>
              <ul>
                {brand.branch &&
                  brand.branch.map((city) => (
                    <li key={city.city}>
                      <Typography variant="body1">
                        <strong>{city.city}</strong>
                      </Typography>
                      <ul>
                        {city.addresses.map((address, index) => (
                          <li key={index}>{address}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
              </ul>
            </Box>
            <Box
              id="introduction"
              sx={{
                border: "2px solid #9FD7F9",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                  Thông tin chi tiết
                </Typography>
                {introduction}
              </Grid>
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
              {brand.priceList.map((item, index) => (
                <div key={index}>
                  <Typography>
                    <strong>{item.serviceName}:</strong>{" "}
                    <span style={{ marginRight: "10px" }}>{item.price}</span>
                  </Typography>
                  {index !== brand.priceList.length - 1 && <br />}{" "}
                </div>
              ))}
            </Box>

            <Box
              id="review"
              sx={{
                border: "2px solid #9FD7F9",
                padding: "10px",
                borderRadius: "5px",
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                Đánh Giá
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TextRating sx={{ marginRight: "10px", alignSelf: "center" }} />
                <Button variant="contained" onClick={handleWriteReview}>
                  Viết Đánh Giá
                </Button>
              </Box>
            </Box>
            {showReviewInput && (
              <Box
                sx={{
                  border: "2px solid #9FD7F9",
                  padding: "10px",
                  borderRadius: "5px",
                  marginTop: "20px",
                  display: "flex",
                  flexDirection: "column", // Chuyển đổi sang column layout
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
            <Box sx={{ ml: 3 }}>
              <Box
                sx={{
                  height: "72px",
                  width: "190px",
                  padding: "10px",
                  borderRadius: "5px",
                  marginBottom: "20px",
                  backgroundImage: `url(${promotionalBannerUrl})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></Box>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleBookAppointment}
              >
                Đặt lịch ngay
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Brand;
