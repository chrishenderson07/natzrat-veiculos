import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				White: '#ffffff',
				Black: '#222222',
				Red: '#fd3b3b',
			},
			fontSize: {
				sm: '0.875rem',
				base: '1rem',
				lg: '1.125rem',
				xl: '1.25rem',
				'2xl': '1.5rem',
				'3xl': '3rem',
				'4xl': '3.5rem',
			},
			fontFamily: {
				syne: 'Syne',
			},
			boxShadow: {
				'Shadow & Blur': '4px 4px 10px 0px rgba(0,0,0,0.1)',
			},
			borderRadius: {
				none: '0',
				xs: '0.3125rem',
				sm: '0.375rem',
				default: '0.625rem',
				lg: '1.25rem',
				xl: '1.875rem',
				'2xl': '2rem',
				'3xl': '2.5rem',
				'4xl': '3.125rem',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
}
export default config
