import { Button as ShadButton } from '@/app/_components/ui/button'
import Link from 'next/link'

interface ButtonProps {
	path: string
	label: string
}

const Button = ({ path, label }: ButtonProps) => {
	return (
		<Link
			href={path}
			className="rounded-2xl">
			<ShadButton variant={'default'}>{label}</ShadButton>
		</Link>
	)
}

export default Button
