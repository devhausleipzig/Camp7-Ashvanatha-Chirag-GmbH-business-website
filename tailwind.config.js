/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts}"],
	theme: {
		colors: {
			lightBeige: "#fff7f0",
			blue: "#0568fd",
			purple: "#6c64ce",
			lightPurple: "#b8b2f2",
			turquoise: "#38b3d1",
			pink: "#f290e8",
			lightPink: "#fac8f5",
			black: "#000000",
			white: "#ffffff",
		},
		extend: {
			animation: {
				marquee: "marquee 30s linear infinite",
				marquee2: "marquee2 30s linear infinite",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				marquee2: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0%)" },
				},
			},
		},
		plugins: [],
	},
};
