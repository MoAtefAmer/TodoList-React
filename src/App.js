import React from 'react';
import './App.css';

import TodoList from './components/TodoList';

import TodosData from './components/TodosData'
import TodoTask from './components/TodoTask';

function App() {
  const completedStyle={
    fontStyle:"italic",
    color:"#cdcdcd",
    textDecoration:"line-through"
}

TodosData.push({id:7,text:"did it work",completed:false})
  const todosData= TodosData.map((item,i)=> <TodoTask style={item.completed ? completedStyle:null} key={item.id} element={item} completed={item.completed}/>)
  return (
    <div>
<TodoList/>

  {todosData}
  
  
    </div>
  );
}

export default App;
