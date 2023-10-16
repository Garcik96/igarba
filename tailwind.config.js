/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				igarcia: {
					orange: {
						50: '#FFE9AF',
						100: '#FFC837',
						200: '#FF8008'
					},
					yellow: {
						100: '#fff601'
					},
					purple: {
						100: '#8227FE',
						200: '#D676EA'
					}
				}
			},
			animation: {
				'moving-background': 'moving-background 5s ease-in-out'
			},
			keyframes: {
				'moving-background': {
					'0%': {
						transform: 'translateY(0)',
						opacity: 0
					},
					'66%': {
						opacity: 0.4
					},
					'100%': {
						transform: 'translateY(-150px)',
						opacity: 0
					}
				}
			}
		}
	},
	plugins: []
}
