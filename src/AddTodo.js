import store from './store.js';

export default function AddTodo(props) {
    return {
        newContent: '',
        addTodo() {
            if (this.newContent.trim().length === 0) return;

            store.addTodo({ 
                content: this.newContent,
                completed: false,
            });
            this.newContent = '';
        }
    }
}