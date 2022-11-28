/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {  } from "react-router-dom";
//import "./styles/Surprise.css";

const Surprise = () => {
  return <div>
    <nav className="navbar navbar-expand-lg bg-light" style={{height: '45px'}}>
      <div className="container-fluid">
        <a className="nav-link active" aria-current="page" href="www.google.com.pe"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-1" style={{height: '40px'}}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                <img id="home" src="./img/home.png" alt="home" width="28" height="30" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="Requets.jsx">Suport!</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active">Ranking</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mas opciones
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/index.html">Action</a></li>
                <li>
                  <a className="dropdown-item" href="img/rickroll.gif">
                    Dale Click te daremos un turron
                  </a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">Unete a la legion</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <li className="nav-item">
            <a className="nav-link" aria-current="page">
              <img id="Shopcar" src="./iconos/img3.png" alt="Shopcar" style={{width: '28px',height: '30px',
              marginLeft:'5px', marginRight:'5px'}}/>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page">
              <img id="user" src="./iconos/img4.png" alt="user" style={{width: '28px',height: '30px',
              marginLeft:'5px'}}/>
            </a>
          </li>
        </div>
      </div>
    </nav>
      <div className="container h1">
        Free Games
        <div>With your Purchase</div>
      </div>
      <br />
      <div>
        <div class="container overflow-hidden ">
          <div class="row gy-5">
            <div class="col-6 ">
              <div class="p-3 border bg-light row">
                <img
                  className="col-1 "
                  style={{ height: "8rem", width: "9rem" }}
                  src="./image/gta.jpg"
                  alt=""
                />
                <div className="col fst-italic">
                  Estimado cliente, por la compra de un procesador Ryzen 7 3700X
                  se le hara efectiva la ofeta "GTA",tambien se le aplicara un
                  descuento en la tienda Steam.
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light row">
                <img
                  className="col-1"
                  style={{ height: "8rem", width: "8rem" }}
                  src="./image/cyberpunk.jpg"
                  alt=""
                />
                <div className="col fst-italic">
                  Cliente del año "3000" por la compra de una pantalla de 24'
                  pulg. podra acceder a la oferta de "CiberGlitch",con ella
                  podras tener acceso a los ultimos DLC de "CiberGlitch". XD
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light row">
                <img
                  className="col-1"
                  style={{ height: "8rem", width: "8rem" }}
                  src="./image/elden_ring.jpg"
                  alt=""
                />
                <div className="col fst-italic">
                  Mi buen caballero, tiene el honor de acceder a este tesoro ,
                  por la compra de un pack que consta de 1 ram de 8 gb + 1
                  Motherboard b-450m.{" "}
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light row">
                <img
                  className="col-1"
                  style={{ height: "8rem", width: "8rem" }}
                  src="./image/halo.jpg"
                  alt=""
                />
                <div className="col fst-italic">
                  Estimado cliente, por la compra de un procesador Ryzen 7 3700X
                  se le hara efectiva la ofeta "Halo",tambien se le aplicara un
                  descuento en la tienda Steam.
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light row">
                <img
                  className="col-1"
                  style={{ height: "8rem", width: "8rem" }}
                  src="./image/red_dead_2.jpg"
                  alt=""
                />
                <div className="col fst-italic">
                  Estimado cliente, por la compra de un procesador Ryzen 7 3700X
                  se le hara efectiva la ofeta "RD2",tambien se le aplicara un
                  descuento en la tienda Steam.
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light row">
                <img
                  className="col-1"
                  style={{ height: "8rem", width: "8rem" }}
                  src="./image/god.jpg"
                  alt=""
                />
                <div className="col fst-italic">
                  Estimado cliente, por la compra de un procesador Ryzen 7 3700X
                  se le hara efectiva la ofeta "GOD",tambien se le aplicara un
                  descuento en la tienda Steam. !!!!ESTO ES ESPARTA¡¡¡¡¡
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container text-center h2">Más ofertas</div>
    </div>
}

export default Surprise;
