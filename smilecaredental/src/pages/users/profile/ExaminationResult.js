import React, { useState, useEffect } from 'react';
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
  Container,
  Button,
  TextField,
  Rating,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import {
  getResultByCustomer,
  createFeedbackByCustomer,
  updateFeedbackByCustomer
} from "../../../api/api";

const ExaminationResult = () => {
  const [examinationResults, setExaminationResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [reviewContent, setReviewContent] = useState('');
  const [rating, setRating] = useState(0);
  const [open, setOpen] = useState(false);
  const [feedbackSuccessOpen, setFeedbackSuccessOpen] = useState(false);
  const [feedbackErrorOpen, setFeedbackErrorOpen] = useState(false);

  useEffect(() => {
    const fetchExaminationResults = async () => {
      try {
        // Fetch examination results from API
        const data = await getResultByCustomer();
        setExaminationResults(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchExaminationResults();
  }, [feedbackSuccessOpen, feedbackErrorOpen]);

  const handleWriteReview = (result) => {
    if (result.hasFeedback) {
      // If already has feedback, populate review content and rating
      setReviewContent(result.feedback?.feedback_text || '');
      setRating(result.feedback?.rating || 0);
    } else {
      // Reset review content and rating if no previous feedback
      setReviewContent('');
      setRating(0);
    }
    setOpen(true);
    setSelectedResult(result); // Select the current result for review
  };

  const handleChangeReviewContent = (event) => {
    setReviewContent(event.target.value);
  };

  const handleSubmitReview = async () => {
    setOpen(false);
    try {
      if (selectedResult && selectedResult.hasFeedback) {
        // Update feedback if already exists
        await updateFeedbackByCustomer(selectedResult.id, reviewContent, rating);
      } else {
        // Create new feedback if doesn't exist
        await createFeedbackByCustomer(selectedResult.id, reviewContent, rating);
      }
      
      // Fetch updated examination results from API to get the latest data
      const updatedResults = await getResultByCustomer();
      setExaminationResults(updatedResults);

      setFeedbackSuccessOpen(true); // Show success dialog
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setFeedbackErrorOpen(true); // Show error dialog
    } finally {
      setSelectedResult(null);
      setReviewContent('');
      setRating(0);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedResult(null);
    setReviewContent('');
    setRating(0);
  };

  const handleFeedbackSuccessClose = () => {
    setFeedbackSuccessOpen(false);
  };

  const handleFeedbackErrorClose = () => {
    setFeedbackErrorOpen(false);
  };

  return (
    <Container maxWidth='lg'>
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          style={{
            color: '#0477CA',
            display: 'flex',
            justifyContent: 'center',
            fontWeight: '400',
            margin: '30px 0',
          }}
        >
          Kết quả khám
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>STT</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Tên bác sĩ</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Giờ khám</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Ngày khám</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Cơ sở</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Kết quả khám</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Đánh giá</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {examinationResults.map((result, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{result.appointment.dentist.name}</TableCell>
                  <TableCell>{result.appointment.slot.start_time} - {result.appointment.slot.end_time}</TableCell>
                  <TableCell>{new Date(result.result_date).toLocaleDateString()}</TableCell>
                  <TableCell>{result.appointment.clinic.name}</TableCell>
                  <TableCell>{result.result}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color={result.hasFeedback ? "secondary" : "primary"}
                      onClick={() => handleWriteReview(result)}
                      disabled={false} // Always enable button to handle click events
                    >
                      {result.hasFeedback ? 'Đã đánh giá' : 'Đánh giá'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle variant="h6" style={{ mb: 1, fontWeight: "bold" }}>Đánh Giá</DialogTitle>
        <DialogContent sx={{ borderBottom: "2px solid #9FD7F9", paddingBottom: "20px" }}>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            sx={{ marginBottom: "10px" }}
          />
          <TextField
            label="Viết đánh giá của bạn"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={reviewContent}
            onChange={handleChangeReviewContent}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Hủy</Button>
          <Button onClick={handleSubmitReview} variant="contained" color="primary">
            {selectedResult && selectedResult.hasFeedback ? 'Cập nhật Đánh Giá' : 'Gửi Đánh Giá'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for feedback success */}
      <Dialog open={feedbackSuccessOpen} onClose={handleFeedbackSuccessClose}>
        <DialogTitle>Đã gửi đánh giá thành công!</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Đánh giá của bạn đã được gửi thành công.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFeedbackSuccessClose} color="primary">OK</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for feedback error */}
      <Dialog open={feedbackErrorOpen} onClose={handleFeedbackErrorClose}>
        <DialogTitle>Có lỗi xảy ra khi gửi feedback!</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Đã xảy ra lỗi trong quá trình gửi feedback. Vui lòng thử lại sau.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFeedbackErrorClose} color="primary">OK</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ExaminationResult;
