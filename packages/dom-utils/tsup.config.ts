import { defineConfig } from "tsup"

export default defineConfig({
  clean: true,
  entry: ["src/index.ts"],
  dts: true,
  format: ["esm", "cjs"],
})
