# VUE 核心概念
> Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统
> 组件系统
> vue核心之虚拟DOM




#### 过渡




动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 XSS 攻击
`
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
`










