// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
// @ts-ignore
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar"
export default defineUserConfig({
    base: "/",
    lang: "zh-CN",
    title: "薛哥",
    description: "薛哥的博客",
    theme: hopeTheme({
            hostname: "https://xsr2004.github.io",

            author: {
                name: "薛哥",
                url: "https://xsr2004.github.io",
            },
            logo: "/logo.jpg",
            // 关键词: "iconfont", "iconify", "fontawesome", "fontawesome-with-brands"
            iconAssets: "fontawesome",
            //
            // // 你想要的 URL
            // iconAssets: "/base/my/font-icon/resource.js",
            //
            // // 上述内容的数组
            // iconAssets: [
            //     "/base/my/font-icon/resource.js",
            //     "https://example/my/fonr-icon/resouce.css",
            //     "fontawesome",
            // ],
            fullscreen: true,
            navbar,
            sidebar,
            metaLocales: {
                editLink: "在 GitHub 上编辑此页",
            },
        }),
});
