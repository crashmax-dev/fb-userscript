import { defineConfig } from 'vite'
import Userscript from 'vite-userscript-plugin'
import { name, version, homepage, license } from './package.json'

export default defineConfig((config) => {
  return {
    plugins: [
      Userscript({
        entry: 'src/index.ts',
        header: {
          name,
          version,
          license,
          homepage,
          match: [
            homepage + '*',
            'http://localhost:3000/*',
            'https://review.intern.facebook.com/*',
          ]
        },
        server: {
          port: 3000
        }
      })
    ]
  }
})
