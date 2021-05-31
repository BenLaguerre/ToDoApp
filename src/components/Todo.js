import React from "react";

export default function Todo(props) {

function buttonDone(){
    props.toDone(props.id);
  }  
  return (
    <div className="todo" id={props.id}>
      <h3>{props.name}</h3>
      <p>{props.tags}</p>
      <p>{props.description}</p>
      <button onClick={buttonDone} className="toDone">Done</button>
    </div>
  );
}