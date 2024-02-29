import Image from 'next/image'
import { Nav } from './Nav'

import logo from '@/public/images/logo.svg'
const Header = () => {
	return (
		<header>
			<Image
				src={logo}
				alt="Natzrat Veículos"
			/>
			<Nav />
		</header>
	)
}

export default Header
