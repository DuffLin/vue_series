/* Vue 组件*/
Vue.component('nav-bar',{/*注册一个vue实例组件*/
    name:'nav-bar',
    data: function(){
        return {
            message: '我是一个组件nav-bar'
        }
    },
    template: '<button>{{message}}</button>'
});


var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello VUE!'
    }
});









































