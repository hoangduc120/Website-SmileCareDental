import React, { useState } from 'react';

import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';



const FinancialManagement = () => {

  const [financialData] = useState([
    {
      id: 1,
      type: 'Thu',
      date: '2024-05-24',
      amount: 1000000, // Example amount in Vietnamese Dong
      description: 'Khám bệnh - Bệnh nhân Nguyễn Văn A',
    },
    {
      id: 2,
      type: 'Chi',
      date: '2024-05-20',
      amount: 500000, // Example amount in Vietnamese Dong
      description: 'Mua thuốc -  Thuốc kháng sinh',
    },
    // Add more financial records as needed
  ]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" >Quản lý tài chính</Typography>
      <Button variant="contained" color="primary" >
        Thêm khoản thu/chi mới
      </Button>
      <Table>
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
          {financialData.map((record) => (
            <TableRow key={record.id}>
              <TableCell>{record.type}</TableCell>
              <TableCell>{record.date}</TableCell>
              <TableCell>{record.amount}</TableCell>
              <TableCell>{record.description}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary" size="small">
                  Xem chi tiết
                </Button>
                <Button variant="outlined" color="secondary" size="small">
                  Chỉnh sửa
                </Button>
                <Button variant="outlined" color="error" size="small">
                  Xóa
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default FinancialManagement;
