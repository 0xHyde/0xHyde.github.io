import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hyde's log",
  description: "This is Hyde's blog. I have recorded some of my notes about ai, products, rock music and broken thoughts.",
  lang: 'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '产品设计',
        items: [
          { text: '产品', link: '/产品设计/产品/index.md' },
          { text: '需求', link: '/产品设计/需求/index.md' },
          { text: '用户', link: '/产品设计/用户/index.md' },
          { text: '设计', link: '/产品设计/设计/index.md' },
        ]
      },
      {
        text: '人工智能',
        items: [
          { text: '产品设计', link: '/ 1' },
          { text: 'Item B', link: '/1' },
          { text: 'Item C', link: '/1' }
        ]
      },
      { text: '碎碎念', link: '/' },
    ],

    sidebar: {
      '/产品设计/': [
        {
          text: '产品',
          items: [
            { text: '概览', link: '/guide/' },
            { text: '产品生命周期', link: '/guide/one' },
            { text: 'PMF 与 MVP', link: '/guide/two' },
          ]
        },
        {
          text: '需求',
          items: [
            { text: '价值评估', link: '/guide/' },
            { text: '需求优先级', link: '/guide/one' },
            { text: '迭代与版本管理', link: '/guide/one' },
          ]
        },
        {
          text: '用户',
          items: [
            { text: '用户研究', link: '/guide/' },
            { text: '定义和呈现用户', link: '/guide/one' },
          ]
        },
        {
          text: '设计',
          items: [
            { text: '方案设计', link: '/guide/' },
            { text: '用户体验设计', link: '/guide/one' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/0xHyde' },
      { icon: 'twitter', link: 'https://twitter.com/hi0xHyde' }
    ],

    footer: {
      copyright: '© 2024 Hyde, licensed under CC BY 4.0.'
    },

    search: {
      provider: 'local'
    },
  }
})
