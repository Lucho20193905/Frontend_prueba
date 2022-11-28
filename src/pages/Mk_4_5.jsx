/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */

import {  } from "react-router-dom"
const Mk_4_5 = () => {
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
    <div style={{height: '2em'}}>
    <div >
    <div id="usa" className="bg-white rounded-1 bg-opacity-50"><strong> Default</strong>
                                                  <div>Ed va</div>
                                                  <div>United States</div></div>        

        <div >
          <div className="row g-2 ">
              <div><button id="mainbuttons2" className="boton2   d-inline-block border border-0 rounded-1" > Order History</button></div>
              <div><button id="mainbuttons2"className="boton2  d-inline-block border border-0 rounded-1"> Profile Info</button> </div>
              <div><button id="mainbuttons2" className="boton2 d-inline-block border border-0 rounded-1"> Log Out</button> </div>
            </div>  
          </div>
    
        
                                                 
        
    <div
      id="cuadro"
      className="container text-center bg-white rounded-3 bg-opacity-50">
      
      <div className="row g-3">

        <div className="col">
            <div className ="text-start">First name</div>
          <input type="text" className="form-control" placeholder="" aria-label="First name"></input>
        </div>
        <div className="col">
            <div className ="text-start">Last name</div>
          <input type="text" className="form-control" placeholder="" aria-label="Last name"></input>
        </div>
      </div>
      <div className="mb-3">
        <br />
        <div className ="text-start">Email</div>
        <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""></input>
      </div>
      <div className="mb-3">
        <div className ="text-start">Adress</div>
        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""></input>
      </div>
      <div className="row g-3">
        <div className="col">
            <div className ="text-start">Apartment, suit, etc</div>
          <input type="text" className="form-control" placeholder="" aria-label="First name"></input>
        </div>
        <div className="col">
            <div className ="text-start">City</div>
          <input type="text" className="form-control" placeholder="" aria-label="Last name"></input>
        </div>
      </div>
      <div className="row g-3">
        <div className="col">
            <br />
            <div className ="text-start">Country/Region</div><div className="col-12">
                <label className="visually-hidden" for="inlineFormSelectPref">Preference</label>
                <select className="form-select" id="inlineFormSelectPref">
                  <option selected>Choose...</option>
                  <option value="1">Lima Metropolitana</option>
                  <option value="2">Lima Provincia</option>
                  <option value="3">Otro Departamento</option>
                </select>
              </div>
        </div>
        <div className="col">
            <br />
            <div className ="text-start">Postal/ZipCode</div>
            <input type="text" className="form-control" placeholder="" aria-label="First name"></input>
        </div>
        <div className="mb-3">
            <div className ="text-start">Phone</div>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""></input>
          </div>
      </div>
          <span><button id="Update" type="button" className="btn">Update info</button></span>
          <span><button type="button" className="btn  btn-lg bg-opacity-50" style={{fontSize: '13px'}}>Cancel</button></span>


    </div>
    </div>
    </div>
    </div>
}
export default Mk_4_5