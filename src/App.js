import React, { Component } from 'react';
import Todos from './Todos';
import Addtodos from './Addtodos'
import Navbar from './Container/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Container/Home'
import About from './Container/About'
import ContactUs from './Container/ContactUs'
import Post from './Container/Post'

class App extends Component {
  state = {
    todos: [
      {id:1, content: "buy some milk"},
      {id:2, content: "play some mario cart"},
      {id:3, content: "play some flight Simulator"}
    ]
  }
  deletetodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id      
    })
    this.setState({
      todos: todos
    })
    console.log(id);
  } 

  listUpdater = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })    
    }
  render() {  
    return (
      <BrowserRouter> 
        <div className="todo-App container">     
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/About' component= {About}/>
            <Route path='/Contact' component= {ContactUs}/>
            <Route path ='/:post_id' component={Post} />
          </Switch>

          {/* <h1 className ="center blue-text">Todos</h1>       */}
          {/* <Todos todos = {this.state.todos} deletetodo = {this.deletetodo} />
          <Addtodos listUpdater = {this.listUpdater}/> */}
        </div>
      </BrowserRouter>
    );  
  }
}
export default App;
