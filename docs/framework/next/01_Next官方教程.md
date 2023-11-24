---
title: Next.js官方教程
---

## CSS 

Next.js支持使用TailwindCSS CSS-in-JS CSS Module等多种方式编写CSS代码。官方脚手架create-next-app内置了对于TailwindCSS的支持，可以在项目初始化阶段直接生成TailwindCSS相关的配置。

## 字体和图片优化

可以使用如下方式在Next.js中导入字体。在font.ts文件中定义字体
```tsx
import { Inter } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
```
然后在项目的app目录的layout.tsx文件中导入
```tsx
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
```
默认情况下，浏览器会先使用默认字体显示页面文字。在字体文件加载完毕后再使用对应的字体进行替换，由此引起的页面布局跳动带来用户体验不佳。
**Next.js能够在页面构建阶段下载字体资源，从而避免额外的网络请求 以及由于字体变化导致的布局跳动。**


在Next.js中使用图片，推荐使用内置的`<Image />`组件。属性基本和原生`<img />`元素一样，好处在于：

1. 避免布局跳动。
2. 能够根据设备屏幕大小自适应调整图片尺寸。
3. 默认懒加载图片，优化性能。
4. 根据浏览器的支持情况，提供更加现代化的图片格式，比如WebP或者AVIF等。

## Layout和Page

Layout文件是页面的布局文件，所有的页面组件都是在其中运行的。Page文件负责具体的页面内容和样式。

**默认情况下，同一个文件夹中page.tsx会被嵌入到layout.tsx中。** 这样做可以实现，当进行路由跳转时，Next.js只会对变化的部分进行重新渲染而不是重新渲染整个页面。

详细可参考 [partial rending](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#3-partial-rendering)

## 路由系统

Next.js构建了一套文件系统路由。简单的说，就是目录名即对应路由名。如下图所示
![Next.js的路由系统](../../assets/next-route.png)

/dashboard 路由对应的就是app目录下，dashboard目录中的文件对应的页面。嵌套路由只需要继续在dashboard目录下继续创建新的目录即可。
这样的路由系统省去了手动配置路由的工作，并且非常直观的展示了页面路由关系。

在不同路由间进行跳转时，推荐使用`<Link />`组件来进行，避免路由进行跳转时页面全部进行刷新。

```tsx
<Link
  key={link.name}
  href={link.href}
  className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
>
```

为了获取当前的路由参数，Next提供了一个新的hook，**usePathname**。在上面提到的dashboard页面中，usePathname获取到的就是/dashboard这个路径。
使用这个钩子并搭配动态样式，可以提示用户当前激活的路由是哪一个。

另一个新的hook，**useSearchParams**。在类似`/dashboard/invoices?page=1&query=pending`的URL中可以获取到类似`{page: '1', query: 'pending'}`这样的参数。
可以用于搜索组件等应用场景。

## 数据请求

Next中编写的React组件默认都是服务端组件，在服务端组件中请求数据然后再交由客户端组件进行处理是Next中一种常见的数据请求方式。
使用这样的方式请求数据有如下好处：

- 服务端组件可以直接运行在服务器中，一些比较耗费资源的数据请求和处理逻辑可以在服务端完成后，直接将结果交给客户端。
- 服务端组件可以直接使用`async/await`的方式编写数据请求逻辑。
- 运行在服务端的组件可以直接连接数据库，避免使用API中间层（使用API进行处理也是可行的）。

如果需要使用API来进行数据请求也可按照一下步骤，以axios为例：

1. 假设在组件中请求接口`axios.get('/api/list')`。
2. 在app目录下建立api目录，在api目录内部新建list目录。
3. 在list目录中新建route.ts文件，内部编写同名请求方法即可获取请求参数并返回响应。

同步请求方法的例子如下：
```ts
export default function GET(request: Request){}

export function POST(){}

export function DELETE(){}
```
axios调用的请求会到达对应的api目录下对应名字目录的route文件中函数，称为"Route Handler"。
在上述函数中可以编写与数据库进行交互的逻辑，并最终的结果使用`NextResponse.json()`的方式返回。

## Streaming流式传输

Next提出Streaming的概念将页面分割称为更小的`chunk`，每一个`chunk`的加载和渲染都是单独。流式传输可以针对一个页面也可以针对单个组件。

对于整个页面，可以在page.tsx的统一目录下编写loading.tsx组件。由于page.tsx中的内容会被自动嵌入到layout.tsx中，所以当存在loading.tsx的时候，
layout.tsx中的其他部分（不包含网络请求数据）会先渲染，page.tsx的区域会先展示loading.tsx的内容，等待page.tsx中的数据请求完毕之后再替换为page.tsx中的内容。

对于单个组件而言。首先，将组件所需的数据请求放到组件内部执行。然后使用如下方式替代组件
```tsx
<Suspense fallback={<MyComponentSkeleton />}>
    <MyComponent />
</Suspense>
```
`<MyComponent />`是原来的组件，使用Next中导入的`<Suspense />`来包裹它并传入`fallback`参数，参数内部是组件加载完毕之前展示内容。
可以编写骨架屏或者加载动画来实现。

**为什么需要使用Streaming?**

这个问题与使用服务端请求数据直接相关。试想，如果一个服务端组件中需要请求多个数据传递给子组件
````ts
const user = await getUser()
const list = await getList()
......
````
由于`async/await`的特性，后面的请求必须等待前面的请求执行完毕才能执行，由此可能导致页面加载时间过长。对此一个可能的解决办法是，
使用`Promise.all`同时发送多个请求。但是这样做也还是存在一个问题，那就是当多个请求中有一个请求速度比较慢的时候，会拖累整个请求的速度。
也即**Promise.all的请求的快慢实际上由速度最慢的那个请求来决定**。

所以，为了避免被速度慢的请求拖累，Streaming将各个组件的请求和渲染隔离。先请求完数据的组件或者页面可以先进行渲染，后请求完的数据并不会阻塞这些组件的渲染，
由此提升用户的使用体验，不必等待页面全部加载完成即可和部分页面进行交互。


## Server Action和表单

在Next中使用表单时，可以传入一个`action`属性，其值可以为一个函数，这个函数来自一个单独的文件，文件顶部有`use server`标识
表明该函数执行的是服务器操作。
```tsx
// form.tsx
'use client';
 
import { customerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice } from '@/app/lib/actions';
 
export default function Form({
  customers,
}: {
  customers: customerField[];
}) {
  return (
    <form action={createInvoice}>
    </form>
  )
}


// createInvoice
'use server';

export async function createInvoice(formData: FormData) {
    const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    };
    // Test it out:
    console.log(rawFormData);
}
```

本质上，服务器操作就是直接编写可以在服务端运行的异步代码，从而避免使用API作为与服务器沟通的中间层。Next为Server Action
提供了一系列的支持和优化，能够保证服务器数据的安全。

## 错误处理
在`page.tsx`的统一目录下编写`error.tsx`文件，页面加载出错时就会显示`error.tsx`文件中的内容，可以提供更加直观和人性化的错误提示。

如果是出现**404**错误，则还可以进一步在同一目录下编写`not-found.tsx`文件，出现资源不存在的错误时，会优先于`error.tsx`显示给用户。


