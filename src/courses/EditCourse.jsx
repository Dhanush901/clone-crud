import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const EditCourse = () => {

    let{id} = useParams();

    let[state,setState] = useState([{
        courseName:"",
        trainer:""
    }])
   
let {courseName,trainer} = state;
let handleChange = (e)=>{
    let{name,value} = e.target;
    setState({...state,[name]:value})
}
let handleSubmit = async(e)=>{
    e.preventDefault();
   let payload ={courseName,trainer}
   await axios.put(`http://localhost:3000/courses/`,payload)
}

  return (
    <section>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="coursename">Course Name</label>
            <input type="text" name='courseName' value={courseName} onChange={handleChange} placeholder='enter courese name' />
            </div>
            <div className="form-group">
            <label htmlFor="trainer">trainer Name</label>
            <input type="text" name='trainer' value={trainer} onChange={handleChange} placeholder='enter tariner name' />
            </div>
            <div className="form-group">
           <button>Submit</button>
           
            </div>

        </form>
    </section>
  )
}

export default EditCourse