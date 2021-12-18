import store from './store.js';

export default function TodoProgress(props) {
    return {
        get progress() {
            const completed = store.todos.filter(row => row.completed);

            if (completed.length === 0) return 0;

            return (completed.length / store.todos.length) * 100;
        }
    }
}