import { useCallback, useEffect, useMemo, useState } from "react";

import AddTodo from "./components/AddTodo/AddTodo";
import List from "./components/List/List";

function TodoList () {
    const [tasks, setTasks] = useState([]);

    const [editableTask, setEditableTask] = useState(null);

    const [title, setTitle] = useState('');
    const [descriprion, setDescriprion] = useState('');

    useEffect(() => {
        // console.log(tasks, 'useEffect');
    }, [tasks]);

    // пример useMemo
    const memo = useMemo(() => {
        const result = tasks.sort((a, b) => a.title - b.title);
        return result;
    }, [tasks]);
    const sortTask = () => {
        const result = tasks.sort((a, b) => a.title - b.title);
        return result;
    }
    let sortTasks = sortTask();

    const deleteTask = useCallback((id) => {
        console.log(tasks, 'deleteTask');
        setTasks((prev) => prev.filter((task) => task.id !== id));
    }, []);

    const editTask = useCallback((task) => {
        const { title, descriprion } = task;
        setTitle(title);
        setDescriprion(descriprion);
        setEditableTask(task);
    }, []);

    console.log('TodoList');


    return (
        <>
            <AddTodo
                title={title}
                setTitle={setTitle}
                descriprion={descriprion}
                setDescriprion={setDescriprion}
                editableTask={editableTask}
                setEditableTask={setEditableTask}
                setTasks={setTasks}
            />
            <List
                memo={sortTasks}
                tasks={tasks}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        </>
    );
}

export default TodoList;