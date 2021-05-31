import React, { useState } from "react";
import './App.css';
import Formulario from './components/Formulario';
import Todo from './components/Todo';
import Done from './components/Done';

function App(props) {
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState([]);
  
  const taskList = tasks.map(task => 
     (<Todo id={task.id} name={task.name} tags={task.tags} description={task.description} key={task.id} toDone={toDone} />));
  
  const doneList = done.map(task =>
    (<Done id={task.id} name={task.name} tags={task.tags} description={task.description} key={task.id} toToDo={toToDo} />)                            
  )
  function addTask(name,tags,description) {
    
    const newTask = { id:tasks.length+done.length, name:name, tags:tags, description:description };
    setTasks([...tasks,newTask]);
  }     
  
  function toDone(id){
    const findTask = tasks.filter(task => id === task.id);
    setDone([...done,findTask[0]]);
 
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }
  
  function toToDo(id){
    const findDone = done.filter(don => id === don.id);
    setTasks([...tasks,findDone[0]]);
    
    const remainingDone = done.filter(task => id !== task.id);
    setDone(remainingDone); 
  }
 
  return(
  <div className="todoapp">
    <header>
      <h1>ToDoApp</h1>
      <p>Aplicación para la gestión de proyectos</p>
    </header>
    <div className="formulario">
      <h2>Create</h2>
      <Formulario addTask={addTask}/>
    </div>
    <div className="lists">
      <div className="todo-wrapper">
        <h2>ToDo</h2>
        {taskList}
      </div>
      <div className="taskdone-wrapper">
        <h2>Done</h2>
        {doneList}
      </div>
    </div>

  </div>
  );
}

export default App;
