import { defineConfig } from "vitepress";
import path from "path";
import listFiles from "../../listFile";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FE-ROADMAP",
  description: "前端知识体系",
  base: "/fe-roadmap",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: "Home", link: "/" },
    //   { text: "Examples", link: "/markdown-examples" },
    // ],
    logo: "../assets/css.jpeg",
    sidebar: [
      listFiles(path.join( path.resolve('docs'), "./css/base"), { text: 'CSS 基础', items: []}),
      listFiles(path.join( path.resolve('docs'), "./css/preprocessors"), { text: 'CSS 预处理器', items: []}),
      listFiles(path.join( path.resolve('docs'), "./css/implementation"), { text: 'CSS 领域应用', items: []}),
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/yolilufei/blog" },
    ],
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/yolilufei/blog.git',
      text: 'Edit this page on Github'
    }
  },
  lastUpdated: true
});
