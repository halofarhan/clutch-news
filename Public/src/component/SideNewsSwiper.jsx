// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function SideNewsSwiper() {

    return (
        <>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2700,
                    transition: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img className='w-32 h-20' src="https://cdn.idntimes.com/content-images/duniaku/post/20220907/og-image-default-47f6fdb30c552796f1093262db4f3086.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-32 h-20' src="https://blog.bankmega.com/wp-content/uploads/2023/06/TOP-UP-GAME_MOBILE-BANNER.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-32 h-20' src="https://cdn.api.upstation.media/upstation_x/b4e746db91e466783f282568499a667d80ea83718e839e6ce15954564d10e9a6eff9381a64d1b8405978882f33fbb96e480f4acbc486c2cd031e862b3a6fd040" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}


export default SideNewsSwiper