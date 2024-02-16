import React, { useState } from 'react'
import { Link, useLocation, useNavigate, useNavigation, useParams } from 'react-router-dom'
import axios from 'axios';

const Singlecourse = () => {
    
    let {state} = useLocation();
let navigate = useNavigate();
    // let[edit,setEdit] = useState(null)
    let{id,courseName,trainer} = state


 let DeleteCourse = async(id)=>{
 

    await axios.delete(`http://localhost:3000/courses/${id}`)
    navigate("/")
}
 return (
    <div>
        <h1>{id}</h1>
        <h3>Course Name :{courseName}</h3>
        <h3>trainer :{trainer}</h3>
        <button onClick={()=>DeleteCourse(id)} >delete</button>
        <Link to={`/updatecourse/${id}`} state={state}>update</Link>
    </div>
  )
}

export default Singlecourse