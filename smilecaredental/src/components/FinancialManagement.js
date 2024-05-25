import React, { useState } from 'react';

import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';



const FinancialManagement = () => {

    const [financialData] = useState([
        { id: 1, type: 'Thu', date: '2024-05-24', amount: 1000000 ,  description: 'Khám bệnh - Bệnh nhân Nguyễn Văn A',},
        { id: 2, type: 'Chi', date: '2024-05-20', amount: 500000 , description: 'Mua thuốc -  Thuốc kháng sinh',},
        { id: 3, type: 'Thu', date: '2024-05-24', amount: 1000000,  description: 'Khám bệnh - Bệnh nhân Nguyễn Văn B',},
        { id: 4, type: 'Chi', date: '2024-05-20', amount: 600000 , description: 'Mua thuốc -  Thuốc kháng sinh',},
        { id: 5, type: 'Thu', date: '2024-05-24', amount: 4000000 ,  description: 'Khám bệnh - Bệnh nhân Nguyễn Văn C',},
        { id: 6, type: 'Chi', date: '2024-05-20', amount: 600000 , description: 'Mua thuốc -  Thuốc gây tê',},
        { id: 7, type: 'Thu', date: '2024-05-24', amount: 7000000 ,  description: 'Làm răng - Bệnh nhân Nguyễn Văn D',},
        { id: 8, type: 'Chi', date: '2024-05-20', amount: 700000, description: 'Mua thuốc -  Thuốc kháng sinh',},
      ]);
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" >Quản lý tài chính</Typography>
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
                {/* <Button variant="outlined" color="error" size="small">
                  Xóa
                </Button> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" color="primary" >
        Thêm khoản thu/chi mới
      </Button>
    </Container>
  );
};

export default FinancialManagement;
