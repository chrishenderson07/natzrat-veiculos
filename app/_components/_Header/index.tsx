import { Nav } from './Nav'
import logo from '@/public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
	return (
		<header>
			<Image
				src={logo}
				alt="Natzrat Veículos"
			/>
			<Nav />

			<div className="Actions">
				<Link href="/contato">Contato</Link>
			</div>
		</header>
	)
}

export default Header
