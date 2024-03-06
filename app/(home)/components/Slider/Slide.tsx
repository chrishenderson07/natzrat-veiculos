import Button from '@/app/_components/_Button'
import Image from 'next/image'

interface SlideProps {
	heading: string
	paragraph: string
	buttonPath: string
	imageSrc: string
}

const Slide = ({ heading, paragraph, buttonPath, imageSrc }: SlideProps) => {
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
					src={imageSrc}
					alt="Jeep Compass"
				/>
			</div>
		</div>
	)
}

export default Slide
