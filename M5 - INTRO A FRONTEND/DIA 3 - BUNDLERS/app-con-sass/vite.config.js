import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      pages: [
        {
          entry: "src/javascript/main.js",
          filename: "index.html",
          template: "index.html",
        },
        {
          entry: "src/javascript/contacto.js",
          filename: "contacto.html",
          template: "contacto.html",
        },
      ],
    }),
  ],
});
