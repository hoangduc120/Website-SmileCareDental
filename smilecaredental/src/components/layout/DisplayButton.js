import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function DisplayButton() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={3} ></Grid>

                <Grid item xs={6} >
                    <Typography
                        variant="h5"
                        component="div"
                        align="center"
                        gutterBottom
                        color={"#2261C0"}
                        marginTop={'25px'}
                        fontWeight={'700'}
                    >
                        Dịch vụ nha khoa tốt nhất tại TP.HCM
                    </Typography>
                    <Typography
                        component="div"
                        gutterBottom
                        align="center"

                    >
                        Với sự kết hợp giữa kinh nghiệm dày dặn của đội ngũ y bác sĩ của Nha khoa
                        SmileCareDental và công nghệ CAD/CAM hiện đại tại nha khoa cho phép chế tác
                        cũng như lắp răng sứ thẩm mỹ trong thời gian ngắn mà vẫn đảm bảo chất lượng
                        đạt tiêu chuẩn, tính thẫm mỹ cao cho khách hàng
                    </Typography>
                    <Link to="/clinic" style={{ textDecoration: "none", color: 'white' }}>
                        <Button
                            variant="contained"
                            padding="20px"
                            sx={{
                                height: 50, backgroundColor: '#0477CA', color: 'white', fontWeight: "700", fontSize: "14px",
                                '&:hover': {
                                    backgroundColor: '#000AFE',
                                    color: 'white',
                                },
                                display: 'block', // Để nút bấm là một khối riêng
                                margin: '0 auto', // Để căn giữa nút bấm
                            }}
                            target="_blank"
                            rel="white"
                        >

                            Đặt lịch ngay để nhận tư vấn
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={3} ></Grid>
            </Grid >
        </>
    )
}

export default DisplayButton