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

            image: 'https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-dental-beauty-oral-health-background-image_195889.jpg'
        },
        {
            image: 'https://tamanhhospital.vn/wp-content/uploads/2023/11/nho-rang-khon.jpg',
        },
        {
            image: 'https://iweb.tatthanh.com.vn/pic/3/blog/images/website-nha-khoa-dep-nhat-viet-nam-vietphap.jpg',
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


