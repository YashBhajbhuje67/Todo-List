import React from 'react'
import Todo from './Todo';

const Todos = (props) => {
  let myStyle = {
    minheight: "70vh",
    margin: "50px auto"
  }
  return (
    <div className='container' style={myStyle}>
        <h3 className='text-center my-3'>Todos List</h3>
        {props.todos.length===0 ? "No Todos" :
        props.todos.map((todo) => {
          return(
          <>
          <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
          </>
          )
        })}
        
    </div>
  )
}

export default Todos
