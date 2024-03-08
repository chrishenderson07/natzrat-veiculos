'use client'

import Slide from './Slide'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useEffect, useState } from 'react'

const Slider = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const carsSlide = [
		{
			heading: 'Jeep Compass',
			paragraph:
				'O Jeep Compass é um SUV médio produzido pela Jeep, uma divisão da Stellantis. Foi lançado em 2006 para o mercado de 2007, e é vendido globalmente, exceto nos Estados Unidos, onde o Jeep Patriot e o Jeep Cherokee (KJ) foram substituídos pelo Jeep Compass e pelo Jeep Renegade.',
			buttonPath: '/jeep-compass',
			imageSrc: require('@/public/images/suv_banner.png'),
		},
		{
			heading: 'Audi Sport',
			paragraph:
				'A divisão Audi Sport representa o ápice da performance dentro da marca alemã. Seus modelos combinam design sofisticado com tecnologia de ponta, proporcionando uma experiência de condução inigualável.',
			buttonPath: '/jeep-compass',
			imageSrc: require('@/public/images/sedan_banner.png'),
		},
		{
			heading: 'Ferrari F8 Spider',
			paragraph:
				'O Ferrari F8 Spider representa a mais recente evolução da tradição de conversíveis de alto desempenho da Ferrari. Inspirado no legado da marca e impulsionado por tecnologia de ponta, este modelo oferece uma experiência de condução visceral e inigualável.',
			buttonPath: '/jeep-compass',
			imageSrc: require('@/public/images/sport_banner.png'),
		},
	]

	return (
		<>
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
		</>
	)
}

export default Slider
