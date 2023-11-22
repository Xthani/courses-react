import { Link, useNavigate } from 'react-router-dom';

function Header () {
    const navigate = useNavigate();
    const onLink = () => {
        navigate('/posts');
    }
    return (
        <ul style={{display: 'flex', gap: '25px'}}>
            <li>
                <Link to={'/'}>
                    Главная    
                </Link>
            </li>
            <li>
                <Link to={'/todo-list'}>
                    Todo list
                </Link>
            </li>
            <li>
                <a href="http://localhost:3000/user-list">
                    User list
                </a>
            </li>
            <li>
                <button onClick={onLink}>
                    Посты
                </button>
            </li>
            <li>
                <Link to={'count'}>
                    Count
                </Link>
            </li>
            <li>
                <Link to={'add-task'}>
                    Непонятная страница
                </Link>
            </li>
        </ul>
    );
}

export default Header;