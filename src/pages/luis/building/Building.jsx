/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import {  } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "react-bootstrap/Image";
import { useState } from "react";
import Lista from "./body/Lista";
import { Card, CardGroup, ListGroup } from "react-bootstrap";
import ListaComponentes from "./body/Lista";
import Categorias from "./body/filtroComponente";

const Header = () => {
  const [listadoComponentes,setlistadoComponentes]= useState([])
  const [listadoArmadas, setlistadoArmadas] = useState([])

  const httpObtenerArmadas = async () => {
    const response =  await fetch("http://localhost:4447/pcarmadas");
    const data = await response.json();
    console.log(data);
    setlistadoArmadas(data);
  }

  const httpObtenerComponentes  = async(pcarmado_id = null ) => {
    const ruta = pcarmado_id == null ?
      "http://localhost:4447/componentes":
      `http://localhost:4447/componentes?pcarmado_id=${pcarmado_id}`

    const response = await fetch(ruta);
    const data = await response.json();
    console.log(data)
    setlistadoComponentes(data)
  }

  useEffect (() => {
    httpObtenerComponentes();
    httpObtenerArmadas();
  }, [])

  const onPcArmada = (pcarmado_id) => {
    console.log("Pc armada seleccionada: "+ pcarmado_id);
    httpObtenerComponentes(pcarmado_id);
  }

  return (
    <Container>
      <Navbar bg="light" expand="lg" style={{ height: '80px' }}>
        <Container fluid>
          <Navbar.Brand href="#"><Image
            src="https://thumbs.dreamstime.com/b/gamepad-icon-controller-isolated-white-background-149257730.jpg"
            rounded style={{ maxHeight: '50px' }} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '50px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#">
                Support
              </Nav.Link>
              <Nav.Link href="#">
                Review
              </Nav.Link>
              <Nav.Link href="#">
                Ranking
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success">Search</Button>
            </Form>
            <Image
              src="https://thumbs.dreamstime.com/b/person-icon-flat-style-man-symbol-person-icon-flat-style-man-symbol-isolated-white-background-simple-people-abstract-icon-118611127.jpg"
              rounded style={{ maxHeight: '40px' }} />
            <Image
              src="https://thumbs.dreamstime.com/b/shopping-cart-icon-black-white-shopping-cart-icon-black-white-buttons-white-background-vector-illustration-117843673.jpg"
              rounded style={{ maxHeight: '40px' }} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <h1>Building </h1>
    <Image
              src="https://assets.spartangeek.com/cc/CP-AEROCOOL-CYLONBK-6_200106_013415.png"
              rounded style={{ maxHeight: '500px' }} />
    <filtroComponente 
              pcarmado = {onPcArmada}
    ></filtroComponente>
    <Lista
              productos = { listadoComponentes}
          ></Lista>
    </Container>
  )
}

export default Header;

