(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{518:function(t,e,a){"use strict";a.r(e);var s=a(2),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"nosql类型数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nosql类型数据库"}},[t._v("#")]),t._v(" NoSQL类型数据库")]),t._v(" "),e("p",[t._v("以MySQL为代表的关系型数据库采用表格的形式组织数据。表格有行和列，要求数据项拥有固定的属性。而MongoDB则是NoSQL类型的数据，采用 "),e("strong",[t._v("文档（Document）")]),t._v(" 和 "),e("strong",[t._v("集合（Collection）")]),t._v(" 的方式组织数据，文档可以类比于SQL中的一个数据项，集合则类比于SQL中的表格。文档和数据项最大的区别在于文档中的属性更加自由，不需要像SQL一样需要遵守表格定义的列。")]),t._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("p",[t._v("前往"),e("a",{attrs:{href:"https://www.mongodb.com/docs/manual/installation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装MongoDB"),e("OutboundLink")],1),t._v("和"),e("a",{attrs:{href:"https://www.mongodb.com/docs/mongodb-shell/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装Mongosh"),e("OutboundLink")],1),t._v("，按照提示安装完成后，打开命令行工具，输入")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("mongosh\n")])])]),e("p",[t._v("如果看见MongoDB和Mongosh的版本号则说明连接成功。")]),t._v(" "),e("h2",{attrs:{id:"基础命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础命令"}},[t._v("#")]),t._v(" 基础命令")]),t._v(" "),e("p",[t._v("成功连接到MongoDB会，会默认连接到一个名为test的数据库。在正式对数据库进行操作之前，首先记住一些常见命令：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("命令")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("作用")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("mongosh")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("连接到MongoDB实例，所有操作都是在这个命令生效之后的")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("show dbs")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("展示当前实例中所有的数据库")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("use databaseName")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("使用指定名称的数据库，如果数据库不存在时会自动创建")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("db")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("展示当前数据库的名字")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("show collections")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("展示当前数据库中的所有集合")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("db.DropDatabase()")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("删除当前数据库")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("exit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("关闭和当前实例的连接")])])])]),t._v(" "),e("h2",{attrs:{id:"创建数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建数据"}},[t._v("#")]),t._v(" 创建数据")]),t._v(" "),e("p",[t._v("假设我们希望在appdb这个数据库的user集合中创建新的数据，可以顺序数据以下命令")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("use appdb\ndb.user.insertOne"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Kyle'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("如果希望一次性创建多个数据，可以使用"),e("code",[t._v("insertMany")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("db.user.insertMany"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Jack'")]),t._v(", age: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Rose'")]),t._v(", age: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v(", hobbies: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Running'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("可以发现的一个特点是，创建的数据所拥有的属性是非常自由的，设置还可以存在嵌套，这正是MongoDB最大的特点之一。")]),t._v(" "),e("h2",{attrs:{id:"读取数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#读取数据"}},[t._v("#")]),t._v(" 读取数据")]),t._v(" "),e("h3",{attrs:{id:"展示一个集合中的所有数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#展示一个集合中的所有数据"}},[t._v("#")]),t._v(" 展示一个集合中的所有数据")]),t._v(" "),e("p",[e("code",[t._v("find")]),t._v("用于将一个集合中的所有数据进行展示")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("db.user.find"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("如果只需要一个文档，也可以使用"),e("code",[t._v("findOne")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"按条件筛选"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#按条件筛选"}},[t._v("#")]),t._v(" 按条件筛选")]),t._v(" "),e("p",[t._v("一般情况下并不会直接展示所有数据，而是按照某些条件对数据进行筛选。在SQL中是WHERE来实现，而在MongoDB中则可以直接通过将筛选条件作为参数传递给"),e("code",[t._v("find")]),t._v("来实现。")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("db.user.find"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Kyle'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("这一段命令的意思是找到user集合中name属性为Kyle的所有文档。一般以"),e("code",[t._v("find(<filterObject>)")]),t._v("的形式来编写。")]),t._v(" "),e("p",[t._v("SQL中还有一种比较方便的读取数据形式，可以通过SELECT来指定筛选出的数据的特点属性。比如如果只需要筛选出的所有文档的年龄，则可以采用"),e("code",[t._v("find(<filterObject>, <selectObject>)")]),t._v("的方式进行编写")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("db.user.find"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Kyle'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" age: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndb.user.find"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" age: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("第一行表示找到所有name为Kyle的文档并且只保留age属性（id一般情况还是会默认返回）。第二行的意思是读取所有文档，但是去除所有文档的age属性。不难发现，在"),e("code",[t._v("selectObject")]),t._v("中通过属性值的0和1就可以实现SELECT一样读取指定列数据的功能。")]),t._v(" "),e("h3",{attrs:{id:"计数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#计数"}},[t._v("#")]),t._v(" 计数")]),t._v(" "),e("p",[t._v("类似"),e("code",[t._v("COUNT")]),t._v("聚合函数一样，MongoDB也可以实现对满足条件的文档进行计数：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("db.user.countDocuments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Kyle'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"更新数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新数据"}},[t._v("#")]),t._v(" 更新数据")]),t._v(" "),e("p",[t._v("和SQL中一样，更新数据也是先找到需要更新数据的文档，然后指定需要更新的属性以及新的属性值。MongoDB中主要使用"),e("code",[t._v("updateOne")]),t._v("和"),e("code",[t._v("updateMany")]),t._v("来实现：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("db.user.updateOne"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" age: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$set")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" age: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndb.user.update"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" age: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$inc")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" age: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("第一个参数是筛选条件，第二个参数则是更新方法。"),e("code",[t._v("$set")]),t._v(" 和"),e("code",[t._v("$inc")]),t._v("这样的称为复杂更新对象方法，后面会详细介绍。")]),t._v(" "),e("p",[t._v("更新数据还有类似"),e("code",[t._v("relaceOne")]),t._v("这样直接替代原有项的办法，但是不推荐使用")]),t._v(" "),e("h2",{attrs:{id:"删除数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除数据"}},[t._v("#")]),t._v(" 删除数据")]),t._v(" "),e("p",[t._v("删除数据使用"),e("code",[t._v("deleteOne")]),t._v("和"),e("code",[t._v("deleteMany")]),t._v("，使用方法和前面类似。输入筛选条件后进行删除即可。")]),t._v(" "),e("h2",{attrs:{id:"复杂更新对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复杂更新对象"}},[t._v("#")]),t._v(" 复杂更新对象")]),t._v(" "),e("p",[t._v("MongoDB内置的一些方法，可以实现更加复杂的数据更新操作。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("更新对象")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("作用")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("$set")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("db.users.updateOne({ age: 12 }, { $set: { name: “Hi” } })")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("指定需要更新的属性以及新的属性值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("$inc")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("db.users.updateOne({ age: 12 }, { $inc: { age: 2 } })")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("在原有数据的基础上增加的值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("$rename")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("db.users.updateMany({}, {$rename: { age: “years” } })")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("更改某一个属性的属性名")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("$unset")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("db.users.updateOne({ age: 12 }, { $unset: { age: “” } })")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("移除指定的属性")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("$pull")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("db.users.updateMany({}, { $pull: { friends: “Mike” } })")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("删除属性值为数组的属性中的某一个值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("$push")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("db.users.updateMany({}, { $push: { friends: “John” } })")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("向属性值为数组的属性中添加新数据")])])])]),t._v(" "),e("h2",{attrs:{id:"复杂筛选对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复杂筛选对象"}},[t._v("#")]),t._v(" 复杂筛选对象")]),t._v(" "),e("p",[t._v("上面提到的一些简单的筛选方法还不足以满足基本的使用需求，搭配下表所列的一些复杂筛选对象，能够实现更多的操作。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("筛选对象")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("作用")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("$eq")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("db.users.find({ name: { $eq: 'Kyle' } })")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("筛选具有对应属性值的文档")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("$ne")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("db.users.find({ name: { $ne: 'Kyle' } })")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("筛选不具有对应属性值的文档")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("$gt/$gte")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("db.users.find({ age: { $gt: 15 } })")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("筛选对应属性值大于/大于等于指定值的文档")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("$lt/lte")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("db.users.find({ age: { $lt: 30 }})")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("筛选对应属性值小于/小于等于指定值的文档")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("$in")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("db.users.find({ name: { $in: ['Kyle', 'Mike'] } })")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("筛选属性值被包含在指定数组中的文档")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("$nin")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("db.users.find({ name: { $nin: ['Kyle', 'Mike'] } })")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("筛选属性值被不包含在指定数组中的文档")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("$and")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("db.users.find({ $and: [{ age: 12 }, { name: “Kyle” }] })")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("筛选同时符合多个条件的文档")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("$or")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("db.users.find({ $or: [{ age: 12 }, { name: “Kyle” }] })")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("筛选符合多个条件中一个的所有文档")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("$not")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("db.users.find({ name: { $not: { $eq: “Kyle” } } })")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("筛选不符合给定条件的文档")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("$exists")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("db.users.find({ name: { $exists: true } })")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("筛选存在某一个特定属性的文档")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("$expr")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("db.users.find({ $expr: { $gt: [“$balance”, “$debt”] } })")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("对同一文档的属性作比较并设定筛选条件")])])])]),t._v(" "),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),e("p",[t._v("本文所写的内容参考视频"),e("a",{attrs:{href:"https://www.youtube.com/watch?v=ofme2o29ngU&t=1515s",target:"_blank",rel:"noopener noreferrer"}},[t._v("Learn MongoDB in 30 minutes"),e("OutboundLink")],1),t._v("，对于不了解后端知识的前端开发者而言可以作为一个快速入门教程，但还是建议先看看SQL相关的知识。关于MongoDB指令的快速查找清单可以参考"),e("a",{attrs:{href:"https://webdevsimplified.com/mongodb-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB Cheat Sheet"),e("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);e.default=n.exports}}]);