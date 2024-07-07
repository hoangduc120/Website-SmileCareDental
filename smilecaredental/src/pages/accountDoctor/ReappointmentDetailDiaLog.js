// ReappointmentDetailDialog.jsx
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const ReappointmentDetailDialog = ({ isOpen, onClose, appointment }) => {
    // Kiểm tra nếu appointment không tồn tại thì return null
    if (!appointment) return null;

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                style: {
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    borderRadius: "8px",
                    padding: "20px",
                },
            }}
        >
            <DialogTitle>Chi tiết lịch tái khám</DialogTitle>
            <DialogContent dividers>
                <List>
                    <ListItem>
                        <ListItemText
                            primary={<strong>ID bệnh nhân:</strong>}
                            secondary={appointment.id}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={<strong>Tên bệnh nhân:</strong>}
                            secondary={appointment.patient}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={<strong>Ngày tái khám:</strong>}
                            secondary={appointment.reappointmentDate}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={<strong>Có định kỳ:</strong>}
                            secondary={appointment.isPeriodic ? "Có" : "Không"}
                        />
                    </ListItem>
                    {appointment.isPeriodic && (
                        <ListItem>
                            <ListItemText
                                primary={<strong>Thời gian định kỳ:</strong>}
                                secondary={appointment.periodicInterval}
                            />
                        </ListItem>
                    )}
                    <ListItem>
                        <ListItemText
                            primary={<strong>Dịch vụ tái khám:</strong>}
                            secondary={appointment.serviceId}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={<strong>Slot ID:</strong>}
                            secondary={appointment.slotId}
                        />
                    </ListItem>
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Đóng
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ReappointmentDetailDialog;
