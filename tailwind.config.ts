import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface": "#f9f9f9",
        "tertiary-fixed-dim": "#454747",
        "tertiary": "#3a3c3c",
        "on-primary-container": "#ffffff",
        "inverse-primary": "#c8c6c5",
        "secondary": "#5f5e5e",
        "surface-container": "#eeeeee",
        "primary": "#000000",
        "on-background": "#1a1c1c",
        "outline": "#777777",
        "secondary-fixed-dim": "#acabab",
        "on-error-container": "#410002",
        "surface-container-high": "#e8e8e8",
        "primary-container": "#3c3b3b",
        "on-secondary-fixed": "#1b1c1c",
        "on-primary": "#e5e2e1",
        "surface-container-highest": "#e2e2e2",
        "tertiary-fixed": "#5d5f5f",
        "on-secondary-container": "#1b1c1c",
        "error": "#ba1a1a",
        "outline-variant": "#c6c6c6",
        "surface-variant": "#e2e2e2",
        "on-primary-fixed": "#ffffff",
        "inverse-surface": "#2f3131",
        "on-surface": "#1a1c1c",
        "on-tertiary": "#e2e2e2",
        "on-surface-variant": "#474747",
        "on-error": "#ffffff",
        "surface-container-low": "#f3f3f3",
        "secondary-fixed": "#c8c6c6",
        "surface-tint": "#5f5e5e",
        "on-secondary": "#ffffff",
        "on-primary-fixed-variant": "#e5e2e1",
        "on-tertiary-container": "#ffffff",
        "primary-fixed": "#5f5e5e",
        "on-secondary-fixed-variant": "#3b3b3b",
        "inverse-on-surface": "#f1f1f1",
        "error-container": "#ffdad6",
        "surface-container-lowest": "#ffffff",
        "on-tertiary-fixed-variant": "#e2e2e2",
        "secondary-container": "#d6d4d3",
        "surface-dim": "#dadada",
        "background": "#f9f9f9",
        "tertiary-container": "#737575",
        "surface-bright": "#f9f9f9",
        "primary-fixed-dim": "#474746",
        "on-tertiary-fixed": "#ffffff"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      fontFamily: {
        headline: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        label: ["var(--font-inter)", "sans-serif"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
};

export default config;
