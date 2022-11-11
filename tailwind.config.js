/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"sans-serif": ["Open Sans", "sans-serif"],
				serif: ["Crimson Text", "serif"],
				logo: ["Poiret One", "cursive"],
			},
			colors: {
				black: {
					DEFAULT: "#313639",
				},
				offwhite: {
					DEFAULT: "#F6F6F6",
				},
			},
		},
	},
	plugins: [],
}
