// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
// @ts-ignore
import { hopeTheme } from "vuepress-theme-hope";
import { copyrightPlugin } from "vuepress-plugin-copyright2";
import navbar from "./navbar";
import sidebar from "./sidebar"
export default defineUserConfig({
    base: "/blog/",
    lang: "zh-CN",
    title: "小酥肉",
    description: "小酥肉的博客",
    theme: hopeTheme({
        hostname: "https://xsr2004.github.io",
            author: {
                name: "xsr2004",
                url: "https://xsr2004.github.io",
            },
            logo: "/logo.jpg",
            iconAssets: "iconify",
            fullscreen: true,
            navbar,
            sidebar,
            repo: "xsr2004/blog",
            repoLabel: "GitHub",
            repoDisplay: true,
            metaLocales: {
                editLink: "在 GitHub 上编辑此页",
            },
            displayFooter:true,
            plugins:{
                comment: {
                    provider: "Waline",
                    // waline 模式下
                    serverURL: "https://myblog-beige-pi.vercel.app/", // your serverURL
                },
            }

    }),
});
