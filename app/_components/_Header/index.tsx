import { Nav } from './Nav'
import logo from '@/public/images/logo.svg'
import Image from 'next/image'
import Button from '../_Button'
const Header = () => {
	return (
		<header className="container flex justify-between items-center ">
			<Image
				src={logo}
				alt="Natzrat Veículos"
			/>
			<Nav />

			<div className="Actions">
				<Button
					path="/contato"
					label="Contato"
				/>
			</div>
		</header>
	)
}

export default Header
