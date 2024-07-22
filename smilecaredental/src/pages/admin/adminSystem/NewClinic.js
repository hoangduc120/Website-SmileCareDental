import React, { useState, useEffect } from 'react';
import { Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Tabs, Tab, Snackbar, SnackbarContent, TablePagination } from '@mui/material';
import { Check, Clear } from '@mui/icons-material';
import { getAllClinicRequests, getAllClinicRequestsPending, getAllClinicRequestsApproved, getAllClinicRequestsRejected, approveClinicRequest, rejectClinicRequest } from '../../../api/api';

const ClinicRequests = () => {
  const [clinicRequests, setClinicRequests] = useState([]);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [selectedRequestName, setSelectedRequestName] = useState('');
  const [actionType, setActionType] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Hiển thị 5 hàng mỗi trang

  useEffect(() => {
    fetchAllClinicRequests();
  }, []);

  const fetchAllClinicRequests = async () => {
    try {
      const data = await getAllClinicRequests();
      setClinicRequests(data);
    } catch (error) {
      console.error('Error fetching clinic requests:', error);
    }
  };

  const fetchPendingClinicRequests = async () => {
    try {
      const data = await getAllClinicRequestsPending();
      setClinicRequests(data);
    } catch (error) {
      console.error('Error fetching pending clinic requests:', error);
    }
  };

  const fetchApprovedClinicRequests = async () => {
    try {
      const data = await getAllClinicRequestsApproved();
      setClinicRequests(data);
    } catch (error) {
      console.error('Error fetching approved clinic requests:', error);
    }
  };

  const fetchRejectedClinicRequests = async () => {
    try {
      const data = await getAllClinicRequestsRejected();
      setClinicRequests(data);
    } catch (error) {
      console.error('Error fetching rejected clinic requests:', error);
    }
  };

  const handleApprove = async () => {
    try {
      console.log('Selected Request ID:', selectedRequestId);
      await approveClinicRequest(selectedRequestId);
      setClinicRequests(clinicRequests.map(request => request.id === selectedRequestId ? { ...request, status: 'Approved' } : request));
      handleCloseConfirm();
      showSnackbar('Duyệt đơn thành công', 'success');
    } catch (error) {
      console.error('Error approving clinic request:', error);
      showSnackbar('Lỗi khi duyệt đơn', 'error');
      // Handle error approving request
    }
  };

  const handleReject = async () => {
    try {
      console.log('Selected Request ID:', selectedRequestId);
      await rejectClinicRequest(selectedRequestId);
      setClinicRequests(clinicRequests.map(request => request.id === selectedRequestId ? { ...request, status: 'Rejected' } : request));
      handleCloseConfirm();
      showSnackbar('Từ chối đơn thành công', 'success');
    } catch (error) {
      console.error('Error rejecting clinic request:', error);
      showSnackbar('Lỗi khi từ chối đơn', 'error');
    }
  };

  const handleOpenConfirm = (id, name, action) => {
    setSelectedRequestId(id);
    setSelectedRequestName(name);
    setActionType(action);
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    switch (newValue) {
      case 0:
        fetchAllClinicRequests();
        break;
      case 1:
        fetchPendingClinicRequests();
        break;
      case 2:
        fetchApprovedClinicRequests();
        break;
      case 3:
        fetchRejectedClinicRequests();
        break;
      default:
        break;
    }
  };

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div style={{ padding: '16px' }}>
      <Typography variant="h4" gutterBottom sx={{ marginBottom: '20px', textAlign: 'center', color: '#0D47A1', fontWeight: 'bold' }}>
        Quản lý đơn đăng ký phòng khám
      </Typography>

      <Tabs value={selectedTab} onChange={handleTabChange} centered>
        <Tab label="Tất cả đơn" />
        <Tab label="Đang chờ" />
        <Tab label="Đã duyệt" />
        <Tab label="Bị từ chối" />
      </Tabs>

      <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
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
            {clinicRequests.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.name}</TableCell>
                <TableCell>{request.address}</TableCell>
                <TableCell>{request.phonenumber}</TableCell>
                <TableCell>{request.created_at}</TableCell>
                <TableCell>{request.status}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleOpenConfirm(request.id, request.name, 'approve')}
                    disabled={request.status !== 'Pending'}
                  >
                    <Check />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleOpenConfirm(request.id, request.name, 'reject')}
                    disabled={request.status !== 'Pending'}
                  >
                    <Clear />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={clinicRequests.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <Dialog
        open={openConfirm}
        onClose={handleCloseConfirm}
      >
        <DialogTitle>Xác nhận hành động</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bạn có chắc chắn muốn {actionType === 'approve' ? 'duyệt' : 'từ chối'} đơn đăng ký của "{selectedRequestName}" không?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirm} color="primary">
            Hủy
          </Button>
          {actionType === 'approve' ? (
            <Button onClick={handleApprove} color="primary">
              Duyệt
            </Button>
          ) : (
            <Button onClick={handleReject} color="secondary">
              Từ chối
            </Button>
          )}
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <SnackbarContent
          sx={{
            backgroundColor: snackbarSeverity === 'success' ? '#4CAF50' : '#F44336',
          }}
          message={snackbarMessage}
        />
      </Snackbar>
    </div>
  );
};

export default ClinicRequests;
