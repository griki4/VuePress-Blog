module.exports = {
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            { rel: 'icon', href: 'tou.jpg' }
        ]
    ],
    title: '打灰的博客',
    description: '提桶跑路',
    theme: 'reco',
    base: '/VuePress-Blog/',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    plugins: [
        [
            'vuepress-plugin-helper-live2d', {
            // 是否开启控制台日志打印(default: false)
            log: false,
            live2d: {
                // 是否启用(关闭请设置为false)(default: true)
                enable: true,
                // 模型名称(default: hibiki)>>>取值请参考：
                // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
                model: 'hibiki',
                display: {
                    position: "right", // 显示位置：left/right(default: 'right')
                    width: 135, // 模型的长度(default: 135)
                    height: 300, // 模型的高度(default: 300)
                    hOffset: 65, //  水平偏移(default: 65)
                    vOffset: 0, //  垂直偏移(default: 0)
                },
                mobile: {
                    show: false // 是否在移动设备上显示(default: false)
                },
                react: {
                    opacity: 0.8 // 模型透明度(default: 0.8)
                }
            }
        }
        ]
    ],
    themeConfig: {
        subSidebar: 'auto',
        lastUpdated: '上次更新：',
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
                title: "关于我",
                path: "/",
                collapsable: false,  // 是否折叠
                children: [{ title: "博客简介", path: "/" }],
            },
            {
                title: "HTML/CSS",
                path: "/handbook/01_HTML_semantic_tags",
                collapsable: true,
                children: [
                    { title: "HTML语义化标签", path: "/handbook/01_HTML_semantic_tags" },
                    { title: "HTML5新特性", path: "/handbook/2" },
                ]
            },
            {
                title: 'JavaScript Algorithm',
                path: '/algorithm/greedy/02_swing_sequence',
                collapsable: true,
                children: [
                    {title: "分发饼干（贪心）", path: "/algorithm/greedy/01_handing_out_cookies"},
                    {title: "摆动序列（贪心）", path: "/algorithm/greedy/02_swing_sequence"},
                    {title: "最大子序和（贪心）", path: "/algorithm/greedy/03_maximum_subarray"},
                ]
            },
            {
                title: '零散项目经验',
                path: "/project/01_component_library",
                collapsable: true,
                children: [
                    {title: 'Vue3组件库', path: "/project/01_component_library"}
                ]
            }
        ]
    }
}
