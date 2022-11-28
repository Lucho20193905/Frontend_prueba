/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { } from "react-router-dom";
import React from "react";
import Header from "../../Components/Header";
import Layout from "../../Components/Layout";
import Footer from "../../Components/Footer";

const Ofimatica = () => {
  return <Layout
    makeHeader={() => <Header titulo="Esto es lo que tenemos disponible" />}
    makeBody={
      () => <div>
        <div className="container text-center">
          <div className="row">
            <div className="col" style={{marginLeft:'5px'}}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="./img/t470.png"
                  className="card-img-top"
                  alt="T470s"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Lenovo Thinkpad T470s</h5>
                  <p className="card-text">
                    La gama empresarial de Lenevo por fin en nuestra tienda
                  </p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Screen Size 14 Inches</li>
                    <li className="list-group-item">
                      Ram Memory Installed Size 8 GB
                    </li>
                    <li className="list-group-item">Hard Disk Size 256 GB</li>
                    <li className="list-group-item">CPU Model Core i7 6600U</li>
                    <li className="list-group-item">
                      Card Description Integrated Intel HD Graphics 520
                    </li>
                    <li className="list-group-item">CPU Speed 2.6 GHz</li>
                    <li className="list-group-item">Hard Disk Description SSD</li>
                  </ul>
                  <a href="www.google.com.pe" className="btn btn-primary">
                    Comprar
                  </a>
                  <a href="www.google.com.pe" className="btn btn-success">
                    Agregar al carrito
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="./img/dellInspiron.png"
                  className="card-img-top"
                  alt="dellInspiron"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Dell Inspiron 3583</h5>
                  <p className="card-text">
                    Serie tope usada por empresas del sector bancario por su
                    fiabilidad.
                  </p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Screen Size 15.6 Inches</li>
                    <li className="list-group-item">
                      Ram Memory Installed Size 4 GB DDR4
                    </li>
                    <li className="list-group-item">CPU Model Celeron N4020</li>
                    <li className="list-group-item">
                      Card Description Integrated Intel HD Graphics 610
                    </li>
                    <li className="list-group-item">CPU Speed 2.4 GHz</li>
                    <li className="list-group-item">
                      128GB M.2 PCIe NVMe SSD storage
                    </li>
                    <li className="list-group-item">Hard Disk 500 GB HDD</li>
                  </ul>
                  <a href="www.google.com.pe" className="btn btn-primary">
                    Comprar
                  </a>
                  <a href="www.google.com.pe" className="btn btn-success">
                    Agregar al carrito
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="./img/asus.png"
                  className="card-img-top"
                  alt="Asus"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">ASUS L410 MA-DB02</h5>
                  <p className="card-text">
                    Ideal para esas largas horas haciendo reportes en Excel.
                  </p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Screen Size 14 Inches</li>
                    <li className="list-group-item">
                      14” Full HD (1920x1080) Display
                    </li>
                    <li className="list-group-item">
                      Ram Memory Installed Size 8 GB DDR4
                    </li>
                    <li className="list-group-item">CPU Model Celeron N4020</li>
                    <li className="list-group-item">
                      Card Description Integrated Intel UHD Graphics 600
                    </li>
                    <li className="list-group-item">CPU Speed 2.8 GHz</li>
                    <li className="list-group-item">128GB SSD storage</li>
                    <li className="list-group-item">Hard Disk 500 GB HDD</li>
                  </ul>
                  <a href="www.google.com.pe" className="btn btn-primary">
                    Comprar
                  </a>
                  <a href="www.google.com.pe" className="btn btn-success">
                    Agregar al carrito
                  </a>
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

export default Ofimatica