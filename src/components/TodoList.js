import React, { Component } from 'react'

import Button from 'react-bootstrap/Button'
import TodosData from './TodosData';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import TodoTask from './TodoTask'
export class TodoList extends  React.Component {

    state={
      
        addNewItemList:'',
        task:'',
        taskId:'',
        counter:5
       
    };

incrementCounter=()=>{
this.setState({
    counter:this.state.counter+1
})

}

confirmItem=()=>{
 this.incrementCounter()
const counter=this.state.counter
console.log(counter)
TodosData.push({id:counter,text:this.state.task,completed:false})
this.forceUpdate()

}

removeItem=()=>{
    
    this.setState({addNewItemList:''})
}

handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  deleteItem=()=>{
   
    this.forceUpdate()
    
    }

addItem=()=>{
  
 
    const x= <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <Button variant="success" onClick={this.confirmItem}>Accept</Button>
      <Button variant="danger" onClick={this.removeItem}>Cancel</Button>
    </InputGroup.Prepend>
     <FormControl aria-describedby="basic-addon1" className="nee" onChange={this.handleChange('task')}/>
    
   
  </InputGroup>

  
        this.setState({addNewItemList:x})

      

} 

    render() {
        
        const todosData= TodosData.map((item,i)=> <TodoTask  counter={this.state.counter} deleteItem={this.deleteItem}customItem={this.state.task} addNewItemList={this.state.addNewItemList} key={i} element={item} completed={item.completed}/>)
     
        
        return (
            <>
            <h1 className="header">TODO LIST</h1>
            
            <div className="container">
            <Button variant="primary" className="btn" onClick={this.addItem}>Add New Task</Button>
            
             
              
               {this.state.addNewItemList}
               {todosData}
              
            </div>
            </>
        )
    }
}

export default TodoList
