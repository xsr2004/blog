// @ts-ignore
import { sidebar } from "vuepress-theme-hope";

export default sidebar([
    "/",
    {
        text: 'Java',
        prefix: 'guide/Java/',
        collapsible: true,
        children: [
            { text: 'JavaSE', link: 'javaSE' },
            { text: 'JavaEE', link: 'javaEE' },
        ]
    },
    {
        text: '数据结构和算法',
        collapsible: true,
        link: 'guide/计算机408/数据结构与算法/'
    },
    {
        text: "计算机408",
        collapsible: true,
        children: ["guide/计算机408/数据库原理", "guide/计算机408/计算机网络"],
    },
    {
        text: "其他",
        prefix:"guide/其他/",
        collapsible: true,
        children: [
            { text: 'github', link: 'github' },
        ],
    },
]);