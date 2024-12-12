import { defineConfig } from "@rslib/core";
export default defineConfig({
  plugins: [],
  lib: [
    {
      source: {
        entry: {
          index: "./src/**",
        },
      },
      format: "cjs",
      bundle: false,
      autoExternal:false,
      dts: { bundle: false, distPath: "./lib", build: false, abortOnError: false },
      //dts:false
    }
  ],
  output: {
    target: "web",
    distPath: {
      root: "./lib",
    },
  }
});
