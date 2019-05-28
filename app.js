var app = new Vue({
    el: "#app",
    data: {
        title: "This is a title!",
        body: "This is a body!"
    }
})

var app2 = new Vue({
    el: "#app2",
    data: {
        message : "This is created at " + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: "#app3",
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: "#app4",
    data: {
        todos: [
            {text : "This is Javascript"},
            {text : "This is Vue.JS"},
            {text : "This is awesome"}
        ]
    }
})

var app5 = new Vue({
    el: "#app5",
    data: {
        message : "Welcome to Vue.JS!"
    },
    methods:{
        revMsg: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: "#app6",
    data: {
        message : "Hello, Vue!"
    }
})

Vue.component("todo-item",  {
    props: ["todo"] ,
    template: "<li>{{ todo.text }}</li>"
})

var app7 = new Vue({
    el: "#app7",
    data:   {
        groceryList: [
            {id: 0, text: 'Vegetables'},
            {id: 1, text: 'Cheese'},
            {id: 2, text: 'Whatever else humans are supposed to eat'}
        ]
    }
})