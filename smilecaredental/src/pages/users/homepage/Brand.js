import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const products = {
    1: [{ name: 'Product A' }, { name: 'Product B' }, { name: 'Product C' }],
    2: [{ name: 'Product D' }, { name: 'Product E' }],
    3: [{ name: 'Product F' }, { name: 'Product G' }, { name: 'Product H' }],
};

function Brand() {

    return (
        <>
            <Box textAlign="center" height="20vh">
                <Typography variant='h3' pt="25px" color="#0477CA">Đối Tác</Typography>
                <Box display="flex" justifyContent="center" pt="15px">
                    <Stack direction="row" spacing={2}  >
                        <Typography>
                            <Link to="/Home" style={{ textDecoration: "none", color: "#0477CA" }}>
                                Trang chủ
                            </Link>
                        </Typography>
                        <ArrowForwardIosIcon sx={{ color: "#0477CA", fontSize: "16px" }} />
                        <Typography>
                            <Link to="/Introduce" style={{ textDecoration: "none", color: "#0477CA" }}>
                                Đối tác
                            </Link>
                        </Typography>
                    </Stack>
                </Box>
            </Box >
        </>
    );
}

export default Brand;
