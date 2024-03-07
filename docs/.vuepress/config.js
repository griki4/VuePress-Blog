module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    title: '打灰笔记',
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
                path: "/html/01.HTML常用知识",
                collapsable: true,
                children: [
                    { title: "HTML常用知识", path: "/html/01.HTML常用知识"},
                    { title: "HTML5新特性", path: "/html/2_HTML5" },
                ]
            },
            {
                title: "CSS",
                path: "/css/01_CSS动画",
                collapsable: true,
                children: [
                    {title: "CSS动画", path: "/css/01_CSS动画"},
                    {title: "CSS选择器", path: "/css/02_CSS选择器"}
                ]
            },
            {
                title: "JavaScript",
                path: "/javascript/Web_Worker",
                collapsable: true,
                children: [
                    {title: "浅拷贝与深拷贝", path: "/javascript/浅拷贝与深拷贝"},
                    {title: "Web Worker", path: "/javascript/Web_Worker"},
                    {title: "装饰器", path: "/javascript/装饰器"},
                    {title: "JSON", path: "/javascript/JSON"},
                    {title: "设计模式", path: "/javascript/设计模式"},
                    {title: "TypeScript", path: "/javascript/TypeScript"},
                    {title: "常见手写代码", path: "/javascript/常见手写代码"}
                ]
            },
            {
                title: "性能优化",
                path: "/optimization/01.网络性能优化",
                collapsable: true,
                children: [
                    {title: "网络性能优化", path: "/optimization/01.网络性能优化"},
                    {title: "存储优化", path: "/optimization/02.存储优化"},
                    {title: "渲染优化", path: "/optimization/03.渲染优化"},
                    {title: "懒加载与防抖节流", path: "/optimization/04.懒加载与防抖节流"}
                ]
            },
            {
                title: "Node.js",
                path: "/nodejs/01.包管理工具",
                collapsable: true,
                children: [
                    {title: "包管理工具", path: "/nodejs/01.包管理工具"},
                    {title: "前端模块化", path: "/nodejs/02.前端模块化"}
                ]
            },
            {
                title: 'Leetcode刷题记录',
                path: '/algorithm/greedy/01_handing_out_cookies',
                collapsable: true,
                children: [
                    {title: "二分查找（数组）", path: "/algorithm/array/01.二分查找"},
                    {title: "两数之和（哈希表)", path: "/algorithm/hash_map/02.两数之和"},
                    {title: "字母异位词分组（哈希表）", path: "/algorithm/hash_map/03.字母异位词分组"},
                    {title: "最长连续序列（哈希表）", path: "/algorithm/hash_map/04.最长连续序列"},
                    {title: "最长回文子串（哈希表）", path: "/algorithm/hash_map/01_longest-palindrome"},
                    {title: "移动零（双指针）", path: "/algorithm/dual_pointers/01.移动零"},
                    {title: "盛水最多的容器（双指针）", path: "/algorithm/dual_pointers/02.盛水最多的容器"},
                    {title: "和为k的子数组（前缀和）", path: "/algorithm/substring/01.和为k的子数组"},
                    {title: "滑动窗口中的最大值（子串）", path: "/algorithm/substring/02.滑动窗口中的最大值"},
                    {title: "最小覆盖子串（子串）", path: "/algorithm/substring/03.最小覆盖子串"},
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
                    {title: "划分字母区间（贪心）", path: "/algorithm/greedy/13_partition-labels"},
                    {title: "合并区间（贪心）", path: "/algorithm/greedy/14_merge-intervals"},
                    {title: "单调递增的数字（贪心）", path: "/algorithm/greedy/15_monotone-increasing-digits"},
                    {title: "斐波那契数（DP）", path: "/algorithm/dynamic_programming/01_fibonacci-number"},
                    {title: "爬楼梯（DP）", path: "/algorithm/dynamic_programming/02_climbing-stairs"},
                    {title: "不同路径（DP）", path: "/algorithm/dynamic_programming/03_unique-paths-ii"},
                    {title: "整数拆分（DP）", path: "/algorithm/dynamic_programming/04_integer-break"},
                    {title: "不同的二叉搜索树（DP）", path: "/algorithm/dynamic_programming/05_unique-binary-search-trees"},
                    {title: "01背包理论基础", path: "/algorithm/dynamic_programming/06_01-bags"},
                    {title: "分割等和子集（DP）", path: "/algorithm/dynamic_programming/07_partition-equal-subset-sum"},
                    {title: "最后一块石头的重量||（DP）", path: "/algorithm/dynamic_programming/08_last-stone-weight-ii"},
                    {title: "目标和（DP）", path: "/algorithm/dynamic_programming/09_target-sum"},
                    {title: "一和零（DP）", path: "/algorithm/dynamic_programming/10_ones-and-zeros"}
                ]
            },
            {
                title : "读书笔记",
                path: "/readbook/Vue.js设计与实现/01_框架设计概览",
                collapsable: true,
                children: [
                    {title: "Vue3框架设计思想", path: "/readbook/Vue.js设计与实现/01_框架设计概览"},
                    {title: "Vue3响应式系统", path: "/readbook/Vue.js设计与实现/02_Vue3响应式系统"},
                    {title: "针对不同值的响应式方案", path: "/readbook/Vue.js设计与实现/03_针对不同值的响应式方案"},
                    {title: "Vue中的Diff算法", path: "/readbook/Vue.js设计与实现/04_Diff算法"}
                ]
            },
            {
                title: '零散项目经验',
                path: "/project/01_component_library",
                collapsable: true,
                children: [
                    {title: 'Vue3组件库', path: "/project/01_component_library"}
                ]
            },
            {
                title: 'Next.js',
                path: '/framework/next/01_Next官方教程',
                collapsable: true,
                children: [
                    {title: "Next.js官方教程", path: "/framework/next/01_Next官方教程"},
                    {title: "Next Routing", path: "/framework/next/02_Next-Routing"},
                    {title: "数据请求", path: "/framework/next/03_数据请求"},
                    {title: "渲染策略", path: "/framework/next/04_渲染"},
                    {title: "缓存机制", path: "/framework/next/05_缓存策略"},
                    {title: "优化策略", path: "/framework/next/06_优化策略"},
                ]
            },
            {
                title: '数据库',
                path: "/framework/sql/01.SQL基础",
                collapsable: true,
                children: [
                    {title: "SQL", path: "/framework/sql/01.SQL基础"},
                    {title: "MongoDB", path: "/framework/sql/02.MongoDB基础"},
                    {title: "Prisma", path: "/framework/sql/03.Prisma基础"}
                ]
            }
        ]
    }
}
