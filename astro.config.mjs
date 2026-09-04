import { defineConfig } from "astro/config";

const base = process.env.BASE_URL || "/";

export default defineConfig({
  output: "static",
  base: base === "/" ? base : `${base.replace(/\/$/, "")}/`,
});
