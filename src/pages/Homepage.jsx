import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Homepage = () => {
  let {id} = useParams();
  let[state,setState] = useState(null)
 
  
  let fetchUsers = async() =>{
  let {data} = await axios.get("http://localhost:3000/courses")
  console.log(data)
  
   setState(data)
  console.log(state) 
  
  }

  useEffect(()=>{
    fetchUsers()
  
  },[])
 
  return (
    <section className='fetchContainer'>
{
 state && state.map(course=>{
  return(

    <div key={course}>
    <h1>{course.courseName}</h1>
    <p>{course.trainer}</p>
    <Link to={`${course.id}`} state={course}>viewmore</Link>
    

    </div>
 
  )
})
}
</section>
  )
}

export default Homepage