import logo from '@/public/images/logo.svg'
import Image from 'next/image'

import { Nav } from './Nav'
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
