// @ts-ignore
import { sidebar } from "vuepress-theme-hope";

export default sidebar([
    "/",
    {
        text: 'Java',
        icon: "mdi:language-java",
        prefix: 'guide/Java/',
        children: [
            { text: 'JavaSE', link: 'javaSE' },
            { text: 'JavaEE', link: 'javaEE' },
        ]
    },
    {
        text: '数据结构和算法',
        icon: "carbon:data-structured",
        link: 'guide/计算机408/数据结构与算法/'
    },
    {
        text: "计算机408",
        icon: "circle-info",
        children: ["guide/计算机408/数据库原理", "guide/计算机408/计算机网络"],
    },
]);