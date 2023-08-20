import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  content: {
    filesystem: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
  presets: [presetUno()],
});
