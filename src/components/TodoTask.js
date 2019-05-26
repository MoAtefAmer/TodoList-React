import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import TodosData from './TodosData'
export class TodoTask extends React.Component{



state={
    completed:this.props.completed,
   
};

     checkBoxClick=()=>{
        
        this.setState(() =>({
            completed: !this.state.completed
        }));

    
      
       
    }


  
   handleDeleteItem=()=>{
   
  
    
    const resultId=TodosData.findIndex(element => element.id===this.props.element.id)
  
    
    if(resultId!=undefined)
    TodosData.splice(resultId,1)
       this.props.deleteItem()
      
       this.forceUpdate()
       this.props.deleteItem()
   }
      
    render(){
let y=this.props.element.text

        let x=<ListGroup.Item>{y}</ListGroup.Item>
        if(this.state.completed){
            x=<ListGroup.Item variant="success">{y}</ListGroup.Item>
        }

      

   
        
        return (
            <div className="center">
                <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox onChange={this.checkBoxClick} aria-label="Checkbox for following text input" />
 
    </InputGroup.Prepend>
     {x}
     <InputGroup.Append>
    <Button className="del" variant="danger" onClick={this.handleDeleteItem}>Delete</Button>
    </InputGroup.Append>
  
  </InputGroup>
 
  
            </div>

        )
    }

}
export default TodoTask
