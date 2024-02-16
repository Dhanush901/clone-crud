import React from 'react'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
   <section id='menucontainer'>
   
    <ul>
      <li>
       <Link to="/">home</Link>
      </li>
      <li>
       <Link to="/users">users</Link>
      </li>
      <li>
       <Link to="/createcourse">CreateCourse</Link>
      </li>
      
      <li>
       <Link to="/signup">register</Link>
      </li>
      <li>
       <Link to="/login">login</Link>
      </li>
      
    </ul>
  
    </section>
  )
}

export default Menu