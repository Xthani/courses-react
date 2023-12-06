import React from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from './page/routers'
import './global.scss'

function App() {
  return <RouterProvider router={router} />
};

export default App;
