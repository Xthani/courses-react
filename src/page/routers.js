import AddTask from "../components/AddTask/AddTask";
import Count from "../components/Count/Count";
import Posts from "../components/Posts/Posts";
import UserList from "../components/UserList/UserList";
import TodoListPage from './TodoListPage/TodoListPage';
import Header from "../components/Header/Header";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header/>
          <div>Главная страница где ничего нет</div>
        </>
      ),
    },
    {
      path: '/todo-list',
      element: (
        <>
          <Header/>
          <TodoListPage/>
        </>
      ),
    },
    {
      path: '/user-list',
      element: (
        <>
          <Header/>
          <UserList/>
        </>
      ),
    },
    {
      path: 'posts',
      element: (
        <>
          <Header/>
          <Posts/>
        </>
      ),
    },
    {
      path: '/count',
      element: (
        <>
          <Header/>
          <Count/>
        </>
      ),
    },
    {
      path: 'add-task',
      element: (
        <>
          <Header/>
          <AddTask/>
          <div>asdfsd</div>
        </>
      ),
    },
  ]);

  export { router };