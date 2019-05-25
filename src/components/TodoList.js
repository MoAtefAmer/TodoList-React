import React, { Component } from 'react'
import TodoItem from './TodoItem'
import Button from 'react-bootstrap/Button'
import TodosData from './TodosData';
export class TodoList extends  React.Component {

    state={
      
        todoItemList:[]
    };
addItem=()=>{
   this.setState({ todoCounter:this.state.todoCounter+1 });
    console.log(this.state.todoCounter)
    const x=<TodoItem/>
  
        // this.setState({todoItemList:this.state.todoItemList.concat([x])})
    
    

}

    render() {
        return (
            <>
            <h1 className="header">TODO LIST</h1>
            
            <div className="container">
            <Button variant="primary" className="btn" onClick={this.addItem}>Add New Task</Button>
            
               {this.state.todoItemList}
           
            </div>
            </>
        )
    }
}

export default TodoList
