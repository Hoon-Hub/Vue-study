Vue.component('my-todo-item', {
    props: ['todo'],
    template: `<li>
        <label>
            <input type="checkbox" 
                v-model="todo.done" >
            <span v-bind:class="{ done:todo.done }">{{ todo.title }}</span>
        </label>
    </li>`
})

const vm = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                id:'1',
                title: '아침먹기',
                done: true
            },
            {
                id:'2',
                title: '점심먹기',
                done: false
            },
            {
                id:'3',
                title: '저녁먹기',
                done: false
            },
            {
                id:'4',
                title: '간식먹기',
                done: true
            },
            {
                id:'5',
                title: '야식먹기 굿',
                done: false
            }
        ],

        todos2: [
            {
                id: '6',
                title: '잠자기',
                done: true
            }
        ]
    }
})