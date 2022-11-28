/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegistroPage = () => {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginOnClick = () => {
    if (
      Firstname !== "" &&
      Lastname !== "" &&
      email !== "" &&
      password !== ""
    ) {
      navigate("/Principal");
    }
  };

  return (
    <div>
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
    <div style={{marginBottom:'100px'}}></div>
      <div
        className="container"
        style={{
          heigh: "100%",
          width: "50%",
          PaddingTop: "100px",
          paddingBottom: "10px",
          backgroundColor: "pink",
        }}
      >
        <h1>Create Account</h1>
        <div>
          <label className="form-label"></label>
          <input
            className="form-control"
            placeholder="First Name"
            value={Firstname}
            onChange={(evt) => setFirstname(evt.target.value)}
          />
        </div>
        <div>
          <label className="form-label"></label>
          <input
            className="form-control"
            placeholder="Last Name"
            value={Lastname}
            onChange={(evt) => setLastname(evt.target.value)}
          />
        </div>
        <div>
          <label className="form-label"></label>
          <input
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </div>
        <div>
          <label className="form-label"></label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </div>
        <Link
          style={{ margin: "20px" }}
          to={"/Principal"}
          className="btn btn-warning"
          type="button"
          onClick={loginOnClick}
        >
          Create
        </Link>
      </div>
    </div>
  );
};
export default RegistroPage;
