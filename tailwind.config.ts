import type { Config } from 'tailwindcss'

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				White: '#ffffff',
				Black: '#222222',
				Red: '#fd3b3b',
				LightRed: '#ff4d4d',
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
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
