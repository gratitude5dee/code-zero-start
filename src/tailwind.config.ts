
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Shark Tank theme colors
				tank: {
					abyss: '#0b2233',     // deeper than the on‑air navy
					dark: '#061a26',      // original dark color
					navy: '#365c77',      // logo base
					teal: '#3badca',      // aquarium edge glow
					aqua: '#6ae0ff',      // accent light
					steel: '#738288',     // steel gray
					glass: 'rgba(255,255,255,0.08)' // frosted cards
				}
			},
			fontFamily: {
				heading: ['"Bebas Neue"', 'sans-serif'] // Using the existing Bebas Neue as fallback
			},
			backgroundImage: {
				'shark-gradient': 'radial-gradient(circle at 50% 120%, rgba(106,224,255,0.15) 0%, rgba(11,34,51,1) 70%)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				// Ripple animation for the Shark Tank theme - fixed opacity values as strings
				ripple: { 
					'0%': {transform:'scale(.8)', opacity:'0.9'}, 
					'100%': {transform:'scale(1.4)', opacity:'0'} 
				},
				// Bubble rise animation - fixed opacity values as strings
				'bubble-rise': {
					'0%': { transform: 'translateY(30px)', opacity: '0', filter: 'blur(4px)' },
					'100%': { transform: 'translateY(0)', opacity: '1', filter: 'blur(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Ripple animation for the Shark Tank theme
				ripple: 'ripple 3s infinite',
				// Bubble rise animation
				'bubble-rise': 'bubble-rise 0.8s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
