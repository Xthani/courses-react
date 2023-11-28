import AddTodo from "./components/AddTodo/AddTodo";
import List from "./components/List/List";

function TodoList ({
    title,
    setTitle,
    descriprion,
    setDescriprion,
    editableTask,
    setEditableTask,
    deleteTask,
    editTask,
    onDone,
}) {
    return (
        <>
            <AddTodo
                title={title}
                setTitle={setTitle}
                descriprion={descriprion}
                setDescriprion={setDescriprion}
                editableTask={editableTask}
                setEditableTask={setEditableTask}
            />
            <List
                deleteTask={deleteTask}
                editTask={editTask}
                onDone={onDone}
            />
        </>
    );
}

export default TodoList;