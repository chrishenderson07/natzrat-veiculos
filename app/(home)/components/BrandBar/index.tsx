'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCards } from 'swiper/modules'

import './styles.css'

const BrandBar = () => {
	return (
		<div className="bg-slate-700 w-full h-24">
			<Swiper
				slidesPerView={6}
				modules={[Autoplay]}
				autoplay={{ delay: 0, disableOnInteraction: false }}
				loop={true}
				freeMode={true}
				effect="slide"
				speed={3000}
				className="mySwiper">
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
				<SwiperSlide>Slide 9</SwiperSlide>
				<SwiperSlide>Slide 10</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default BrandBar
