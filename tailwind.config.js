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
			backgroundImage: {
				dam: "url(img/profilepics/michaela-dam-unsplash.jpg)",
				may: "url(img/profilepics/may-gauthier-unsplash.jpg)",
				rod: "url(img/profilepics/jurica-koletic-unsplash.jpg)",
				cor: "url(img/profilepics/zoe-fernandez-unsplash.jpg)",
				ver: "url(img/profilepics/vince-veras-unsplash.jpg)",
				jos: "url(img/profilepics/joseph-gonzalez-unsplash.jpg)",
				chr: "url(img/profilepics/christopher-campbell-unsplash.jpg)",
				jul: "url(img/profilepics/julian-wan-unsplash.jpg)",
				pod: "url(img/profilepics/podpros-unsplash.jpg)",
			},
		},
		plugins: [],
	},
};
