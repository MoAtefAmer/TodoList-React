import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import TodosData from './TodosData'
import ListGroup from 'react-bootstrap/ListGroup'

export class TodoTask extends React.Component{
constructor(props){
    super(props)
    
}


state={
    completed:this.props.completed,
};

     checkBoxClick=()=>{
        
        this.setState(() =>({
            completed: !this.state.completed
        }));

       
       
    }


    render(){
        let x=<ListGroup.Item>{this.props.element.text}</ListGroup.Item>
        if(this.state.completed){
            x=<ListGroup.Item variant="success">{this.props.element.text}</ListGroup.Item>
        }

        return (
            <div className="center">
                <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox onChange={this.checkBoxClick} aria-label="Checkbox for following text input" />
 
    </InputGroup.Prepend>
     {x}
  </InputGroup>
  
            </div>
        )
    }

}
export default TodoTask
