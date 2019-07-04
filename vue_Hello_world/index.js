
Vue.component('todo-item',{
    template: '<li>this is a todo component</li>'
});

Vue.component('props-item',{
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello VUE!',
        seen: false,
        todos: [
            {text: 'Learn JavaScript'},
            {text: 'Learn Vue'},
            {text: 'Build something awesome'}
        ],
        groceryList: [
            {id: 1, text: 'Vegetables'},
            {id: 2, text: 'Cheese'},
            {id: 3, text: 'Whatever else human are supposed to eat'}
        ],
        show: true
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('');
        }
    }
});
//app.message = 'I have changed the data!';
app.seen = true;
app.todos.push({text: 'Learn Sea'});























