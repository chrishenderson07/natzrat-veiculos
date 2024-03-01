import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import './globals.css'
import Header from './_components/_Header'

const syne = Syne({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
	title: 'Natzrat Veículos',
	description: 'Excelencia em Compra e Venda de Veículos',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={syne.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
