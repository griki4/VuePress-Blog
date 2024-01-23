---
br
---
这里记录了自己学习TypeScript的时候一些比较难以理解的概念，需要学习TypeScript请参考更加权威的教程。

## 函数重载

函数重载（Function Overloading）是指在一个函数名下定义多个函数签名，使得函数能够根据传入的参数类型或数量的不同来选择相应的函数实现。通过函数重载，可以提供更灵活的函数调用方式，增强代码的可读性和可维护性。

```ts
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: any, y: any): any {
    return x + y;
}
```

上面的函数在传入参数都是数字时返回数字，都是字符串的时候返回字符串。在最后定义了一个实际的函数书写内部逻辑。**使用同一个函数名，但是参数不同**就是函数重载的核心。

## 联合类型和交叉类型

联合类型表示一个值可以是联合类型中的任意一个类型的值：

```ts
let id: string | number = '1'
id = 1
```

交叉类型常用于定义对象，表示一个对象同时包含多个接口定义的属性，**可以将交叉类型理解为两个类型的并集**：

```ts
interface Printable {
  print(): void;
}

interface Loggable {
  log(): void;
}

function printAndLog(obj: Printable & Loggable) {
  obj.print();
  obj.log();
}

const obj = {
  print() {
    console.log("Printable");
  },
  log() {
    console.log("Loggable");
  },
};

printAndLog(obj);  // 输出：Printable Loggable
```

## Type与Interface

type和interface都可以用于定义对象的接口，不过type的定义更像是一种别名，实际上定义别名也正是type最重要的作用。

```ts
// 定义类型别名
type str = string
let s:str = "我是小满"
// 定义值别名
type value = boolean | 0 | '213'
let t:value = true
//变量t的值  只能是上面value定义的值
```

两者主要的不同：

1. interface可以继承，type只能通过联合类型或者交叉类型进行扩展。
2. 遇到重名的情况，interface会进行合并但是type不可以。

## 泛型

泛型可以理解为现在我不知道这个地方要使用的具体是什么类型，但是当我传入一个具体类型数据的时候，使用了泛型的地方的类型都要跟传入的这个数据的类型一致。

### 函数泛型

比如说一个反转数组的函数，当我们不确定数组中的元素是什么类型的时候就可以使用泛型：

```ts
function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverse(numbers);
console.log(reversedNumbers); // 输出：[5, 4, 3, 2, 1]

const strings = ["hello", "world"];
const reversedStrings = reverse(strings);
console.log(reversedStrings); // 输出：["world", "hello"]
```

### 泛型约束

假设目前我们定义了一个获取参数length属性的函数：

```ts
function getLength <T>(arg: T){
    return arg.length
}
```

这个函数是会报错的，因为传入该函数的参数有些时候可能并没有length属性，为了解决这个问题，我们采用**泛型约束**，要求传入的参数必须具备length属性：

```ts
interface Len {
    length: number
}

function getLength <T extends Len>(args: T) {
    return args.length
}
```

这样当传入的参数没有length属性的时候，在代码编辑阶段就会给我警告。

### keyof

keyof关键字用于获取一个类型的所有属性名组成的联合类型，搭配泛型约束可以严格约束某个参数的值只会是指定类型的属性名中的一个，例如：

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const person = {
  name: "John",
  age: 30,
};

const name = getProperty(person, "name"); // 类型为 string
const age = getProperty(person, "age"); // 类型为 number
const invalid = getProperty(person, "invalid"); // 编译错误，"invalid" 不是 person 的属性名
```

上面的例子中, key参数的类型被定义为泛型K，泛型K被约束为只能是T类型的所有属性名中的一个。在这里的作用就是，key参数的值只能是name或者age，不能是其他值。

### 泛型类

泛型还可以用于定义类：

```ts
class Sub<T>{
   attr: T[] = [];
   add (a:T):T[] {
      return [a]
   }
}
```

## 声明文件

以.d.ts结尾的文件被称为类型声明文件，用于提供代码补全和接口提示等功能。

在使用一些第三方库的时候，有些第三方库没有提供官方的类型声明文件，为了获得更好的代码提示和类型检查，需要手动编写声明文件，例如：

```ts
// express的类型声明文件
declare module 'express' {
    interface Router {
        get(path: string, cb: (req: any, res: any) => void): void
    }
    interface App {
        use(path: string, router: any): void
        listen(port: number, cb?: () => void): void
    }
    interface Express {
        (): App
        Router(): Router
    }
    const express: Express
    export default express
}
```

## 泛型工具

### Partial和Required

Partial用于将一个类型的所有属性变为可选类型，Required则将一个类型的所有属性变为必选类型。

### Pick和Exclude

Pick用于从一个类型中选取指定的属性：

```ts
interface User {
    name?: string;
    age?: number;
}

type test = Pick<User,'age'>
 
//结果
type test = {
    age?: number | undefined;
}
```

Exclude用于排除类型中的某个属性：

```ts
type test = Exclude<'a' | 'b' | 'c', 'a' | 'b'>
 
//结果
 
type test = "c"
```

### Omit

Omit的作用是基于已有类型创建一个新的类型，同时可以指定从原始类型中排除掉一些属性：

```ts
interface User {
    address?: string;
    name?: string;
    age?: number;
}

type test = Omit<User,'age'>
 
//结果 
type test = {
    address?: string | undefined;
    name?: string | undefined;
}
```

### Record

用于创建拥有指定类型的键和值的对象：

```ts
// 创建一个具有字符串键和数字值的对象
const obj1: Record<string, number> = {
  a: 1,
  b: 2,
  c: 3,
};

// 创建一个具有数字键和字符串值的对象
const obj2: Record<number, string> = {
  1: 'one',
  2: 'two',
  3: 'three',
};

// 创建一个具有联合类型键和布尔值的对象
const obj3: Record<'a' | 'b' | 'c', boolean> = {
  a: true,
  b: false,
  c: true,
};

// 创建一个具有数字字面量类型键和对象值的对象
const obj4: Record<1 | 2, { name: string }> = {
  1: { name: 'Alice' },
  2: { name: 'Bob' },
};
```

### ReturnType

ReturnType用于获取函数返回值的类型：

```ts
function add(a: number, b: number): number {
  return a + b;
}

type AddReturnType = ReturnType<typeof add>; // number

function greet(name: string): string {
  return `Hello, ${name}!`;
}

type GreetReturnType = ReturnType<typeof greet>; // string
```
