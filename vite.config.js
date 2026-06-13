import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs   from 'fs'
import path from 'path'

const POLICY_ROUTES = {
  '/politica-de-privacidad': 'public/politica-de-privacidad/index.html',
  '/politica-de-cookies':    'public/politica-de-cookies/index.html',
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-policy-pages',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = (req.url || '').split('?')[0].replace(/\/+$/, '')
          const file = POLICY_ROUTES[url]
          if (file) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.end(fs.readFileSync(path.join(process.cwd(), file)))
            return
          }
          next()
        })
      },
    },
  ],
})
