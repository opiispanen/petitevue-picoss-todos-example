import store from './store.js';
import AddTodo from './AddTodo.js';
import ListTodos from './ListTodos.js';
import TodoProgress from './TodoProgress.js';
const { createApp } = window.PetiteVue;

createApp({
    AddTodo,
    ListTodos,
    TodoProgress,
    init() {
        console.log('mounted')
    }
}).mount('#app')