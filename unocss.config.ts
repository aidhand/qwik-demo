import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  content: {
    filesystem: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
  presets: [presetUno()],
  theme: {
    colors: {
      primary: "#4f46e5",
    },
  },
});
