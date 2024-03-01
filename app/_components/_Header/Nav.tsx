import Link from 'next/link'

export const Nav = () => {
	return (
		<nav>
			<ul className="text-base text-Black">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/">Carros</Link>
				</li>
				<li>
					<Link href="/">Sobre Nós</Link>
				</li>
			</ul>
		</nav>
	)
}
