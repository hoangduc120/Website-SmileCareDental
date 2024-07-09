import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography } from '@mui/material';

const CreateResultDialog = ({ isOpen, onClose, appointment, onSave }) => {
  const [result, setResult] = useState('');

  const handleSave = () => {
    onSave(appointment, result);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Tạo kết quả khám</DialogTitle>
      <DialogContent>
        <Typography variant="h6" gutterBottom>
          Tên bệnh nhân: {appointment?.patient}
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="result"
          label="Kết quả khám"
          type="text"
          fullWidth
          value={result}
          onChange={(e) => setResult(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Hủy
        </Button>
        <Button onClick={handleSave} color="primary">
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateResultDialog;
