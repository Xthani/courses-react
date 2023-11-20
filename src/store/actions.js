function addTodo (todo) {
    return {
        type: 'ADD_TODO',
        payload: todo,
    }
}

function deleteTodo (id) {
    return {
        type: 'DELETE_TODO',
        payload: id,
    }
}

function editTodo (todo) {
    return {
        type: 'EDIT_TODO',
        payload: todo,
        // объект todo внутри объекта action
        // payload: {
        //     title: 'asdfsadf',
        //     description: 'sdfasdf',
        //     id: 'asfd'
        // },
    }
}

export { addTodo, deleteTodo, editTodo };