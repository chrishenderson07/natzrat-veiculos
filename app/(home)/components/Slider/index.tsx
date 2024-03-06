'use client'

import Slide from './Slide'

const Slider = () => {
	const carsSlide = {
		heading: 'Jeep Compass',
		paragraph:
			'O Jeep Compass é um SUV médio produzido pela Jeep, uma divisão da Stellantis. Foi lançado em 2006 para o mercado de 2007, e é vendido globalmente, exceto nos Estados Unidos, onde o Jeep Patriot e o Jeep Cherokee (KJ) foram substituídos pelo Jeep Compass e pelo Jeep Renegade.',
		buttonPath: '/jeep-compass',
		imageSrc: require('@/public/images/suv_banner.png'),
	}

	return (
		<>
			<Slide
				heading={carsSlide.heading}
				paragraph={carsSlide.paragraph}
				buttonPath={carsSlide.buttonPath}
				imageSrc={carsSlide.imageSrc}
			/>
		</>
	)
}

export default Slider
