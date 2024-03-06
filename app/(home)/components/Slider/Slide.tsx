'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Slide = () => {
	return (
		<>
			<Swiper
				modules={[EffectFade, Navigation, Pagination]}
				effect="fade"
				navigation
				pagination={{ clickable: true }}
				className="mySwiper">
				<SwiperSlide>
					<img
						src="https://via.placeholder.com/1920x1080"
						alt="slide"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://via.placeholder.com/1920x1080"
						alt="slide"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://via.placeholder.com/1920x1080"
						alt="slide"
					/>
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default Slide
