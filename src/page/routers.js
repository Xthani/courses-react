import { createBrowserRouter } from "react-router-dom";
import PostsPage from '../page/PostsPage/index'
import Header from "../components/Header";

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
      <div>users</div>
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