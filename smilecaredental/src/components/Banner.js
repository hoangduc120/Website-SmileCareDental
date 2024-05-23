// CarouselComponent.jsx
import React from 'react';
import Slider from 'react-slick';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
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
    };

    const items = [
        {

            image: 'https://via.placeholder.com/400x300'
        },
        {
            image: 'https://img.pikbest.com/templates/20210914/bg/831b9da64af31853450a23c48d5e4a51_97382.png!f305cw',
        },
        {
            image: 'https://img.pikbest.com/origin/06/01/16/70cpIkbEsTvI6.jpg!w700wp',
        },
    ];

    return (
        <Slider {...settings}>
            {items.map((item, index) => (
                <Card key={index}>
                    <CardMedia
                        component="img"
                        height="400"
                        image={item.image}
                    />
                </Card>
            ))}
        </Slider>
    );
};

export default Banner;


