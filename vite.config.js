import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
    // default is 500 KiB; adjust as needed
    chunkSizeWarningLimit: 1500,
    },
});
