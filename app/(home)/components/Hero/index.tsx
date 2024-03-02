import Button from '@/app/_components/_Button'

const Hero = () => {
	return (
		<div className="container bg-red-200 grid grid-cols-3">
			<div className="bg-green-200 col-span-1 flex flex-col gap-12">
				<h1 className="heading1">Jeep Compass</h1>

				<p className="paragraph">
					O Jeep Compass é um SUV compacto que oferece estilo, desempenho e
					versatilidade. Com um design robusto, interior confortável e opções de
					motorização eficientes, é uma escolha confiável para quem busca
					aventuras tanto na cidade quanto fora dela.
				</p>

				<Button
					label="Saiba Mais"
					path="/carro"
				/>
			</div>
			<div className="bg-pink-800 col-span-2">colum 2</div>
		</div>
	)
}

export default Hero
