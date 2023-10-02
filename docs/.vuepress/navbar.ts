// @ts-ignore
import { navbar } from "vuepress-theme-hope";

export default navbar([
    "/",
        {
            text: 'Java',
            prefix: 'guide/Java/',
            children: [
                { text: 'JavaSE', link: 'javaSE' },
                { text: 'JavaEE', link: 'javaEE' },
            ]
        },
        {
            text: '数据结构和算法',
            prefix:"guide/计算机408/数据结构与算法/",
            link: ''
        },
        {
            text: "计算机408",
            prefix:"guide/计算机408/",
            children: [
                { text: '数据库原理', link: '数据库原理' },
                { text: '计算机网络', link: '计算机网络' },
            ],
        },
        {
            text: "其他",
            prefix:"guide/其他/",
            children: [
                { text: 'github', link: 'github' },
            ],
        },
]);