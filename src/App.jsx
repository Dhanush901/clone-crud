import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Users from './pages/Users'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './layouts/Navbar'
import CreateCourse from './courses/CreateCourse'
import Singlecourse from './courses/Singlecourse'
import UpdateCourse from './courses/UpdateCourse'

const App = () => {
  let router = createBrowserRouter([
    {
      path:"/",
      element:<Navbar />,
      children:[
        {
          index:true,
          element:<Homepage />
         },  
      {
       path:"/users",
       element:<Users />
      },
      {
       path:":id",
       element:<Singlecourse />
      },
     
      {
        path:"/createcourse",
        element:<CreateCourse />
       },
      {
        path:"/login",
        element:<Login />
       },
       {
        path:"/signup",
        element:<Register />
       },
       {
        path:"/updatecourse/:id",
        element:<UpdateCourse />
       },

    ]


    }
  ])
  return (
    <div>
<RouterProvider router={router} >
<Navbar />
</RouterProvider>
    </div>
  )
}

export default App