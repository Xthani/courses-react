import React from 'react';
import s from './styles.module.css'
import { useSelector } from 'react-redux';

    const List = React.memo(({
        deleteTask,
        editTask,
    }) => {
    const tasks = useSelector((state) => state.todoList);
    return (
        <ul className={s.list}>
            {tasks.map((task) => {
                const { id, title, descriprion } = task;
                return (
                    <li className={s.task} key={id}>
                        <h4 className={s.title}>{title}</h4>
                        <p className={s.descriprion}>{descriprion}</p>
                        <div className={s.btnWrapper}>
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