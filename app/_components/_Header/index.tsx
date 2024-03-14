import { Nav } from './Nav'
import logo from '@/public/images/logo.svg'
import Image from 'next/image'
import Button from '../_Button'
const Header = () => {
	return (
		<header className="w-full bg-Gray">
			<div className="container flex justify-between items-center py-10">
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
			</div>
		</header>
	)
}

export default Header
