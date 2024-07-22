
// CarouselComponent.jsx
import React from 'react';
import Slider from 'react-slick';
import { Box, Card, CardMedia, } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
    };

    const items = [
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/lab202-5de90.appspot.com/o/banner%2F765c476b3f0c39922dc40143d2ffa561.webp?alt=media&token=ba3d0bfb-9747-4f6c-a5cb-0847b8a08e98',
        },       
    ];

    return (
        <Box sx={{ overflow: 'hidden', width: '100%' }}>
            <Slider {...settings}>
                {items.map((item, index) => (
                    <Card key={index}>
                        <CardMedia
                            component="img"
                            height="450"
                            image={item.image}
                            sx={{ width: "50%%" }}
                        />
                    </Card>
                ))}
            </Slider>
        </Box>
    );
};

export default Banner;
