export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				igarba: {
					orange: {
						100: '#FFFAEB',
						200: '#FFF4D7',
						300: '#FFEFC3',
						400: '#FFE9AF',
						500: '#FFE49B',
						600: '#FFDE87',
						700: '#FFD973',
						800: '#FFD35F',
						900: '#FFCE4B',
						1000: '#FFC837',
						1100: '#CCA02C'
					},
					yellow: {
						100: '#FFFEE6',
						200: '#FFFDCC',
						300: '#FFFCB3',
						400: '#FFFB99',
						500: '#FFFB80',
						600: '#FFFA67',
						700: '#FFF94D',
						800: '#FFF834',
						900: '#FFF71A',
						1000: '#FFF601'
					},
					purple: {
						0: '#E6D4FF',
						100: '#CDA9FF',
						200: '#B47DFE',
						300: '#9B52FE',
						400: '#8227FE',
						500: '#681FCB',
						600: '#4E1798',
						700: '#341066',
						800: '#1A0833'
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
						opacity: 0.2
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
