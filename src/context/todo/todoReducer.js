import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../types";

const handlers = {
    [ADD_TODO]: (state, { title }) => ({
        ...state, 
        todos: [
            ...state.todos, {                
                id: Date.now().toString(),
                title
            }
        ]
    }),
    [UPDATE_TODO]: (state, { id, title }) => ({
        ...state, 
        todos: state.todos.map(todo => {
            if(todo.id === id){
                todo.title = title;
            }
            return todo;
        })
    }),
    [REMOVE_TODO]: (state, { id }) => ({
        ...state, 
        todos: state.todos.filter(todo => todo.id !== id)
    }),
    DEFAULT: state => state
}

export default todoReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}