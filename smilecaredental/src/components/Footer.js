import { Box, Grid } from "@mui/material"
import React from 'react'

function Footer() {
    return (
        <>
            <Box
                sx={{ left: 0, bottom: 0, right: 0, zIndex: "999" }}
                bgcolor="#CCCCCC"
                padding="20px"
            >
                <Grid container>
                    <Grid item xs={4}>
                        Thông tin
                    </Grid>
                    <Grid item xs={4}>
                        Địa chỉ
                    </Grid>
                    <Grid item xs={4}>
                        Image map
                    </Grid>
                </Grid>
            </Box>
        </>
    )

}
export default Footer
