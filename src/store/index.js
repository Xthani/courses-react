import { createStore } from "redux";

const inialState = {
    todoList: [],

    posts: [],
    users: [],
};

const todoReducer = (state = inialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };
        case 'DELETE_TODO':
            return {};
        default: 
            return state
    }
}

export function addTodo (todo) {
    return {
        type: 'ADD_TODO',
        payload: todo,
    }
}

export function deleteTodo (todo) {
    return {
        type: 'DELETE_TODO',
        payload: todo,
    }
}

export const store = createStore(todoReducer);
