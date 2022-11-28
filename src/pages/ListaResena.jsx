/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {  } from "react-router-dom";
import React from "react";


const ListaResena = () => {
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
      <div className="blanco" id="bottom">
        <div>
          <h1 style={{ margin: "20px" }}>User Reviews</h1>
        </div>
        <div className="row">
          <div style={{ margin: "20px"}} className="col col-lg-2">
            <h2 class="Global">Global rate</h2>
          </div>
          <div
            style={{ marginTop: "30px" }}
            className="col col-lg-2 justify-content-md-center"
          >
            <span
              className="fa fa-star checked"
              style={{ color: "orange" }}
            ></span>
            <span
              className="fa fa-star checked"
              style={{ color: "orange" }}
            ></span>
            <span
              className="fa fa-star checked"
              style={{ color: "orange" }}
            ></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>

        <div
          className="solid"
          style={{ borderTop: "1px solid grey", marginTop: "30px" }}
        >
          <h5 class="Global" style={{ margin: "20px", marginLeft: "40px" }}>Juan Lopez</h5>
          <p style={{ marginLeft: "70px" }}>I completely recommend this site</p>
        </div>

        <div className="solid" style={{ borderTop: "1px solid grey" }}>
          <h5 class="Global" style={{ margin: "20px", marginLeft: "40px" }}>Jhon Doe</h5>
          <p style={{ marginLeft: "70px" }}>Great service!</p>
        </div>

        <div className="solid " style={{ borderTop: "1px solid grey" }}>
          <h5 class="Global" style={{ margin: "20px", marginLeft: "40px" }}>Carl Johnson</h5>
          <p style={{ marginLeft: "70px" }}>
            Pc well built and nice case quality
          </p>
        </div>
      </div>
    </div>
}
export default ListaResena;
