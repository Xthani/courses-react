import { useCallback, useState } from "react";

import { useDispatch } from "react-redux";
import {deleteTodo, onDoneTodo} from '../../store/actions';
import TodoList from "../../components/TodoList/TodoList";

function TodoListContainer () {
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

    const onDone = useCallback((id) => {
        dispatch(onDoneTodo(id));
    }, []);

    return <TodoList
                title={title}
                setTitle={setTitle}
                descriprion={descriprion}
                setDescriprion={setDescriprion}
                editableTask={editableTask}
                setEditableTask={setEditableTask}
                deleteTask={deleteTask}
                editTask={editTask}
                onDone={onDone}
            />
}

export default TodoListContainer;