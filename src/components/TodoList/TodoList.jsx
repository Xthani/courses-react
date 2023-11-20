import { useCallback, useState } from "react";

import AddTodo from "./components/AddTodo/AddTodo";
import List from "./components/List/List";
import { useDispatch } from "react-redux";
import {deleteTodo} from '../../store/actions';

function TodoList () {
    const dispatch = useDispatch();

    // нужен для того чтобы отслеживать редактируемый объект
    const [editableTask, setEditableTask] = useState(null);

    // нужно для контролирование input
    const [title, setTitle] = useState('');
    const [descriprion, setDescriprion] = useState('');

    const deleteTask = useCallback((id) => {
        dispatch(deleteTodo(id));
    }, []);

    const editTask = useCallback((task) => {
        const { title, descriprion } = task;
        // записываем в input значения редактируемого объекта
        setTitle(title);
        setDescriprion(descriprion);
        
        // записываем в отдельный стейт объект редактируемой todo
        setEditableTask(task);
    }, []);

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
            />
        </>
    );
}

export default TodoList;