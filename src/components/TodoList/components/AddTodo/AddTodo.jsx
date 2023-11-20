import { useDispatch } from "react-redux";
import { util } from "../../../../utils/index";
import s from "./styles.module.css";
import { addTodo, editTodo } from '../../../../store/actions';

function AddTodo ({
        title,
        setTitle,
        descriprion,
        setDescriprion,
        editableTask,
        setEditableTask,
    }) {
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        const todo = util(e.target);
        if (!todo.title || !todo.descriprion) {
            alert('Все поля обязательны для заполения!');
            return;
        };

        if (editableTask) {
            dispatch(editTodo({...todo, id: editableTask.id}));
            setEditableTask(null);
        } else {
            dispatch(addTodo({...todo, id: Math.random()}));
        }

        setTitle('');
        setDescriprion('');
    }

    return (
        <form className={s.todoForm} onSubmit={onSubmit}>
                <label>
                    <span className={s.label}>Название задачи</span>
                    <br />
                    <input
                        className={s.input}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        name="title"
                        type="text"
                    />
                </label>
                <label>
                    <span className={s.label}>Описание задачи</span>
                    <br />
                    <input
                        className={s.input}
                        value={descriprion}
                        onChange={(e) => setDescriprion(e.target.value)}
                        name="descriprion"
                        type="text"
                    />
                </label>
                <button className={editableTask ? s.editTodo : s.addTodo}>{editableTask ? 'Сохранить' : 'Добавить'}</button>
            </form>
    );
}

export default AddTodo;