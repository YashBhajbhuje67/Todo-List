
import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
    const [title, setTtile] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title and Desc cannot be Blank");
        }
        else{
            addTodo(title, desc);
            setTtile("");
            setDesc("");
        }
        
    }

  return (
    <div className='container my-1'>
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Todo Title</label>
                <input type="text" value={title} onChange={(e)=>setTtile(e.target.value)}className="form-control" id="title" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Todo Description</label>
                <input type="desc" value ={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="exampleInputPassword1"/>
            </div>
        <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
        </form>
    </div>
  )
}

export default AddTodo
