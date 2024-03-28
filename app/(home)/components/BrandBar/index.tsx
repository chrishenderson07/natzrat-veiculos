'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import './styles.css'

const BrandBar = () => {
	const carBrandsLogo: { logo: string }[] = [
		{
			logo: require('@/public/images/car_brands/audi.svg'),
		},
		{
			logo: require('@/public/images/car_brands/citroen.svg'),
		},

		{
			logo: require('@/public/images/car_brands/honda.svg'),
		},
		{
			logo: require('@/public/images/car_brands/jeep.svg'),
		},
		{
			logo: require('@/public/images/car_brands/kia.svg'),
		},
		{
			logo: require('@/public/images/car_brands/land-rover.svg'),
		},
		{
			logo: require('@/public/images/car_brands/mercedes.svg'),
		},
		{
			logo: require('@/public/images/car_brands/mitsubishi.svg'),
		},
		{
			logo: require('@/public/images/car_brands/nissan.svg'),
		},
		{
			logo: require('@/public/images/car_brands/renault.svg'),
		},
		{
			logo: require('@/public/images/car_brands/toyota.svg'),
		},
		{
			logo: require('@/public/images/car_brands/vw.svg'),
		},
	]
	return (
		<div className="bg-white w-full py-3">
			<Swiper
				slidesPerView={7}
				modules={[Autoplay]}
				autoplay={{ delay: 0, disableOnInteraction: false }}
				freeMode={false}
				loop={true}
				speed={3500}
				className="mySwiper">
				{carBrandsLogo.map((brand) => (
					<SwiperSlide>
						<Image
							src={brand.logo}
							alt="Imagem da marca"
							width={100}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default BrandBar
