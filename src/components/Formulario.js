import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
    <Form onSubmit={handleSubmit}>
     <Row><Col>
      <Form.Group controlId="formTitle">
        <Form.Label column="lg">Título</Form.Label>
        <Form.Control name="title" value={name} onChange={handleChangeTitle} />
      </Form.Group>
      <Form.Group controlId="formTags">
          <Form.Label column="lg">Tags</Form.Label>
          <Form.Control name="tags" value={tags} onChange={handleChangeTags} />
        </Form.Group>
     </Col>
      <Col xs={7}>
      <Form.Group controlId="formDescritpion">
          <Form.Label column="lg">Descripción</Form.Label>
          <Form.Control as="textarea" rows={5} name="description" value={description} onChange={handleChangeDescription} />
      </Form.Group>
        </Col></Row>
      <Row>
        <Col></Col><Col></Col>
        <Col>
      <Button variant="success" size="lg" block type="submit" className="enviar">Enviar</Button>
          </Col>
        </Row>
    </Form>
   );
}

