import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function Done(props) {
  function buttonToDo(){
    props.toToDo(props.id);
  }
  return (
        <Container className="taskdone" id={props.id}>
      <Row>
        <h3>{props.name}</h3>
      </Row>
      <Row>
        <p>{props.tags}</p>
      </Row>
      <Row>
        <p>{props.description}</p>
      </Row>
      <Row>
        <Col></Col><Col></Col>
        <Col>
          <Button variant="danger" onClick={buttonToDo} className="totoDo">Todo</Button>
        </Col>
      </Row>
    </Container>
  );
}
