import { defineConfig, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  content: {
    filesystem: ["**/*.{js,ts,jsx,tsx}"],
  },
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "bunny",
      fonts: {
        sans: ["Inter:400,500,600,700"],
        mono: ["Fira Code:400,700", "Fira Mono:400,700"],
      },
    }),
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#8b5cf6",
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95",
        950: "#2e1065",
      },
    },
  },
  shortcuts: {
    "form-outline": "outline-2 outline-gray-500 focus:outline active:outline",
    "form-border": "border rounded border-gray-300 dark:border-gray-700",
    "form-background": "bg-gray-50 dark:bg-gray-900",
    "form-base":
      "px-3 py-2 my-4 block form-outline form-border form-background",

    "button": "form-base font-medium",
    "primary-light":
      "text-white bg-primary-700 hover:bg-primary-800 active:bg-primary-900",
    "primary-dark":
      "text-white bg-primary-700 hover:bg-primary-600 active:bg-primary-500",
    "button-primary": "button primary-light dark:primary-dark",

    "secondary-light":
      "text-white bg-gray-900 hover:bg-gray-800 active:bg-gray-700",
    "secondary-dark":
      "text-black bg-gray-100 hover:bg-gray-200 active:bg-gray-300",
    "button-secondary": "button secondary-light dark:secondary-dark",

    "tertiary-light":
      "text-black bg-gray-50 hover:bg-gray-100 active:bg-gray-200",
    "tertiary-dark":
      "text-white bg-gray-900 hover:bg-gray-800 active:bg-gray-700",
    "button-tertiary": "button tertiary-light dark:tertiary-dark",

    "select-base": "form-base",
    "input-base": "form-base min-w-56",
    "textarea-base": "input-base min-h-20",
    "checkbox-base": "w-4 h-4 m-4 mr-2 form-border form-background",
    "radio-base": "checkbox-base",
  },
});
