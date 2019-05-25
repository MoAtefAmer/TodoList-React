import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export class TodoItem extends Component {


    render() {
        return (
            <div>
          <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox ></InputGroup.Checkbox>
      <Button variant="danger">Delete Task</Button>
    </InputGroup.Prepend>
    <FormControl aria-describedby="basic-addon1" />
  </InputGroup>
         
 
          </div>
        )
    }
}

export default TodoItem
