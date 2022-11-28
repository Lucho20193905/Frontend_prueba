/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react"
//import { useNavigate } from "react-router"
import Footer from "../../../Components/Footer"
import Header from "../../../Components/Header"
import Layout from "../../../Components/Layout"
import GridProductosComprados from "./body/listacompra"

const Carrito = () =>{
    const [listadoProducto, setListadoProducto] = useState([])

    const httpObtenerProductos = async () =>{
        const resp = await fetch("http://localhost:4447/productos")
        const data = await resp.json()
        console.log(data)
        setListadoProducto(data)
    }

    useEffect(()=>{
        httpObtenerProductos()
    },[])

  
  return <Layout

        makeHeader={ () => <Header titulo="Carrito de compra" /> }
        makeBody={ 
            () =>  <div>
                <GridProductosComprados
                    producto={ listadoProducto }/>
            </div>
        }
        makeFooter={() => <Footer></Footer>}
    />
}

export default Carrito