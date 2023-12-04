import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const navList = [
    {
        key: '/',
        label: 'Посты'
    },
    {
        key: '/users',
        label: 'Пользователи'
    },
    {
        key: '/photos',
        label: 'Карточки'
    },
];

const Header = () => {
    const navigate = useNavigate()

    const onClick = (e) => {
        navigate(e.key);
    }

    return (
        <Layout>
        <Layout.Header style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
            <div style={{color: '#fff'}}>LOGO</div>
            <Menu onClick={onClick}
                defaultSelectedKeys={['1']}
                theme="dark"
                mode='horizontal'
                items={navList}
            />
        </Layout.Header>
        </Layout>
    );
}

export default Header