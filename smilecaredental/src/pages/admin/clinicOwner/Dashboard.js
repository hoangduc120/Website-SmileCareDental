// import React from 'react';
// import { Typography, Box, Paper, Grid } from '@mui/material';
// import { Line, Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

// const Dashboard = () => {
//     const weeklyAccountData = {
//         labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
//         datasets: [
//             {
//                 label: 'Tài khoản đăng ký',
//                 data: [5, 10, 7, 14, 20, 30, 25], //làm giả data
//                 fill: false,
//                 borderColor: '#4285f4', // màu để hiển thị trên dashboards
//                 backgroundColor: '#4285f4',
//                 tension: 0.1, // độ cong của nét 
//             },
//         ],
//     };

//     const monthlyAccountData = {
//         labels: Array.from({ length: 30 }, (_, i) => i + 1),
//         datasets: [
//             {
//                 label: 'Tài khoản đăng ký',
//                 data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 50)),  //  tạo mảng số random
//                 fill: false,
//                 borderColor: '#4285f4',
//                 backgroundColor: '#4285f4',
//                 tension: 0.1,
//             },
//         ],
//     };

//     const weeklyServiceData = {
//         labels: ['Service A', 'Service B', 'Service C', 'Service D'],
//         datasets: [
//             {
//                 label: 'Dịch vụ',
//                 data: [50, 30, 40, 70],
//                 backgroundColor: ['#4285f4', '#db4437', '#f4b400', '#0f9d58'],
//             },
//         ],
//     };

//     const monthlyServiceData = {
//         labels: ['Service A', 'Service B', 'Service C', 'Service D'],
//         datasets: [
//             {
//                 label: 'Dịch vụ',
//                 data: [200, 150, 180, 220],
//                 backgroundColor: ['#4285f4', '#db4437', '#f4b400', '#0f9d58'],
//             },
//         ],
//     };

//     const commonChartOptions = {
//         scales: {
//             y: {
//                 beginAtZero: true,// này là của trục oy 
//             },
//         },
//     };

//     return (
//         <Box p={3}>
//             <Typography variant="h4" gutterBottom>
//                 Dashboard
//             </Typography>
//             <Grid container spacing={3}>
//                 <Grid item xs={12} md={6}>
//                     <Paper style={{ padding: 20 }}>
//                         <Typography variant="h6" gutterBottom>
//                             Tài khoản đăng ký trong tuần
//                         </Typography>
//                         <Line data={weeklyAccountData} options={commonChartOptions} />
//                     </Paper>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <Paper style={{ padding: 20 }}>
//                         <Typography variant="h6" gutterBottom>
//                             Tài khoản đăng ký trong tháng
//                         </Typography>
//                         <Line data={monthlyAccountData} options={commonChartOptions} />
//                     </Paper>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <Paper style={{ padding: 20 }}>
//                         <Typography variant="h6" gutterBottom>
//                             Dịch vụ sử dụng trong tuần
//                         </Typography>
//                         <Bar data={weeklyServiceData} options={commonChartOptions} />
//                     </Paper>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <Paper style={{ padding: 20 }}>
//                         <Typography variant="h6" gutterBottom>
//                             Dịch vụ sử dụng trong tháng
//                         </Typography>
//                         <Bar data={monthlyServiceData} options={commonChartOptions} />
//                     </Paper>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// };

// export default Dashboard;
import React from 'react'

export default function Dashboard() {
    return (
        <div>Dashboard</div>
    )
}
