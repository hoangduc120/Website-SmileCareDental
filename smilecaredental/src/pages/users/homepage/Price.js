import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Grid, List, ListItem, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Price() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const itemList = [
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
    const titleList = [
        { name: 'CẤY GHÉP IMPLANT (ĐÃ BAO GỒM ABUTMENT)' },
        { name: 'NIẾNG RĂNG CHỈNH' },
        { name: 'BỌC RĂNG SỨ THẨM MỸ ' },
        { name: 'TẨY TRẮNG RĂNG ' },
        { name: 'TRÁM RĂNG THẨM MỸ' },
        { name: 'NHỔ RĂNG KHÔN ' },
        { name: 'NỘI NHA CHỮA TỦY' },
        { name: 'HÀM GIẢ THÁO LẮP ' },
        { name: 'CẠO VÔI RĂNG  ' },
        { name: 'CẮT NẠO CHÓP ' },
        { name: 'NHỔ RĂNG THƯỜNG ' },
        { name: 'ĐIỀU TRỊ CƯỜI HỞ LỢI  ' },
        { name: 'PHẪU THUẬT NƯỚU' }
    ]

    return (
        <>
            <Box textAlign="center" height="20vh">
                <Typography variant='h3' pt="25px" color="#64D3E3">Bảng giá dịch vụ</Typography>
                <Box display="flex" justifyContent="center" pt="15px">
                    <Stack direction="row" alignItems="center" spacing={3} >
                        <Typography>
                            <Link to="/Home" style={{ textDecoration: "none", color: "#64D3E3" }}>
                                Trang chủ
                            </Link>
                        </Typography>
                        <ArrowForwardIosIcon sx={{ color: "#64D3E3", fontSize: "16px" }} />
                        <Typography>
                            <Link to="/Price" style={{ textDecoration: "none", color: "#64D3E3" }}>
                                Bảng giá
                            </Link>
                        </Typography>
                    </Stack>
                </Box>
            </Box >
            <Grid container spacing={1}>
                <Grid item xs={5} >
                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary="ĐIỀU TRỊ CƯỜI HỞ LỢI" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 5 }}>
                                <ListItemText primary="Nướu mài xương ổ" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 5 }}>
                                <ListItemText primary="Cắt nạo chóp" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </Grid>

                <Grid item xs={7} p="25px"  >
                    <Box display='flex'>
                        <Typography variant='h4' color="#2098D1" fontWeight="700">
                            BẢNG GIÁ
                        </Typography>
                        <Autocomplete
                            disablePortal
                            options={itemList}
                            sx={{ width: 400, marginLeft: 'auto' }}
                            renderInput={(params) => <TextField {...params} label="Chọn theo dịch vụ" />}
                        />
                    </Box>
                    <List
                        sx={{ width: '100%', maxWidth: 1200, bgcolor: 'background.paper', justifyContent: 'flex-end' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader"  >
                                <List sx={{ width: '100%', maxWidth: 1200, bgcolor: 'background.paper' }}>
                                    {itemList.map((value, index) => (
                                        <ListItem
                                            key={index}
                                            disableGutters
                                            secondaryAction={
                                                <Typography variant='h7'  >
                                                    {`${value.price}`}
                                                </Typography>
                                            }
                                        >
                                            <ListItemText primary={` ${value.label}`} />
                                        </ListItem>
                                    ))}
                                </List>
                            </ListSubheader>
                        }
                    >
                    </List>
                </Grid>
            </Grid>
        </>

    );
}
export default Price



