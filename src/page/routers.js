import { createBrowserRouter } from "react-router-dom";
import PostsPage from '../page/PostsPage/index'

const router = createBrowserRouter([
    {
      path: '/',
      element: <PostsPage/>
    },
    {
      path: '/users',
      element: <div>users</div>
    },
  ]);

  export { router };