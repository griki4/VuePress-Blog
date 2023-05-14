module.exports = {
    head: [
        ['link', { rel: 'icon', href: 'favicon.ico'}]
    ],
    title: '打灰日记',
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
        ],
        ['vuepress-plugin-code-copy', true]
    ],
    themeConfig: {
        subSidebar: 'auto',
        lastUpdated: '上次更新：',
        nav: [
            { text: "首页", link: "/" },
            { text: "语雀", link: "https://www.yuque.com/xrikis" },
            { text: "Github", link: "https://github.com/griki4" }
        ],
        sidebar: [
            {
                title: "关于我",
                path: "/",
                collapsable: false,  // 是否折叠
                children: [{ title: "博客简介", path: "/" }],
            },
            {
                title: "HTML",
                path: "/html/01_HTML_semantic_tags",
                collapsable: true,
                children: [
                    { title: "HTML语义化标签", path: "/html/01_HTML_semantic_tags"},
                    { title: "HTML5新特性", path: "/html/2" },
                ]
            },
            {
                title: "CSS",
                path: "/css/01_CSS动画",
                collapsable: true,
                children: [
                    {title: "CSS动画", path: "/css/01_CSS动画"}
                ]
            },
            {
                title: 'Leetcode刷题记录',
                path: '/algorithm/greedy/01_handing_out_cookies',
                collapsable: true,
                children: [
                    {title: "分发饼干（贪心）", path: "/algorithm/greedy/01_handing_out_cookies"},
                    {title: "摆动序列（贪心）", path: "/algorithm/greedy/02_swing_sequence"},
                    {title: "最大子序和（贪心）", path: "/algorithm/greedy/03_maximum_subarray"},
                    {title: "买卖股票的最佳时机II（贪心）", path: "/algorithm/greedy/04_best-time-to-buy-and-sell-stock-ii"},
                    {title : "跳跃游戏（贪心）", path: "/algorithm/greedy/05_jump-game"},
                    {title: "k次取反后数组的最大和（贪心）", path: "/algorithm/greedy/06_maximize-sum-of-array-after-k-negations"},
                    {title: "加油站（贪心）", path: "/algorithm/greedy/07_gas-station"},
                    {title: "分发糖果（贪心）", path: "/algorithm/greedy/08_candy"},
                    {title: "柠檬水找零（贪心）", path: "/algorithm/greedy/09_lemonade-change"},
                    {title: "根据身高重建队列（贪心）", path: "/algorithm/greedy/10_queue-reconstruction-by-height"},
                    {title: "用最少的箭引爆气球（贪心）", path: "/algorithm/greedy/11_minimum-number-of-arrows-to-burst-balloons"},
                    {title: "无重叠区间（贪心）", path: "/algorithm/greedy/12_non-overlapping-intervals"},
                    {title: "划分字母区间（贪心）", path: "/algorithm/greedy/13_partition-labels"}
                ]
            },
            {
                title : "读书笔记",
                path: "/readbook/Vue.js设计与实现/01_框架设计概览",
                collapsable: true,
                children: [
                    {title: "Vue3框架设计思想", path : "/readbook/Vue.js设计与实现/01_框架设计概览"},
                    {title: "Vue3响应式系统", path: "/readbook/Vue.js设计与实现/02_Vue3响应式系统"}
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
