import React, { useState } from "react";

export default function Formulario(props) {
 const [name, setName] = useState('');
 const [tags, setTags] = useState('');
 const [description, setDescription] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name,tags,description);
    setName("");
    setTags("");
    setDescription("");
  }
  
  function handleChangeTitle(e) {
    setName(e.target.value);
  }
  function handleChangeTags(e) {
    setTags(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título</label>
        <input type="text" id="title" name="title" value={name} onChange={handleChangeTitle} ></input>
        
        <label htmlFor="tags">Tags</label>
        <input type="text" id="tags" name="tags" value={tags} onChange={handleChangeTags}></input>
        
        <label htmlFor="description">Descripción</label>
        <input type="text" id="description" name="description" value={description} onChange={handleChangeDescription}></input>
        
        <button type="submit" className="enviar">Enviar</button>
      </form>
  );
}