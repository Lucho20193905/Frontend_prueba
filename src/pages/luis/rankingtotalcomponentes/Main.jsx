/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {  } from "react-router-dom";

import Layout from "../../../components/Layout";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Main = () => {

  
  return <Layout
      makeHeader={ () => <Header titulo="Carrito de compra" /> }

      makeFooter={() => <Footer></Footer>}
/>
}

export default Main;
