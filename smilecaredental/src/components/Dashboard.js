import React, { useState } from 'react';
import { Typography, Box, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Ensuring that all necessary chart components are included

const Dashboard = () => {
  const [patientVisitsData] = useState([
    { date: '2024-05-25', count: 20 },
    { date: '2024-05-24', count: 35 },
    { date: '2024-05-23', count: 18 },
  ]);
  const [revenueData] = useState([
    { category: 'Khám lâm sàng', amount: 6000000 },
    { category: 'Xét nghiệm', amount: 3000000 },
    { category: 'Thuốc', amount: 3000000 },
  ]);
  const [expensesData] = useState([
    { category: 'Lương nhân viên', amount: 4000000 },
    { category: 'Thuốc men', amount: 2000000 },
    { category: 'Đồ dùng y tế', amount: 1000000 },
  ]);

  // Define custom chart paper styles
  const chartPaperStyles = {
    padding: 20,
    borderRadius: 8,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    height: '100%', // Ensure the paper component takes full height
  };

  // Define custom chart colors
  const chartColors = {
    primary: '#4285f4',
    secondary: '#db4437',
    error: '#dc3545',
  };

  // Configure Line chart options for patient visits
  const patientVisitsChartOptions = {
    labels: patientVisitsData.map((visit) => visit.date),
    datasets: [
      {
        label: 'Số lượng bệnh nhân khám',
        data: patientVisitsData.map((visit) => visit.count),
        fill: false,
        borderColor: chartColors.primary,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: chartColors.primary,
        pointHoverBorderColor: 'white',
      },
    ],
  };

  const patientVisitsChartConfig = {
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Số lượng bệnh nhân khám theo ngày',
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  // Configure Bar chart options for revenue by category
  const revenueChartOptions = {
    labels: revenueData.map((item) => item.category),
    datasets: [
      {
        label: 'Doanh thu theo danh mục',
        data: revenueData.map((item) => item.amount),
        backgroundColor: [chartColors.primary, chartColors.secondary, chartColors.error], // Example colors
      },
    ],
  };

  const revenueChartConfig = {
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Doanh thu theo danh mục',
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  // Configure Bar chart options for expenses by category
  const expensesChartOptions = {
    labels: expensesData.map((item) => item.category),
    datasets: [
      {
        label: 'Chi tiêu theo danh mục',
        data: expensesData.map((item) => item.amount),
        backgroundColor: [chartColors.error, chartColors.secondary, chartColors.primary], // Example colors
      },
    ],
  };

  const expensesChartConfig = {
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Chi tiêu theo danh mục',
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <Box p={3} sx={{ marginLeft: '240px' }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper style={chartPaperStyles}>
            <Typography variant="h6" gutterBottom>
              Số lượng bệnh nhân khám
            </Typography>
            <Line data={patientVisitsChartOptions} options={patientVisitsChartConfig.options} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={chartPaperStyles}>
            <Typography variant="h6" gutterBottom>
              Doanh thu theo danh mục
            </Typography>
            <Bar data={revenueChartOptions} options={revenueChartConfig.options} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={chartPaperStyles}>
            <Typography variant="h6" gutterBottom>
              Chi tiêu theo danh mục
            </Typography>
            <Bar data={expensesChartOptions} options={expensesChartConfig.options} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
