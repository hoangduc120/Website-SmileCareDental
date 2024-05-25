import * as React from 'react';
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
import DisplayButton from '../../../components/layout/DisplayButton';
import { itemList } from '../../../components/datatest/PriceList/PriceItem';
function Price() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const [selectedService, setSelectedService] = React.useState(null);

    const handleServiceChange = (event, value) => {
        setSelectedService(value);
    };

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
                            getOptionLabel={(option) => option.name}
                            sx={{ width: 400, marginLeft: 'auto' }}
                            renderInput={(params) => <TextField {...params} label="Chọn theo dịch vụ" />}
                            onChange={handleServiceChange}
                        />
                        {selectedService && (
                            <List>
                                {selectedService.items.map((item, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={item} secondary={selectedService.prices[index]} />
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </Box>
                    <List
                        sx={{ width: '100%', maxWidth: 1200, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        {itemList.map((value, index) => (
                            <Box key={index}>
                                <ListItem>
                                    <Grid container spacing={2} bgcolor={'#2098D1'} padding={'10px'}>
                                        <Grid item xs={8}>
                                            <Typography variant="subtitle1" fontWeight="bold">{value.name}</Typography>
                                        </Grid>
                                        <Grid item xs={4} sx={{ textAlign: 'right' }}>
                                            <Typography variant="subtitle1" fontWeight="bold">{value.gia}</Typography>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <List>
                                    {value.items.map((item, idx) => (
                                        <ListItem key={idx}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={8}>
                                                    <ListItemText primary={item} />
                                                </Grid>
                                                <Grid item xs={4} sx={{ textAlign: 'right' }}>
                                                    <ListItemText primary={value.prices[idx]} />
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        ))}
                    </List>
                </Grid>
            </Grid>
            <hr />
            <Box>
                <DisplayButton />
            </Box>
        </>

    );
}
export default Price



