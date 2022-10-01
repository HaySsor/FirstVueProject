const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            inputTask: '',
            hidden: true,
        }
    },
    computed: {
        buttonText() {
            return this.hidden ? 'Hide' : 'Show'
        }
    },

    methods: {
        addTask() {
            if (this.inputTask.trim().length === 0) {
                return
            }
            this.tasks.push(this.inputTask)
            this.inputTask = ''
        },
        toggleHiddenList() {
            this.hidden = !this.hidden
        }
    },
}).mount('#assignment')