import React, { useState } from 'react';
import { Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { Check, Clear, Delete } from '@mui/icons-material';

const NewClinic = () => {
  const [applications, setApplications] = useState([
    { id: 1, name: 'Nha khoa Đông Nam', address: '123 Đường A, Quận 7, TPHCM', phone: '0123456789',date: '02/06/2024' ,status: 'Chưa phê duyệt' },
    { id: 2, name: 'Nha khoa Daisy', address: '456 Đường B, Quận 8, TPHCM', phone: '0987654321', date: '02/06/2024' ,status: 'Chưa phê duyệt' },
    { id: 3, name: 'Nha khoa Hạnh Phúc', address: '345 Đường C, Quận 9, TPHCM', phone: '0123456789', date: '03/06/2024' ,status: 'Chưa phê duyệt' },
    { id: 4, name: 'Nha khoa Quốc tế Hali', address: '678 Đường D, Quận Bình Thạnh, TPHCM', phone: '0987654321', date: '03/06/2024' ,status: 'Chưa phê duyệt' },
    { id: 5, name: 'Nha khoa Bảo Việt', address: '123 Đường E, Quận 1, TPHCM', phone: '0123456789', date: '03/06/2024' ,status: 'Chưa phê duyệt' },
    { id: 6, name: 'Nha khoa Lạc Việt', address: '456 Đường F, Quận Gò Vấp, TPHCM', phone: '0987654321', date: '04/06/2024' ,status: 'Chưa phê duyệt' },
    { id: 7, name: 'Nha khoa Khang', address: '123 Đường A, Quận 3, TPHCM', phone: '0123456789', date: '04/06/2024' ,status: 'Chưa phê duyệt' },
    { id: 8, name: 'Nha khoa Việt Đức', address: '456 Đường B, Quận 4, TPHCM', phone: '0987654321', date: '04/06/2024' ,status: 'Chưa phê duyệt' },
  ]);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedApplicationId, setSelectedApplicationId] = useState(null);

  const handleApprove = (id) => {
    setApplications(applications.map(app => app.id === id ? { ...app, status: 'Đã chấp nhận' } : app));
  };

  const handleReject = (id) => {
    setApplications(applications.map(app => app.id === id ? { ...app, status: 'Đã từ chối' } : app));
  };

  const handleDelete = () => {
    setApplications(applications.filter(app => app.id !== selectedApplicationId));
    setOpenConfirm(false);
  };

  const handleOpenConfirm = (id) => {
    setSelectedApplicationId(id);
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  return (
    <div style={{ padding: '16px' }}>
      <Typography variant="h4" gutterBottom sx={{ marginBottom: '20px', textAlign: 'center', color: '#0D47A1', fontWeight: 'bold' }}>
        Quản lý đơn đăng ký phòng khám mới
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, '& th': { backgroundColor: '#1565C0', color: '#ffffff' } }}>
          <TableHead>
            <TableRow>
              <TableCell>Tên phòng khám</TableCell>
              <TableCell>Địa chỉ</TableCell>
              <TableCell>Số điện thoại</TableCell>
              <TableCell>Ngày đăng kí</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applications.map((application) => (
              <TableRow key={application.id}>
                <TableCell>{application.name}</TableCell>
                <TableCell>{application.address}</TableCell>
                <TableCell>{application.phone}</TableCell>
                <TableCell>{application.date}</TableCell>
                <TableCell>{application.status}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleApprove(application.id)} disabled={application.status !== 'Chưa phê duyệt'}>
                    <Check />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleReject(application.id)} disabled={application.status !== 'Chưa phê duyệt'}>
                    <Clear />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleOpenConfirm(application.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={openConfirm}
        onClose={handleCloseConfirm}
      >
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bạn có chắc chắn muốn xóa đơn đăng ký này không?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirm} color="primary">
            Hủy
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewClinic;
