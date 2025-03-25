// Dev
import { defineConfig } from "vite";
import { resolve } from "path";
// import { fileURLToPath } from "url";
// Plugins

export default defineConfig({
  root: "",
  publicDir: "assets",
  server: {
    port: "5000",
    open: "index.html",
    hmr: true,
    // Enable overlay for both errors and warnings.
    overlay: true,
    sourcemapIgnoreList(sourcePath, sourcemapPath) {
      return sourcePath.includes("node_modules");
    },
  },
  resolve: {
    alias: {
      "@img": resolve(__dirname, "sources/img/"),
      "@scss": resolve(__dirname, "sources/scss/"),
      "@js": resolve(__dirname, "sources/js/"),
    },
  },

  plugins: [

  ],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       // appSchoool: fileURLToPath(new URL("./index2.html", import.meta.url)),
  //     },
  //   },
  // },
});
