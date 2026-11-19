import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        contact: resolve(rootDir, 'contact.html'),
        about: resolve(rootDir, 'a-propos.html'),
        history: resolve(rootDir, 'histoire.html'),
        careers: resolve(rootDir, 'carrieres.html'),
        engagement: resolve(rootDir, 'engagement.html'),
        references: resolve(rootDir, 'references.html'),
        spareParts: resolve(rootDir, 'pieces-de-rechange.html'),
        warranty: resolve(rootDir, 'garantie.html'),
        review: resolve(rootDir, 'avis.html'),
        blog: resolve(rootDir, 'blog.html'),
        quote: resolve(rootDir, 'devis.html'),
        account: resolve(rootDir, 'compte.html'),
      },
    },
  },
})
