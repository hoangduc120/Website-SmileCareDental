import React, { useState } from 'react';
import { Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';

const AccountUser = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Nguyễn Văn A',gender:'Nam', dateOfBirth:'1990-09-10', email: 'nguyenvana@gmail.com', phone: '0123456789' },
    { id: 2, name: 'Trần Thị B',gender:'Nam', dateOfBirth:'1990-09-10', email: 'tranthib@gmail.com', phone: '0987654321' },
    { id: 3, name: 'Nguyễn Văn A',gender:'Nam', dateOfBirth:'1990-09-10', email: 'nguyenvana@gmail.com', phone: '0123456789' },
    { id: 4, name: 'Trần Thị B',gender:'Nam', dateOfBirth:'1990-09-10', email: 'tranthib@gmail.com', phone: '0987654321' },
    { id: 5, name: 'Nguyễn Văn A',gender:'Nam', dateOfBirth:'1990-09-10', email: 'nguyenvana@gmail.com', phone: '0123456789' },
    { id: 6, name: 'Trần Thị B',gender:'Nam', dateOfBirth:'1990-09-10', email: 'tranthib@gmail.com', phone: '0987654321' },
  ]);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [editData, setEditData] = useState({ id: null, name: '', gender: '', dateOfBirth: '', email: '', phone: '' });
  const [selectedDeleteId, setSelectedDeleteId] = useState(null);

  const handleAdd = () => {
    setEditData({ id: null, name: '', gender: '', dateOfBirth: '', email: '', phone: '' });
    setOpenEditDialog(true);
  };

  const handleEdit = (user) => {
    setEditData(user);
    setOpenEditDialog(true);
  };

  const handleConfirmDelete = (id) => {
    setSelectedDeleteId(id);
    setOpenConfirmDialog(true);
  };

  const handleDelete = () => {
    setUsers(users.filter(user => user.id !== selectedDeleteId));
    setOpenConfirmDialog(false);
  };

  const handleSave = () => {
    if (editData.id) {
      setUsers(users.map(user => (user.id === editData.id ? editData : user)));
    } else {
      setUsers([...users, { ...editData, id: users.length + 1 }]);
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
        Quản lý tài khoản người dùng
      </Typography>
      <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleAdd} sx={{ marginBottom: '16px' }}>
        Thêm tài khoản người dùng mới
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Tên người dùng</TableCell>
              <TableCell>Giới tính</TableCell>
              <TableCell>Ngày sinh</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Số điện thoại</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.dateOfBirth}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEdit(user)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleConfirmDelete(user.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>{editData.id ? 'Chỉnh sửa tài khoản người dùng' : 'Thêm tài khoản người dùng mới'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {editData.id ? 'Chỉnh sửa thông tin tài khoản người dùng.' : 'Nhập thông tin tài khoản người dùng mới.'}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Tên người dùng"
            type="text"
            fullWidth
            value={editData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="gender"
            label="Giới tính"
            type="text"
            fullWidth
            value={editData.gender}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="dateOfBirth"
            label="Ngày sinh"
            type="date"
            fullWidth
            value={editData.dateOfBirth}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={editData.email}
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
            Bạn có chắc chắn muốn xóa tài khoản người dùng này không?
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

export default AccountUser;
