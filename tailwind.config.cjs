/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primaryBrightRed: "#f25f3a",
				primaryDarkBlue: "#242d52",
				neutralGrayishBlue: "#9095a7",
				neutralVeryDarkBlue: "#1d1e25",
				neutralPaleRed: "#ffefeb",
				neutralLightGray: "#FAFAFA",
			},
			backgroundImage: {
				"top-corner": "url('/images/bg-tablet-pattern.svg')",
			},
			dropShadow: {
				buttonShadow: '0px 2px 4px #f25f3a'
			},
			content: {
				'custom': 'counter(custom-counter)'
			}

		},
	},
	plugins: [],
}
