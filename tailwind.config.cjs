/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primaryBrightRed: "#f25f3a",
				lighPrimaryBrightRed: "#f79e87",
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
				primaryButtonShadow: '0px 1px 2px #f25f3a',
				secondaryButtonShadow: '0px 1px 2px #fff',
			},
			content: {
				'custom': 'counter(custom-counter)'
			}

		},
	},
	plugins: [],
}
