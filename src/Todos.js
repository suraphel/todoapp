import React, { Component } from 'react'; 

 const Todos = ({todos, deletetodo, addtodo}) =>  {
     
    //  conditional output 
      const todoList = todos.length ? (
        todos.map(todo => {
             return(
                 <div className="collection-item" key={todo.id}>
                     <span onClick= { ()=> {deletetodo(todo.id)}}>{todo.content}</span>
                 </div>
             )
         })    
     ) : (
     <p className = "center"> "You have no more task to do done" </p>
     )
  

    return (
      <div className="todos collection"> 
        {todoList}     
      
      </div>
    );  
  }

 

export default Todos;
