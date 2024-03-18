'use client'

import Slide from './Slide'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useState } from 'react'

import { cars as carsSlide } from '@/app/_moks/cars'

const Slider = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<div className="bg-Gray">
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				navigation
				loop={true}
				modules={[Pagination, Navigation]}
				autoplay={{ delay: 2500, disableOnInteraction: false }}
				onSlideChange={(swiper) => {
					setActiveIndex(swiper.activeIndex)
					console.log(`Slide ${swiper.activeIndex} em tela!`)
				}}>
				{carsSlide.map((slide, index) => (
					<SwiperSlide key={index}>
						<Slide
							index={activeIndex}
							heading={slide.heading}
							paragraph={slide.paragraph}
							buttonPath={slide.buttonPath}
							imageSrc={slide.imageSrc}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Slider
