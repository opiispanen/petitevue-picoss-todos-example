import store from './store.js';

export default function ListTodos(props) {
    return {
        store,
        updateTodo(index, todo) {
            store.updateTodo(index, todo);
        },
        removeTodo(index) {
            store.removeTodo(index);
        }
    }
}