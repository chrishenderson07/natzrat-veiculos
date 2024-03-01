import { Nav } from './Nav'
import logo from '@/public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../_Button'
const Header = () => {
	return (
		<header>
			<Image
				src={logo}
				alt="Natzrat Veículos"
			/>
			<Nav />

			<div className="Actions">
				<Button
					path="/login"
					label="Login"
				/>
			</div>
		</header>
	)
}

export default Header
