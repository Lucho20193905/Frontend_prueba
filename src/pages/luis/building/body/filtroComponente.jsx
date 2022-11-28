import React from "react";
import { ButtonGroup,Button, Form} from 'react-bootstrap'

const Categorias = (props) => {
    return <Form>
        <Form.Group>
            <Form.Label>Pc armada</Form.Label>
            <Form.Select
                onChange={ (evt) => { props.onPcArmada(evt.target.value) }}>
                <option value={"-1"}>---- Seleccione pc armada ----</option>
                {
                    props.pc_armado.map((pc_armado) => {
                        return <option key={pc_armado.id} value={pc_armado.id}>
                            { pc_armado.nombre }
                        </option>
                    })
                }
            </Form.Select>
        </Form.Group>
    </Form> 
}
export default Categorias
