/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom"
import React, { useState } from "react"
import Layout from "../../Components/Layout";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useEffect } from "react";
import { useParams } from "react-router";
import ListaPcArmado from "./Auxiliar/ListaPcArmado";
import ListaTipoPc from "./Auxiliar/ListaTipoPc";
import ListaDescPc from "./Auxiliar/ListaDescPc";

const Prueba = () => {

  const [listaDescPc, setListaDescPc] = useState([])
  const [listaPcArmado, setListaPcArmado] = useState([])
  const [listaTipoPc, setListaTipoPc] = useState([])
  const navigate = useNavigate()

  const { tipoId, descripcionId } = useParams()

  const httpObtenerPcArmado = async (descripcionId = "-1",tipoId = "-1") => {
    const ruta = descripcionId === "-1" && tipoId === "-1"?
      "http://localhost:4444/pcarmado" :
      `http://localhost:4444/pcarmado?descripcion=${descripcionId}&tipo=${tipoId}`

    const resp = await fetch(ruta)
    const data = await resp.json()
    //console.log(data)
    setListaPcArmado(data)
  }

  const httpObtenerTipoPc = async () => {
    const resp = await fetch("http://localhost:4444/tipo")
    const data = await resp.json()
    setListaTipoPc(data)
  }

  const httpObtenerDescripcion = async () => {
    const resp = await fetch("http://localhost:4444/descripcion")
    const data = await resp.json()
    setListaDescPc(data)
  }

  useEffect(() => {
    httpObtenerPcArmado()
    httpObtenerTipoPc()
    httpObtenerDescripcion()
  }, [])

  const onTipoSelected = (tipoId) => {
    console.log("Se selecciono " + tipoId)
    httpObtenerPcArmado()
  }

  const onDescSelected = (pcDesc) => {
    console.log("Se selecciono" + pcDesc)
    httpObtenerPcArmado(pcDesc)
  }

  return <Layout
    makeHeader={() => <Header titulo="Equipos Disponibles" />}
    makeBody={
      () => <div>
        <ListaTipoPc tipo={listaTipoPc}
          onTipoSelected={onTipoSelected}/>
        <ListaDescPc descripcion={listaDescPc}
          onDescSelected={onDescSelected}/>
        <ListaPcArmado pcarmado={listaPcArmado} />
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Prueba