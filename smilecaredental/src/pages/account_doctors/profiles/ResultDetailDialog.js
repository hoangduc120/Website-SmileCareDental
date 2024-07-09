import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const ResultDetailDialog = ({ isOpen, onClose, appointment }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: "rgba(255, 255, 255, 0.95)", // Tăng độ trong suốt
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
          padding: "20px",
          border: "1px solid rgba(0, 0, 0, 0.3)", // Đường viền rõ hơn
        },
      }}
    >
      <DialogTitle
        style={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "center" }}
      >
        Kết quả khám
      </DialogTitle>
      <DialogContent style={{ padding: "20px" }}>
        {appointment && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Typography style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontWeight: "bold", width: "150px", backgroundColor: "white" }}>
                ID bệnh nhân:
              </span>{" "}
              {appointment.id}
            </Typography>
            <Typography style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontWeight: "bold", width: "150px", backgroundColor: "white" }}>
                Tên bệnh nhân:
              </span>{" "}
              {appointment.patient}
            </Typography>
            <Typography style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontWeight: "bold", width: "150px", backgroundColor: "white" }}>
                Kết quả:
              </span>{" "}
              {appointment.result}
            </Typography>
          </div>
        )}
      </DialogContent>
      <DialogActions style={{ justifyContent: "center" }}>
        <Button onClick={onClose} color="primary">
          Đóng
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResultDetailDialog;
