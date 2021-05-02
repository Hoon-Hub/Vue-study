const vm = new Vue({
    el: '#app',
    data: {
        toggle: false,
        message: ''
    },
    methods: {
        toggleElement () {
            this.toggle = !this.toggle 
        }
    }
})