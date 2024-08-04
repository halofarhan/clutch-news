import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Hero from './Hero';
import axios from 'axios';

export default function HeroSwiper() {
    const [article, setArticle] = useState([])

    async function fetchData() {
        const { data } = await axios.get("https://server.halofarhan.my.id/head-line")
        setArticle(data.items)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3550,
                    transition: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {article.map(el => {
                    return <SwiperSlide>
                        <Hero key={el.id} data={el} />
                    </SwiperSlide>
                })}


            </Swiper>
        </>
    );
}
