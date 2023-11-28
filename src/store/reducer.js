import { createStore } from "redux";
import { initialState } from "./initialState";

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todoList: state.todoList.filter((todo) => todo.id !== action.payload),
            };
        case 'EDIT_TODO':
            return {
                ...state,
                todoList: state.todoList.map((todo) => todo.id === action.payload.id ? action.payload : todo),
            };
        case 'ON_DONE': 
            return {
                ...state,
                todoList: state.todoList.map((todo) => todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo),
            };
        default: 
            return state
    }
}

export const store = createStore(todoReducer);