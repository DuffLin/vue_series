# VUE 核心概念
> 组件是可复用的 Vue 实例
通过 new Vue 创建的 Vue 根实例中，把这个组件作为自定义元素来使用


## data 必须是一个函数

一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝：

```
data: function () {
  return {
    count: 0
  }
}
```
* 如果 Vue 没有这条规则，点击一个按钮就可能会影响到其它引入这个实例 *


## 组件的组织
为了能在模板中使用，这些组件必须先注册以便 Vue 能够识别。这里有两种组件的注册类型：全局注册和局部注册。
至此，我们的组件都只是通过 Vue.component 全局注册的


## 通过 Prop 向子组件传递数据

Prop 是你可以在组件上注册的一些自定义特性。当一个值传递给一个 prop 特性的时候，它就变成了那个组件实例的一个属性。为了给博文组件传递一个标题，我们可以用一个 props 选项将其包含在该组件可接受的 prop 列表中：
```
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
```

一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop。
在上述模板中，你会发现我们能够在组件实例中访问这个值，就像访问 data 中的值一样。

然而在一个典型的应用中，你可能在 data 里有一个博文的数组：
```
new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
  }
})
```
并想要为每篇博文渲染一个组件：
```
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:title="post.title"
></blog-post>
```

## 监听子组件时间 $emit
有的时候用一个事件来抛出一个特定的值是非常有用的

### 使用事件抛出一个值
当在父级组件监听这个事件的时候，我们可以通过 $event 访问到被抛出的这个值
或者，事件处理函数的方法
```
<button v-on:click="$emit('enlarge-text', 0.1)">
  Enlarge text
</button>

<blog-post
  ...
  v-on:enlarge-text="postFontSize += $event"
></blog-post>

<blog-post
  ...
  v-on:enlarge-text="onEnlargeText"
></blog-post>
methods: {
  onEnlargeText: function (enlargeAmount) {
    this.postFontSize += enlargeAmount
  }
}
```
### 在组件上使用 v-model

自定义事件也可以用于创建支持 v-model 的自定义输入组件。记住：
> <input v-model="searchText">
等于
> <input
    v-bind:value="searchText"
    v-on:input="searchText = $event.target.value"
  >

当用在组件上时，v-model 则会这样：
```

<custom-input
  v-bind:value="searchText"
  v-on:input="searchText = $event"
></custom-input>

```

## 通过插槽分发内容 v-slot 缩写字符 #
只要在需要的地方加入插槽就行了——就这么简单！
```
<alert-box>
  Something bad happened.
</alert-box>

Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})
```

## 在动态组件上使用 keep-alive



