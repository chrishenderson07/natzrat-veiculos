import { Button as ShadButton } from '@/app/_components/ui/button'
import Link from 'next/link'

interface ButtonProps {
	path: string
	label: string
}

const Button = ({ path, label }: ButtonProps) => {
	return (
		<ShadButton
			variant={'default'}
			asChild
			cla>
			<Link href={path}> {label} </Link>
		</ShadButton>
	)
}

export default Button
