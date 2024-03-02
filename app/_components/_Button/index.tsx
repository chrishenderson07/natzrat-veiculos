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
			className="text-base w-fit px-7 py-2 rounded-full">
			<Link href={path}> {label} </Link>
		</ShadButton>
	)
}

export default Button
