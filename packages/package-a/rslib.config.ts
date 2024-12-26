import { defineConfig } from "@rslib/core";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginVue2 } from "@rsbuild/plugin-vue2";
import { pluginVue2Jsx } from "@rsbuild/plugin-vue2-jsx";

export default defineConfig({
  source: {
    assetsInclude: /\.scss$/,
  },
  plugins: [pluginSass({
    exclude: /.scss/,
  }),pluginVue2(),pluginVue2Jsx()],
  
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
