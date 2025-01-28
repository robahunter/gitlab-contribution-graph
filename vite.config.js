import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'index.js',  // Adjust this to your entry file
      name: 'gitlab-contribution-graph',
      fileName: (format) => `gitlab-contribution-graph.${format}.js`,
    },
  },
});