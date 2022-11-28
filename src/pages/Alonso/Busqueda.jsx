/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { } from "react-router-dom"
import React,{useState} from "react"
import Layout from "../../Components/Layout"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"

const Busqueda = () => {

  const [listaPcArmado, setListaPcArmado] = useState([])
  const navigate = useNavigate()

  const httpObtenerProducto = async () => {
    const resp = await fetch("http://localhost:4444/productos")
    const data = await resp.json()
    console.log(data)
    setListaPcArmado(data)
  }

  useEffect(() => {
    httpObtenerProducto()
  }, [])

  return <Layout
    makeHeader={() => <Header titulo="¿Que plataforma usara?" />}
    makeBody={
      () => <div>
        <h2>Que plataforma usara?</h2>
        <div className="container text-center" style={{ alignContent: "initial" }}>
          <div className="row">
            <div className="col" style={{ marginLeft: '5px' }}>
              <div className="card" style={{ width: '18rem' }}>
                <img src="./img/pc-icon.png" className="card-img-top" alt="Ofimatica"></img>
                <div className="card-body">
                  <h5 className="card-title">Desktop</h5>
                  <p className="card-text">Un equipo potente con lucecitas</p>
                  <a href="/Requets" className="btn btn-primary">C'on let's go</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '18rem' }}>
                <img src="./img/laptop-icon.png" className="card-img-top" alt="programing"></img>
                <div className="card-body">
                  <h5 className="card-title">Laptop</h5>
                  <p className="card-text">Deseas llevar tu trabajo a todas partes?</p>
                  <a href="/Requets" className="btn btn-primary">Si soy lit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Busqueda