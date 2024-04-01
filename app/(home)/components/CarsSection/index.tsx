import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/app/_components/ui/card'
import { Separator } from '@/app/_components/ui/separator'

import { cars } from '@/app/_moks/cars'
import Image from 'next/image'

const CarsSection = () => {
	return (
		<section className="py-12">
			<div className="container mx-auto bg-gray-500">
				<div className="section-header flex items-center gap-10">
					<div className="flex-1">
						<h4 className="text-2xl">Mude suas perspectivas</h4>
						<h2 className="text-3xl font-semibold leading-tight">
							Os melhores carros para você
						</h2>
					</div>

					<div className="flex-1 space-y-2">
						<strong>Escolha o modelo ideal para o seu estilo de vida</strong>
						<p>
							O propósito da Avantgarde é ser a melhor escolha em automóveis
							para seus clientes e fazer parte dos momentos especiais da sua
							vida
						</p>
					</div>
				</div>

				{/* Card Cards */}

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
					{cars.map((car, index) => (
						<Card key={index}>
							<CardHeader className="min-h-52 flex flex-col justify-center">
								<Image
									src={car.imageSrc}
									alt={car.heading}
								/>
							</CardHeader>
							<CardContent>
								<CardTitle className="text-sm font-bold text-LightRed">
									{car.brand}
								</CardTitle>
								<CardTitle className="text-lg">{car.title}</CardTitle>
								<Separator className="bg-LightRed" />
							</CardContent>
							<CardFooter>{car.price}</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

export default CarsSection
