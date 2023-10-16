import { defineConfig } from "vitepress";
import path from "path";
import listFiles from "../../listFile";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "better-css",
  description: "一起了解css的世界",
  base: "/better-css",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: "Home", link: "/" },
    //   { text: "Examples", link: "/markdown-examples" },
    // ],
    logo: "../assets/css.jpeg",
    sidebar: [
      listFiles(path.join( path.resolve('docs'), "./base"), { text: 'CSS 基础', items: []}),
      listFiles(path.join( path.resolve('docs'), "./preprocessor"), { text: 'CSS 预处理器', items: []}),
      listFiles(path.join( path.resolve('docs'), "./implementation"), { text: 'CSS 领域应用', items: []}),
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/yolilufei/better-css" },
    ],
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/yolilufei/better-css.git',
      text: 'Edit this page on Github'
    }
  },
  lastUpdated: true
});
