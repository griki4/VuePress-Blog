(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{534:function(v,_,t){"use strict";t.r(_);var d=t(2),e=Object(d.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("为了避免出现一旦DOM出现更新，就把原来的DOM全部卸载，重新渲染一个新的DOM导致的巨大性能消耗，会使用Diff算法寻找可复用的DOM节点")]),v._v(" "),_("h1",{attrs:{id:"简单diff"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简单diff"}},[v._v("#")]),v._v(" 简单Diff")]),v._v(" "),_("h2",{attrs:{id:"寻找可复用dom节点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#寻找可复用dom节点"}},[v._v("#")]),v._v(" 寻找可复用DOM节点")]),v._v(" "),_("p",[v._v("简单Diff算法寻找可复用的DOM节点并且移动节点的方式很简单。既然新的虚拟的DOM就是更新后真实DOM节点的顺序，直接遍历新的虚拟DOM即可。")]),v._v(" "),_("p",[v._v("首先遍历新的虚拟DOM节点，通过key在旧的虚拟DOM中寻找可复用的节点，并记录当前DOM节点在旧的虚拟DOM中的索引"),_("code",[v._v("lastIndex")]),v._v("。然后遍历下一个节点，同样找到该节点的"),_("code",[v._v("lastIndex")]),v._v("，如果\n该节点的"),_("code",[v._v("lastIndex")]),v._v("的值大于上一个节点，说明当前DOM节点不需要进行移动，更新"),_("code",[v._v("lastIndex")]),v._v("的值即可；如果该节点的"),_("code",[v._v("lastIndex")]),v._v("的值小于上一个节点，说明在新旧DOM中两个节点的顺序发生了变化，\n将当前遍历到的虚拟DOM节点对应的真实DOM移动到上一个节点之后，因为"),_("strong",[v._v("新的虚拟的DOM就是更新后真实DOM节点的顺序")]),v._v("。")]),v._v(" "),_("h2",{attrs:{id:"新增节点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新增节点"}},[v._v("#")]),v._v(" 新增节点")]),v._v(" "),_("p",[v._v("新增节点的时候，在新的虚拟DOM中会出现通过key无法在旧虚拟DOM中可复用节点的情况，此时直接挂载这个新的节点即可。")]),v._v(" "),_("h2",{attrs:{id:"删除节点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#删除节点"}},[v._v("#")]),v._v(" 删除节点")]),v._v(" "),_("p",[v._v("在遍历完新的虚拟DOM之后，还需要遍历一遍旧的虚拟DOM，将剩余的不能复用的节点进行删除。")]),v._v(" "),_("h1",{attrs:{id:"双端diff"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#双端diff"}},[v._v("#")]),v._v(" 双端Diff")]),v._v(" "),_("p",[v._v("简单Diff在应对某些情况的时候会出现不必要的DOM移动操作，双端Diff针对其进行改进。")]),v._v(" "),_("h2",{attrs:{id:"寻找可复用dom节点-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#寻找可复用dom节点-2"}},[v._v("#")]),v._v(" 寻找可复用DOM节点")]),v._v(" "),_("p",[_("code",[v._v("newStart newEnd oldStart oldEnd")]),v._v("四个指针分别指向新旧虚拟DOM节点序列的头和尾部，按照如下顺序进行对比。")]),v._v(" "),_("ol",[_("li",[_("code",[v._v("newStart oldStart")]),v._v("相同说明头结点不用移动，两个指针同步向下移动。")]),v._v(" "),_("li",[_("code",[v._v("newEnd oldEnd")]),v._v("相同说明尾结点不用移动，两个指针同步向上移动。")]),v._v(" "),_("li",[_("code",[v._v("newEnd oldStart")]),v._v("相同说明原来的头结点被移动到了尾部，"),_("code",[v._v("newEnd")]),v._v("上移，"),_("code",[v._v("oldStart")]),v._v("下移。")]),v._v(" "),_("li",[_("code",[v._v("newStart oldEnd")]),v._v("相同说明原来的尾部节点现在被移动到了头部，"),_("code",[v._v("oldEnd")]),v._v("上移，"),_("code",[v._v("newStart")]),v._v("下移。")])]),v._v(" "),_("p",[v._v("以上是理想情况，如果都没有匹配成功，则会拿着"),_("code",[v._v("newStart")]),v._v("对应的DOM节点去旧的一组虚拟DOM中寻找可复用DOM并将真实DOM移动到头部，然后在旧的一组虚拟DOM中将这个节点定义为"),_("code",[v._v("undefined")]),v._v("。")]),v._v(" "),_("h2",{attrs:{id:"新增节点-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新增节点-2"}},[v._v("#")]),v._v(" 新增节点")]),v._v(" "),_("p",[v._v("当"),_("code",[v._v("newEnd <= newStart")]),v._v("并且"),_("code",[v._v("oldEnd > oldStart")]),v._v("的时候，说明有一些新增的节点需要进行挂载，找到锚点后进行节点挂载即可。")]),v._v(" "),_("h2",{attrs:{id:"删除节点-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#删除节点-2"}},[v._v("#")]),v._v(" 删除节点")]),v._v(" "),_("p",[v._v("当"),_("code",[v._v("oldEnd <= oldStart")]),v._v("并且"),_("code",[v._v("newEnd > newStart")]),v._v("的时候说明有一些需要进行卸载的节点，从"),_("code",[v._v("oldStart")]),v._v("到"),_("code",[v._v("oldEnd")]),v._v("对所有的节点进行卸载操作即可。")]),v._v(" "),_("h1",{attrs:{id:"快速diff"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快速diff"}},[v._v("#")]),v._v(" 快速Diff")]),v._v(" "),_("p",[_("code",[v._v("Vue2")]),v._v("使用的就是上文所述的双端Diff，"),_("code",[v._v("Vue3")]),v._v("在借鉴了文本Diff的算法后，引入了快速Diff，相比双端Diff拥有更高的性能。")]),v._v(" "),_("h2",{attrs:{id:"相同的前置和后置节点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#相同的前置和后置节点"}},[v._v("#")]),v._v(" 相同的前置和后置节点")]),v._v(" "),_("p",[v._v("指针"),_("code",[v._v("j")]),v._v("指向新旧虚拟DOM的头部，"),_("code",[v._v("newEnd")]),v._v("指向新虚拟DOM的尾部，"),_("code",[v._v("oldEnd")]),v._v("指向旧虚拟DOM的尾部。不同于双端Diff，头部指针只会和头部对比，尾部也一样。")]),v._v(" "),_("p",[v._v("在理想情况下，会出现"),_("code",[v._v("j > newEnd")]),v._v("并且"),_("code",[v._v("j <= oldEnd")]),v._v("和"),_("code",[v._v("j > oldEnd")]),v._v("并且"),_("code",[v._v("j <= newEnd")]),v._v("两种情况。前者说明需要进行节点的删除，后者则说明需要进行新节点的挂载。但是一般情况下是，\n处理完相同的前置和后置节点之后，新旧虚拟DOM仍然有一系列节点需要处理。")]),v._v(" "),_("h2",{attrs:{id:"dom操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dom操作"}},[v._v("#")]),v._v(" DOM操作")]),v._v(" "),_("p",[v._v("构建一个"),_("code",[v._v("source")]),v._v("数组，默认填充-1，长度等同于未经处理的DOM节点数量。然后填充数组，填充内容为数组对应的DOM节点在旧的虚拟DOM中的位置索引，没有找到就使用默认值。")]),v._v(" "),_("p",[v._v("然后求得该数组的最长递增子序列"),_("code",[v._v("Seq")]),v._v("，该数组表示递增的元素在"),_("code",[v._v("source")]),v._v("数组中索引，递增序列表示这些节点的顺序不需要进行移动，保持原有的顺序即可。")]),v._v(" "),_("p",[_("code",[v._v("s i")]),v._v("两个指针分别指向"),_("code",[v._v("Seq")]),v._v("和新的虚拟DOM中未处理的节点的尾部，如果"),_("code",[v._v("i == Seq[s]")]),v._v("说明这个节点是递增子序列中的一个不需要移动，两个指针同时上移即可；如果不相同说明该节点需要进行移动，\n方法是通过"),_("code",[v._v("i + newStart")]),v._v("找到该节点的真实索引位置，使用"),_("code",[v._v("insert")]),v._v("进行挂载，因为那些不可复用的DOM节点在构建"),_("code",[v._v("source")]),v._v("数组的过程中已经被卸载了。")]),v._v(" "),_("p",[v._v("快速Diff的思路是借鉴文本Diff，快速处理相同的前置和后置节点。然后使用节点的索引关系构建递增子序列，快速找到不需要进行移动的DOM节点。")])])}),[],!1,null,null,null);_.default=e.exports}}]);