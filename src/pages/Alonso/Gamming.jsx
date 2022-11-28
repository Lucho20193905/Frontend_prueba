/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { } from "react-router-dom"
import React from "react"
import Layout from "../../Components/Layout"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"

const Gamming = () => {
  return <Layout
    makeHeader={() => <Header titulo="Listo para hacer carri a tu team con estas maquinotas" />}
    makeBody={
      () => <div>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div class="card" style={{ width: '18rem' }}>
                <img src="./img/g15.png" class="card-img-top" alt="x270"></img>
                <div class="card-body">
                  <h5 class="card-title">Dell G15</h5>
                  <p class="card-text"></p>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Screen Size 15.6 Inches</li>
                    <li class="list-group-item">Resolution 1920 x 1080 Display 120 Hz</li>
                    <li class="list-group-item">Ram Memory Installed Size 32 GB</li>
                    <li class="list-group-item">Hard Disk Size 1 TB PCIe SSD</li>
                    <li class="list-group-item">CPU Model AMD Ryzen7 5800H</li>
                    <li class="list-group-item">Card Description NVIDIA GeForce RTX 3050 Ti</li>
                    <li class="list-group-item">CPU Speed 3.2 GHz</li>
                  </ul>
                  <a href="www.google.com" class="btn btn-primary">Comprar</a>
                  <a href="www.google.com" class="btn btn-success">Agregar al carrito</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: '18rem' }}>
                <img src="./img/msigv15.png" class="card-img-top" alt="T420"></img>
                <div class="card-body">
                  <h5 class="card-title">MSI GV15</h5>
                  <p class="card-text">La ultima en la serie T con teclado ergonomico y con libreBoot.</p>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Screen Size 15.6 Inches </li>
                    <li class="list-group-item">Resolution 1920 x 1080 Display 144 Hz</li>
                    <li class="list-group-item">Ram Memory Installed Size 8 GB DDR4</li>
                    <li class="list-group-item">CPU Model Intel Core i5-11400H</li>
                    <li class="list-group-item">Card Description NVIDIA GeForce GTX 1650</li>
                    <li class="list-group-item">CPU Speed 3.2 GHz</li>
                    <li class="list-group-item">Hard Disk 256 GB NVMe SSD</li>
                  </ul>
                  <a href="www.google.com" class="btn btn-primary">Comprar</a>
                  <a href="www.google.com" class="btn btn-success">Agregar al carrito</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: '18rem' }}>
                <img src="./img/SagerNP8872N.png" class="card-img-top" alt="dellVostro"></img>
                <div class="card-body">
                  <h5 class="card-title">Sager NP8872N</h5>
                  <p class="card-text">.</p>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Screen Size 17.3 Inches</li>
                    <li class="list-group-item">Resolution 2560 x 1440 Display 165 Hz</li>
                    <li class="list-group-item">Ram Memory Installed Size 32 GB DDR4</li>
                    <li class="list-group-item">CPU Model Intel Core i7-12700H</li>
                    <li class="list-group-item">Card Description GeForce RTX 3070 Ti</li>
                    <li class="list-group-item">CPU Speed 4.5 GHz</li>
                    <li class="list-group-item">Hard Disk 1TB NVMe SSD</li>
                  </ul>
                  <a href="www.google.com" class="btn btn-primary">Comprar</a>
                  <a href="www.google.com" class="btn btn-success">Agregar al carrito</a>
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

export default Gamming