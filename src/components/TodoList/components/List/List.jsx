import React from 'react';
import s from './styles.module.css'
import { useSelector } from 'react-redux';

    const List = React.memo(({
        deleteTask,
        editTask,
        onDone,
    }) => {
    const tasks = useSelector((state) => state.todoList);
    return (
        <ul className={s.list}>
            {tasks.map((task) => {
                const { id, title, descriprion, isDone } = task;
                return (
                    <li className={isDone ? s.taskDone : s.task} key={id}>
                        <h4 className={s.title}>{title}</h4>
                        <p className={s.descriprion}>{descriprion}</p>
                        <div onClick={() => onDone(id)} className={s.btnWrapper}>
                            <button className={s.delete} onClick={() => deleteTask(id)}>Удалить</button>
                            <button className={s.edit} onClick={() => editTask(task)}>Редактировать</button>
                        </div>
                    </li>
                );
            })}
        </ul>
);
});

export default List;