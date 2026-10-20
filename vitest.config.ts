import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Tests read fixtures with node:fs and never touch the DOM.
    environment: "node",
  },
});
