import React from "react";

export default function Done(props) {
  function buttonToDo(){
    props.toToDo(props.id);
  }
  return (
    <div className="taskdone" id={props.id}>
      <h3>{props.name}</h3>
      <p>{props.tags}</p>
      <p>{props.description}</p>
      <button onClick={buttonToDo} className="toToDo">Todo</button>
    </div>
  );
}