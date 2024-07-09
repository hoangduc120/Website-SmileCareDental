import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const slots = ["Slot 1", "Slot 2", "Slot 3"]; // Danh sách các slots

const ReappointmentDetailDialog = ({ isOpen, onClose, appointment }) => {
  const [periodicInterval, setPeriodicInterval] = useState(appointment ? appointment.periodicInterval : '');
  const [periodicCount, setPeriodicCount] = useState(appointment ? appointment.periodicCount : '');
  const [selectedSlot, setSelectedSlot] = useState(appointment ? appointment.slotId : '');

  const handleSubmit = () => {
    // Xử lý submit dữ liệu ở đây
    console.log({
      patientName: appointment.patient, 
      doctorName: appointment.doctorName,
      serviceId: appointment.serviceId, 
      periodicInterval,
      periodicCount,
      selectedSlot,
    });
    onClose();
  };

  if (!appointment) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: "rgba(255, 255, 255, 0.95)", 
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
          padding: "20px",
          border: "1px solid rgba(0, 0, 0, 0.3)" 
        },
      }}
    >
      <DialogTitle>Đặt lịch tái khám</DialogTitle>
      <DialogContent dividers>
        <TextField
          label="Tên bệnh nhân"
          fullWidth
          margin="normal"
          value={appointment.patient} // Fix cứng
          InputProps={{
            readOnly: true,
            style: { backgroundColor: "white" } 
          }}
        />
        <TextField
          label="Tên bác sĩ"
          fullWidth
          margin="normal"
          value={appointment.doctorName} // Fix cứng
          InputProps={{
            readOnly: true,
            style: { backgroundColor: "white" } 
          }}
        />
        <TextField
          label="Dịch vụ tái khám"
          fullWidth
          margin="normal"
          value={appointment.serviceId} // Fix cứng
          InputProps={{
            readOnly: true,
            style: { backgroundColor: "white" } 
          }}
        />
        <TextField
          label="Thời gian định kỳ"
          type="number"
          fullWidth
          margin="normal"
          value={periodicInterval}
          onChange={(e) => setPeriodicInterval(e.target.value)}
          InputProps={{
            style: { backgroundColor: "white" } 
          }}
        />
        <TextField
          label="Số lần định kỳ"
          type="number"
          fullWidth
          margin="normal"
          value={periodicCount}
          onChange={(e) => setPeriodicCount(e.target.value)}
          InputProps={{
            style: { backgroundColor: "white" } 
          }}
        />
        <TextField
          label="Slot tái khám"
          select
          fullWidth
          margin="normal"
          value={selectedSlot}
          onChange={(e) => setSelectedSlot(e.target.value)}
          InputProps={{
            style: { backgroundColor: "white" } 
          }}
        >
          {slots.map((slot, index) => (
            <MenuItem key={index} value={slot}>
              {slot}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Đóng
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReappointmentDetailDialog;
