---
title: Vue3组件库搭建笔记
---
## Monorepo架构为什么适合组件库？

## 开发一个Button组件

## Vite打包组件库
组件库打包之后的产物需要满足三个基本条件：
1. 不应全部打包成一个文件，应打包为多个文件以便支持按需引入。
2. 需要输出多种类型的产物适应不同的应用场景。
3. 需要有良好的类型提示。

前两个需求都可以通过`build.rollupOptions.output`中配置来实现，具体配置如下
```ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
export default defineConfig({
  build: {
    //打包文件目录，这里会被rollup中指定的输出目录覆盖
    outDir: "es",
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue"],
      input: ["index.ts"],
        //output写成数组，每一项都是一个配置，最后输出的产物就会遵循各自的配置，实现打包成多种产物
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //preserveModules给每一个项目的源文件都生成了一个chunk，实现将将项目打包为多个文件支持按需引入
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "../easyest/es",
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "../easyest/lib",
        }
      ]
    },
      //打包库时必须指定的配置项
    lib: {
      entry: "./index.ts",
    }
  },
  plugins: [vue()],
})
```
**实际上这里的按需引入是利用现代脚手架和浏览器都是支持`ESM`实现的，也就是自动`Tree-Shaking`，当然只有`es`目录下的产物才支持。**
但是，这里实现的按需引入只是针对`js`文件而言的。项目的样式文件还是被打包成了一个文件，这就需要`gulp`的帮助来实现样式的按需引入了。

最后一个类型提示需要生成类型声明文件`.d.ts`，借助插件`vite-plugin-dts`实现，在上述代码中添加
```ts
import dts from "vite-plugin-dts"
import DefineOptions from "unplugin-vue-define-options/vite"
export default defineConfig({
    plugins: [
        vue(),
        dts({
            entryRoot: "./src",
            outputDir: ["../Xrikis/es/src", "../Xrikis/lib/src"],
            //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
            tsConfigFilePath: "../../tsconfig.json",
        }),
        DefineOptions()
    ]
})
```
插件会遍历指定目录下的所有文件所有文件，为每一个文件生成类型声明文件并输出到指定目录，当然我们需要指定`ts`的配置文件。

## gulp实现样式文件按需加载
**组件库中样式文件都是写在组件外部的，`Vite`默认会将外部样式文件全部打包为一个文件，这不符合按需加载的设计理念。**

要解决这个问题主要按照下面的步骤进行：
1. `Vite`打包时需要跳过`less`文件。
2. `less`文件的打包处理交给`gulp`，并将处理完的样式文件输出到组件对应的目录。
3. `Vite`打包的产物中引入`less`文件的语句全部变成引入`gulp`处理之后的`css`文件。

一步步来看。
第一步非常简单，只需给`vite.config.ts`添加一个配置
```ts
external: ['vue', /\.less/]
```

第二步就需要编写一些逻辑了，主要的逻辑代码如下
```ts
export const buildStyle = () => {
    return src(`${componentPath}/src/**/style/**.less`)
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(dest(`${pkgPath}/Xrikis/lib/src`))
        .pipe(dest(`${pkgPath}/Xrikis/es/src`))
}
```
核心思想就是将所有组件的样式文件交给`gulp`处理并且将处理后的文件输出到对应的组件目录即可。

最后一步。由于`Vite`修改配置后不会处理`less`文件，所以对于类似
```ts
import "./src/**.less"
```
一类的代码`Vite`会直接略过，这样会使组件样式丢失。所以需要将所有的引入`less`文件的代码改成引入`gulp`处理之后的`css`文件，
办法是在`vite`的插件配置中，在输出最终产物之前利用钩子函数修改产物代码
```ts
plugin: [
    {
        name: "style",
        generateBundle(config, bundle) {
            //这里可以获取打包后的文件目录以及代码code
            const keys = Object.keys(bundle)

            for (const key of keys) {
                const bundler: any = bundle[key as any];
                //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件
                this.emitFile({
                    type: "asset",
                    fileName: key, //文件名名不变
                    source: bundler.code.replace(/\.less/g, ".css"),
                })
            }
        },
    },
]
```

`gulp`除了用于打包样式文件，自身还是非常优秀的流程控制工具。本项目还借助其实现了：自动删除上一次构建的代码、
并行构建组件源码和样式等功能。


