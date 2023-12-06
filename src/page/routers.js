import { createBrowserRouter } from "react-router-dom";
import PostsPage from '../page/PostsPage/index'
import Header from "../components/Header";
import UsersContainer from "../containers/UsersContainer";

const router = createBrowserRouter([
    {
      path: '/',
      element: <>
        <Header/>
        <PostsPage/>
      </>
    },
    {
      path: '/users',
      element: <>
      <Header/>
      <UsersContainer/>
    </>
    },
    {
      path: '/photos',
      element: <>
      <Header/>
      <div>photos</div>
    </>
    },
  ]);

  export { router };