import Header from './mycomponent/Header';
import './App.css';
import Footer from './mycomponent/Footer';
import Todos from './mycomponent/Todos';
import About from './mycomponent/About';
import AddTodo from './mycomponent/AddTodo';
import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")==null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    console.log("Dumb", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc)=> {
    console.log("Adding...", title, desc)
    let sno;
    if(todos.length===0){
      sno = 0;
    }
    else{
      sno =todos[todos.length-1].sno+1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
    <Header title={"My Todo List"} searchBar={false}/>
    <Routes>
      <Route path="/" element={
        <>
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} onDelete={onDelete}/>
        </>
      }>
      </Route>
      <Route path='/about' element={
        <About/>
      }>
      </Route>
    </Routes>
      <Footer/>
    </>
  );
}

export default App;
