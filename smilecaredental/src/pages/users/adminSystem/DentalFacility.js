import React, { useState } from 'react';
import { Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';

const DentalFacility = () => {
  const [facilities, setFacilities] = useState([
    { id: 1, name: 'Nha Khoa Hoàn Mỹ', address: '123 Đường A, Quận 1, TP HCM', phone: '0123456789' },
    { id: 2, name: 'Nha Khoa Việt Đức', address: '456 Đường B, Quận 9, TPHCM', phone: '0987654321' },
    { id: 3, name: 'Nha Khoa Hoàng An', address: '123 Đường A, Quận 1, TP HCM', phone: '0123456789' },
    { id: 4, name: 'Nha Khoa Kim', address: '456 Đường B, Quận 9, TPHCM', phone: '0987654321' },
  ]);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [editData, setEditData] = useState({ id: null, name: '', address: '', phone: '' });
  const [selectedDeleteId, setSelectedDeleteId] = useState(null);

  const handleAdd = () => {
    setEditData({ id: null, name: '', address: '', phone: '' });
    setOpenEditDialog(true);
  };

  const handleEdit = (facility) => {
    setEditData(facility);
    setOpenEditDialog(true);
  };

  const handleConfirmDelete = (id) => {
    setSelectedDeleteId(id);
    setOpenConfirmDialog(true);
  };

  const handleDelete = () => {
    setFacilities(facilities.filter(facility => facility.id !== selectedDeleteId));
    setOpenConfirmDialog(false);
  };

  const handleSave = () => {
    if (editData.id) {
      setFacilities(facilities.map(facility => (facility.id === editData.id ? editData : facility)));
    } else {
      setFacilities([...facilities, { ...editData, id: facilities.length + 1 }]);
    }
    setOpenEditDialog(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <div style={{ padding: '16px' }}>
      <Typography variant="h4" gutterBottom sx={{ marginBottom: '20px', textAlign: 'center', color: '#0D47A1', fontWeight: 'bold' }}>
        Quản lý cơ sở nha khoa
      </Typography>
      <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleAdd} sx={{ marginBottom: '16px' }}>
        Thêm cơ sở nha khoa mới
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, '& th': { backgroundColor: '#1565C0', color: '#ffffff' } }}>
          <TableHead>
            <TableRow>
              <TableCell>Tên cơ sở</TableCell>
              <TableCell>Địa chỉ</TableCell>
              <TableCell>Số điện thoại</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {facilities.map((facility) => (
              <TableRow key={facility.id}>
                <TableCell>{facility.name}</TableCell>
                <TableCell>{facility.address}</TableCell>
                <TableCell>{facility.phone}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEdit(facility)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleConfirmDelete(facility.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>{editData.id ? 'Chỉnh sửa cơ sở nha khoa' : 'Thêm cơ sở nha khoa mới'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {editData.id ? 'Chỉnh sửa thông tin cơ sở nha khoa.' : 'Nhập thông tin cơ sở nha khoa mới.'}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Tên cơ sở"
            type="text"
            fullWidth
            value={editData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="address"
            label="Địa chỉ"
            type="text"
            fullWidth
            value={editData.address}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="phone"
            label="Số điện thoại"
            type="text"
            fullWidth
            value={editData.phone}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)} color="secondary">
            Hủy
          </Button>
          <Button onClick={handleSave} color="primary">
            Lưu
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openConfirmDialog} onClose={() => setOpenConfirmDialog(false)}>
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bạn có chắc chắn muốn xóa cơ sở nha khoa này không?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirmDialog(false)} color="primary">
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

export default DentalFacility;