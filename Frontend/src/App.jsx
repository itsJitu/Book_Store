import { useState } from "react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LogIn from './Component/logIn';
import Ebook from './Component/ebook';
import Home from './Component/home';
import First from './Component/first';
import SigIn from './Component/sigIn'

const router = createBrowserRouter([
  {
    path: '/',
    element: <First />,
    children: [
      {
        index: true,
        element: <LogIn />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/ebook',
        element: <Ebook />
      },
      {
        path: '/sigin',
        element: <SigIn />
      }
    ]
  }
]);


function App() {

  return <RouterProvider router={router} />

}
export default App
