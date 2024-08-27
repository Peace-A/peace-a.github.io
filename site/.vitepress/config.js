import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Обирай життя",
  description: "Christian website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "./icon.png",
    nav: [
      //{ text: 'Home', link: '/' },
      //{ text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      //{
      //  text: 'Examples',
      //  items: [
      //    { text: 'Markdown Examples', link: '/markdown-examples' },
      //    { text: 'Runtime API Examples', link: '/api-examples' }
      //  ]
      //}
    ],

    socialLinks: [
      //{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})