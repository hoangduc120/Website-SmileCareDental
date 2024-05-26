import React, { useState } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

const FinancialManagement = () => {
  const [financialData] = useState([
    { id: 1, type: 'Thu', date: '2024-05-24', amount: 1000000, description: 'Khám bệnh - Bệnh nhân Nguyễn Văn A' },
    { id: 2, type: 'Chi', date: '2024-05-20', amount: 500000, description: 'Mua thuốc - Thuốc kháng sinh' },
    { id: 3, type: 'Thu', date: '2024-05-24', amount: 1000000, description: 'Khám bệnh - Bệnh nhân Nguyễn Văn B' },
    { id: 4, type: 'Chi', date: '2024-05-20', amount: 600000, description: 'Mua thuốc - Thuốc kháng sinh' },
    { id: 5, type: 'Thu', date: '2024-05-24', amount: 4000000, description: 'Khám bệnh - Bệnh nhân Nguyễn Văn C' },
    { id: 6, type: 'Chi', date: '2024-05-20', amount: 600000, description: 'Mua thuốc - Thuốc gây tê' },
    { id: 7, type: 'Thu', date: '2024-05-24', amount: 7000000, description: 'Làm răng - Bệnh nhân Nguyễn Văn D' },
    { id: 8, type: 'Chi', date: '2024-05-20', amount: 700000, description: 'Mua thuốc - Thuốc kháng sinh' },
  ]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center', color: '#0D47A1', fontWeight: 'bold' }}>
        Quản lý tài chính
      </Typography>
      <Table sx={{ minWidth: 650, '& th': { backgroundColor: '#0D47A1', color: '#ffffff' } }}>
        <TableHead>
          <TableRow>
            <TableCell>Loại</TableCell>
            <TableCell>Ngày</TableCell>
            <TableCell>Số tiền</TableCell>
            <TableCell>Mô tả</TableCell>
            <TableCell>Thao tác</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {financialData.map((record, index) => (
            <TableRow key={record.id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff', '&:hover': { backgroundColor: '#eeeeee' } }}>
              <TableCell>{record.type}</TableCell>
              <TableCell>{record.date}</TableCell>
              <TableCell>{record.amount}</TableCell>
              <TableCell>{record.description}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }}>
                  Xem chi tiết
                </Button>
                <Button variant="outlined" color="secondary" size="small" sx={{ marginRight: '5px', borderRadius: '8px', textTransform: 'none' }}>
                  Chỉnh sửa
                </Button>
                {/* Uncomment the following button if deletion functionality is needed */}
                {/* <Button variant="outlined" color="error" size="small" sx={{ borderRadius: '8px', textTransform: 'none' }}>
                  Xóa
                </Button> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        sx={{
          marginTop: '20px',
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
          display: 'block',
          margin: '20px auto 0', // Center the button
        }}
      >
        Thêm khoản thu/chi mới
      </Button>
    </Container>
  );
};

export default FinancialManagement;
