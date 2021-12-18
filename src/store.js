const { reactive } = window.PetiteVue;
const updateStorage = (todos) => localStorage['petiteVueTodos'] = JSON.stringify(todos);
let todos = [];

if (localStorage['petiteVueTodos']) {
    try {
        todos = JSON.parse(localStorage['petiteVueTodos']);
    } catch(e) {

    }
}

const store = reactive({
    todos,
    addTodo(todo) {
        todo.id = this.todos.length + 1;
        this.todos.push(todo);

        updateStorage(todos);
    },
    removeTodo(index) {
        this.todos.splice(index, 1);

        updateStorage(todos);
    },
    updateTodo(index, todo) {
        this.todos[index] = todo;

        updateStorage(todos);
    }
})

export default store;