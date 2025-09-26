import {defineConfig} from 'dumi';
import {nav} from "./config/nav";

export default defineConfig({
  themeConfig: {
    name: '结绳编程',
    favicon: '/favicon.ico',
    logo: '/logo.png',
    footer: "Copyright © 移动IPE联合 版权所有<br/>" +
      "<a href='https://beian.miit.gov.cn/#/Integrated/index'/>豫ICP备2023027156号-1</a>",
    rtl: false,
    showLineNum: true,
    nprogress: true,
    nav: nav
  },
});
