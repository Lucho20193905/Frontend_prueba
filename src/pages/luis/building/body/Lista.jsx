import React from "react";
import { useState } from "react";
import { Row, Col, Card, Form, Button } from 'react-bootstrap'


const ListaComponentes = (props)=>{
    return <div className="mt-4 mb-4">
        {
            props.productos.map((producto) => {
                return <Row className="mb-2">
                <Col>                       
                    <Card onClick={ () => props.onProdFavSelected() }>
                        <Card.Body>             
                            { producto.nombre } - Precio: { producto.precio} </Card.Body>
                    </Card>
                </Col>
            </Row>
            })
        }
    </div>
}
export default ListaComponentes