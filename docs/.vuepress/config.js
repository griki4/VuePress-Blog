module.exports = {
    title: '打灰的博客',
    description: '提桶跑路',
    theme: 'reco',
    base: '/VuePress-Blog/',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        subSidebar: true,
        nav: [
            { text: "首页", link: "/" },
            {
                text: "打灰的博客",
                items: [
                    { text: "语雀", link: "https://www.yuque.com/xrikis" },
                    { text: "Github", link: "https://github.com/griki4" }
                ]
            }
        ],
        sidebar: [
            {
                title: "欢迎学习",
                path: "/",
                collapsable: false,  // 是否折叠
                children: [{ title: "博客简介", path: "/" }],
            },
            {
                title: "基础篇",
                path: "/handbook/1",
                collapsable: true,
                children: [
                    { title: "第一篇", path: "/handbook/1" },
                    { title: "第二篇", path: "/handbook/2" },
                ]
            }
        ]
    }
}
