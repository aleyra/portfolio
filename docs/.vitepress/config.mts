import { defineConfig } from 'vitepress'
import path from 'node:path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Portfolio",
  description: "Mon super portfolio",
  base: '/portfolio/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projets', link: '/projects/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aleyra' }
    ],
    search: {
      provider: 'local'
    }
  },
  vite: {
    resolve: {
      alias: {
        '@components': path.join(__dirname, '../../src/components'),
        '@composables': path.join(__dirname, '../../src/composables'),
      },
    },
  },
})
