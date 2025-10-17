import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,

  // async prerender() { // generate static pages at build time as opoposed to server-side rendering (ssr: true)
  //   return ["/", "/about"]
  // }
} satisfies Config;
