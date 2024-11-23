import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					lg: '2rem',
					xl: '11rem'
				}
			},
			fontFamily: {
				koulen: ['Koulen', 'sans-serif']
			},
			animation: {
				'spin-slow': 'spin 18s linear infinite'
			},
			color: {
				spotify: '#1DB954',
				stone: {
					'50': '#fafaf9',
					'100': '#f5f5f4',
					'200': '#e7e5e4',
					'300': '#d6d3d1',
					'400': '#a8a29e',
					'500': '#78716c',
					'600': '#57534e',
					'700': '#44403c',
					'800': '#292524',
					'900': '#1c1917',
					'950': '#0c0a09'
				}
			}
		}
	},
	plugins: []
} satisfies Config;
