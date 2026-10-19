import { defineConfig } from 'vite';
export default defineConfig({
  esbuild: { jsx: 'automatic' },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Radix's RSC markers are not used by this browser-only SPA.
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('use client')) return;
        warn(warning);
      }
    }
  }
});
