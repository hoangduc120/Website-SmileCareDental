import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { List } from '@mui/material';

function BodyHome() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const render = [
        { label: 'IMPLANT OTEX (BH 2 năm)', price: '3.200.000 (VNĐ)' },
        { label: 'IMPLANT BIOTEM (BH 5 NĂM)', price: '8.000.000 (VNĐ)' },
        { label: 'IMPLANT ACTIVE IS3 (BH 10 NĂM)', price: '16.000.000 (VNĐ)' },
        { label: 'Mắc cài Kim Loại Chuẩn', price: '18.000.000(VNĐ)' },
        { label: 'Mắc cài Sứ tự buộc', price: '30.000.000(VNĐ)' },
        { label: 'Niềng răng trong suốt LITE PACKAGE', price: '42.000.000(VNĐ)' },
        { label: 'Cạo vôi + đánh bóng mức độ 1', price: '300.000(VNĐ)' },
        { label: 'Cạo vôi + đánh bóng mức độ 2 (vôi nhiều)', price: '400.000(VNĐ)' },
        { label: 'Cạo vôi VIP KHÔNG ĐAU với Máy Rung Siêu Âm', price: '500.000(VNĐ)' },
        { label: 'Răng tháo lắp', price: '200.000 - 950.000(VNĐ)' },
        { label: 'Đệm hàm mềm', price: '500.000(VNĐ)' },
        { label: 'Chữa tuỷ không đau - nhanh chóng bằng MTA-2023', price: '2.000.000 - 4.000.000(VNĐ)' },
        { label: 'Răng khôn hàm trên (Tùy mức độ)', price: '1.000.000 - 2.000.000(VNĐ)' },
        { label: 'Nhổ răng sữa chích tê', price: '50.000(VNĐ)' },
        { label: 'Nhổ răng không đau', price: '100.000 - 500.000(VNĐ)' },
        { label: 'Nướu mài xương ổ', price: '10.000.000(VNĐ)' },
        { label: 'Cắt nạo chóp', price: '2.000.000(VNĐ)' }
    ];
    return (

        <List
            sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader" >
                    BẢNG GIÁ
                </ListSubheader>
            }

        >
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={render}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Chọn theo dịch vụ" />}
            />
            <ListItemButton onClick={handleClick}>
                <ListItemText primary="ĐIỀU TRỊ CƯỜI HỞ LỢI" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Nướu mài xương ổ" />
                        <ListItemText primary="10.000.000(VNĐ)" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Cắt nạo chóp" />
                        <ListItemText primary="2.000.000(VNĐ)" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
}
export default BodyHome



