import { SITE } from "../../src/config.mjs";
import baseConfig from "../../vite.config";
import { extendConfig } from "@builder.io/qwik-city/vite";
import { staticAdaptor } from "@builder.io/qwik-city/adaptors/static/vite";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["@qwik-city-plan"],
      },
    },
    plugins: [
      staticAdaptor({
        origin: SITE.origin,
      }),
    ],
  };
});
