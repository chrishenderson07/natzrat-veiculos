import { useEffect, useRef } from 'react'

import Button from '@/app/_components/_Button'
import Image from 'next/image'

import gsap from 'gsap'

interface SlideProps {
	heading: string
	paragraph: string
	buttonPath: string
	imageSrc: string
	index: number
}

const Slide = ({
	heading,
	paragraph,
	buttonPath,
	imageSrc,
	index,
}: SlideProps) => {
	const imageRef = useRef(null)

	useEffect(() => {
		const tl = gsap.timeline({ defaults: { duration: 1 } })

		tl.to(imageRef.current, {
			y: 0,
			opacity: 1,
			ease: 'power4.inOut',
			duration: 1.5,
		})
	}, [])
	return (
		<div className="container h-screen max-h-[700px] grid grid-cols-3">
			<div className="col-span-1 flex flex-col justify-center gap-12">
				<h1 className="heading1">{heading}</h1>

				<p className="paragraph">{paragraph}</p>

				<Button
					label="Saiba Mais"
					path={buttonPath}
				/>
			</div>
			<div className="col-span-2 flex items-center">
				<Image
					ref={imageRef}
					src={imageSrc}
					alt="Jeep Compass"
					className="translate-y-[50px] opacity-0 imagetest"
				/>
			</div>
		</div>
	)
}

export default Slide
