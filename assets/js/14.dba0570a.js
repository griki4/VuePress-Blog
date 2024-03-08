(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{453:function(t,s,a){t.exports=a.p+"assets/img/totalbytes.3e72630f.png"},454:function(t,s,a){t.exports=a.p+"assets/img/imagebytes.2fdea6b2.png"},528:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前端性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端性能优化"}},[t._v("#")]),t._v(" 前端性能优化")]),t._v(" "),s("p",[t._v("从输入URL到页面加载完成发生了什么？ 这是一道经典的面试题目，而前端需要做的性能优化也是针对这个过程中的五个步骤。")]),t._v(" "),s("ol",[s("li",[t._v("DNS解析")]),t._v(" "),s("li",[t._v("建立TCP连接")]),t._v(" "),s("li",[t._v("发送HTTP请求")]),t._v(" "),s("li",[t._v("接收HTTP响应")]),t._v(" "),s("li",[t._v("渲染页面")])]),t._v(" "),s("p",[t._v("前两个步骤优化作为前端开发者能做的事情有限，但是后三个步骤则是前端性能优化中的重点。按类型可以分为网络相关的性能优化和渲染相关的性能优化。本篇主要讨论网络性能优化，前端能做的对于网络相关的优化主要有两点：")]),t._v(" "),s("ul",[s("li",[t._v("减少网络请求的数量。")]),t._v(" "),s("li",[t._v("减少单次网络请求花费的时间。")])]),t._v(" "),s("h2",{attrs:{id:"webpack构建优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack构建优化"}},[t._v("#")]),t._v(" webpack构建优化")]),t._v(" "),s("p",[t._v("现代前端应用基本都是基于框架搭建，其内部一般来说都包含非常多的文件。如果在项目投入使用时，依旧按照我们在开发时编写的代码的零碎程度的话，客户浏览器无疑需要进行数量极大的网络请求才能将完整的页面展示给客户。所以为了避免这个问题，我们需要webpack这样的构建工具来进行“打包”。")]),t._v(" "),s("p",[t._v("“打包”优化也可以细分为两个部分，"),s("strong",[t._v("打包过程的速度优化")]),t._v("和"),s("strong",[t._v("打包产物的体积优化")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"打包过程速度优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包过程速度优化"}},[t._v("#")]),t._v(" 打包过程速度优化")]),t._v(" "),s("h4",{attrs:{id:"约束loader的作用范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#约束loader的作用范围"}},[t._v("#")]),t._v(" 约束loader的作用范围")]),t._v(" "),s("p",[t._v("loader是webpack打包过程中非常重要的角色，充当“翻译官”的作用。但是对于"),s("code",[t._v("node_modules")]),t._v("这样的文件，大部分的loader都没有必要作用于它们，因为不仅花费时间多而且也没有多大意义。所以在配置laoder时可以使用exclude来让某些文件处于loader的作用范围之外：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.js$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("exclude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("node_modules")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loader")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("presets")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/preset-env'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"第三方库单独打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三方库单独打包"}},[t._v("#")]),t._v(" 第三方库单独打包")]),t._v(" "),s("p",[t._v("第三方库在项目运行时是不可或缺的，但是它们不应该和项目本地文件一样被打包进产物，而是在项目运行的时候从外部获取。一种方法是使用"),s("code",[t._v("externals")]),t._v("配置将指定的第三方库排除在打包产物之外，这些第三方库被称为扩展依赖（externals dependencies）。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("externals")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("react")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("另一种处理第三方库的方法是使用"),s("a",{attrs:{href:"https://www.webpackjs.com/plugins/dll-plugin#root",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("DllPlugin")]),t._v("插件"),s("OutboundLink")],1),t._v("第三方库打包进单独的文件，只有第三方库的版本发生变化的时候才会进行重新打包。")]),t._v(" "),s("h4",{attrs:{id:"多进程打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多进程打包"}},[t._v("#")]),t._v(" 多进程打包")]),t._v(" "),s("p",[t._v("webpack默认情况下是单线程运行的，这是基于Node.js的架构带来的限制。而多进程打包可以有效利用现代CPU的多核架构，加快构建速度。目前webpack官方推荐的开启多进程打包的方式是使用"),s("code",[t._v("thread-loader")]),t._v("，使用方法和传统的loader一样。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.js$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thread-loader"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-loader"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint-loader"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("对于项目体积较大的情况来说，多进程打包可以有效提高构建速度。"),s("strong",[t._v("不过，进程自身的创建和销毁本身就是非常耗时的工作，因此使用多进程打包之前需要珍重考虑。")])]),t._v(" "),s("h4",{attrs:{id:"持久化缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#持久化缓存"}},[t._v("#")]),t._v(" 持久化缓存")]),t._v(" "),s("p",[t._v("将首次打包的产物进行缓存，二次构建时只对必要的文件进行重新打包构建。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("cache")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'filesystem'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"打包产物体积优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包产物体积优化"}},[t._v("#")]),t._v(" 打包产物体积优化")]),t._v(" "),s("h4",{attrs:{id:"tree-shaking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking"}},[t._v("#")]),t._v(" Tree-Shaking")]),t._v(" "),s("p",[t._v("基于ES6提供的"),s("code",[t._v("import/export")]),t._v("语法可以在编译时分析出没有使用到的死代码并进行擦除，减小产物体积。")]),t._v(" "),s("h4",{attrs:{id:"scopehoisting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scopehoisting"}},[t._v("#")]),t._v(" ScopeHoisting")]),t._v(" "),s("p",[t._v("将模块间的调用关系转为更加直接的变量引用，减少函数声明和闭包包装的代码量。")]),t._v(" "),s("p",[t._v("比如A文件导出了一个函数，B文件使用了这个函数。默认情况webpack会分别将两个文件使用单独的闭包进行包装生成最终的产物。但是开启ScopeHoisting之后就会仅仅使用一个闭包来包装最终产物。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello leo~"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./main.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("之前的产物：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __webpack_exports__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __webpack_require__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" __WEBPACK_IMPORTED_MODULE_0__util_js__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__webpack_require__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__WEBPACK_IMPORTED_MODULE_0__util_js__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __webpack_exports__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __webpack_require__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    __webpack_exports__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello leo~'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("之后的产物：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __webpack_exports__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __webpack_require__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" util "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello leo~'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h4",{attrs:{id:"代码压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码压缩"}},[t._v("#")]),t._v(" 代码压缩")]),t._v(" "),s("p",[t._v("使用Uglify-js或者TerserPlugin一类的压缩工具，可以将项目中代码进行压缩。")]),t._v(" "),s("h4",{attrs:{id:"产物拆分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#产物拆分"}},[t._v("#")]),t._v(" 产物拆分")]),t._v(" "),s("p",[t._v("上文提到的将第三方库单独打包进一个文件的方法就是一种产物拆分方式。Code-Splitting也是一种产物拆分的方式，它会按照入口文件、异步加载、运行时的方式将产物拆分为更小的chunk，最终用户在使用项目时就不必等待一个庞大的打包文件完全加载完成才能看见项目了。")]),t._v(" "),s("p",[t._v("产物拆分的另一个又是就是避免缓存过快失效。因为项目全部打包成一个文件，项目中一个文件的微小变化都可能引起整个打包产物的缓存失效。拆分成多个产物则只需要更新对应chunk的缓存即可。")]),t._v(" "),s("h2",{attrs:{id:"gzip压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gzip压缩"}},[t._v("#")]),t._v(" Gzip压缩")]),t._v(" "),s("p",[t._v("Gzip压缩是一种内置到网页服务器和浏览器的改善网络传输速率和带宽利用率的方法，服务端在发送文件之前将文件进行压缩，客户端收到文件后进行解压。这个过程中需要客户端做的就是提前告知服务器自己支持的雅座方法，比如Gzip或Deflate。前端开启Gzip只需要在请求头中加入")]),t._v(" "),s("div",{staticClass:"language-makefile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-makefile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token target symbol"}},[t._v("accept-encoding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("gzip\n")])])]),s("h2",{attrs:{id:"图片优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片优化"}},[t._v("#")]),t._v(" 图片优化")]),t._v(" "),s("p",[t._v("图片是现代web网站中最重要的环节，其在网站文件中占据的比例也是相当大的。下面的图片是"),s("a",{attrs:{href:"https://httparchive.org/reports/page-weight#bytesImg",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP Archive"),s("OutboundLink")],1),t._v("网站在2023年底统计的web资源的请求体积以及其中图片的体积。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(453),alt:"资源总体积"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(454),alt:"图片资源体积"}})]),t._v(" "),s("p",[t._v("所以说，图片的优化是网站性能优化至关重要的一点。而且图片和传统的web资源（HTML CSS JS）相比，它是用户能够直接感知到的，因此对于图片的优化不能牺牲掉太多的图片质量。目前常用的针对图片的优化主要是更改图片的格式，主要有下面几种：")]),t._v(" "),s("p",[t._v("1.JPG/JPEG。有损压缩格式，体积小，但是不支持透明度。对于较大的、色彩比较丰富的图片非常适用，如网站背景图、轮播图等。")]),t._v(" "),s("p",[t._v("2.PNG-8/PNG-24。无损压缩格式，体积大，支持透明度。对于页面LOGO、图标等较小的图片适用。")]),t._v(" "),s("p",[t._v("3.SVG。可编程矢量图形，体积小、不失真，但是有一定的学习代价。同时SVG的渲染成本也比较高。")]),t._v(" "),s("p",[t._v("4.Base64编码。将一些比较小的图片直接编码进HTML中，减少网络请求的次数。")]),t._v(" "),s("p",[t._v("5.WEBP。Google推出的新型图片格式，兼容无损压缩和有损压缩，支持透明度，支持动图。但是目前的浏览器兼容性还有待考量。")]),t._v(" "),s("p",[t._v("6*.AVIF。新的图片格式，基于AV1视频编解码器，在压缩效率和图片质量方面相比WEBP更加优秀。但是浏览器兼容性比WEBP要更差，因为它提出的时间更晚。")]),t._v(" "),s("h2",{attrs:{id:"cdn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[t._v("#")]),t._v(" CDN")]),t._v(" "),s("blockquote",[s("p",[t._v("CDN帮助解决人在黑龙江，想要买云南的瓜的问题。")])]),t._v(" "),s("p",[t._v("CDN全名Content Delivery Network，本质上是一组分布在各地的服务器，拥有和源服务器相同的数据。可以根据哪些服务器距离用户最近，满足数据的请求需要。")]),t._v(" "),s("p",[t._v("CDN就好比京东自营旗舰店，我在黑龙江买了一件东西，东西本来只有云南的商家才有，所以商家必须从云南把东西给我运过来。但是黑龙江到云南路途遥远，可能运输的时候我买的东西就坏了或者丢了，又或者很久都运不过来（丢包和阻塞）。这样的购物体验一点都不好，所以商家出于店铺口碑考虑，在全国各地都开了分店，买的东西都和云南的店铺一样。然后发现我是从黑龙江买的东西，所以就让在哈尔滨的店铺给我发货，这样东西运输的时间和距离就大大减少了。")]),t._v(" "),s("p",[t._v("上面就是CDN的基本工作流程。实际过程中用户和服务器可能相距非常远，直接响应用户的请求代价太大。所以有了CDN服务，它是一群服务器，源服务器会提前将内容副本拷贝给CDN服务器。当用户请求数据的时候，CDN会截获用户请求，找到距离用户最近的CDN服务器，并从最近的服务器返回资源给用户。")]),t._v(" "),s("p",[t._v("CDN会将"),s("strong",[t._v("静态资源")]),t._v("提前从源服务器中拷贝过来，对于那些需要服务器计算的动态资源，CDN会在用户访问时向源服务器请求。"),s("strong",[t._v("CDN可以避免Cookie带来的性能浪费")]),t._v("，因为CDN服务器的域名和源服务器可以是不一样的，这样浏览器请求静态资源的时候就不会携带Cookie了。")]),t._v(" "),s("h3",{attrs:{id:"请求截获"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求截获"}},[t._v("#")]),t._v(" 请求截获")]),t._v(" "),s("p",[t._v("如果源服务器部署了CDN，那么在域名解析的过程中，返回给用户的IP地址就不是源服务器的地址了，而是CDN服务器的地址。这样做不仅可以让用户更快的访问网站内容，还能起到掩盖源服务器IP地址的作用，避免恶意的网络攻击。")]),t._v(" "),s("h3",{attrs:{id:"任播"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#任播"}},[t._v("#")]),t._v(" 任播")]),t._v(" "),s("p",[t._v("任播技术是实现CDN的一项重要技术。任播可以实现CDN服务器的负载均衡以及找到距离用户最近的服务器。")]),t._v(" "),s("p",[t._v("所谓任播就是CDN服务器都具有相同的IP地址，并且由于CDN的特性，其服务器上面的内容都是源服务器的数据副本，也就是说都是一样的。所以用户访问任何一台CDN服务器的结果都是一样的，我们可以在用户不知道的情况下就将用户的请求重定向到另外的服务器，由此实现均衡负载以及找到距离最近的服务器。同时还能避免由于DDos攻击导致一台服务器宕机后网站就不能正常访问的情况。")])])}),[],!1,null,null,null);s.default=n.exports}}]);