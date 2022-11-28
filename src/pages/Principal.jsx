/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";


const Principal = () => {
  return <div>
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

        <div className="container" style={{ margin: "10px" }}>
          <h2 style={{ marginBottom: "20px"}}>Build your PC!</h2>
          <h4>Just for what you need</h4>

          <div>
            <button className="btn btn-warning" style={{ marginRight: "25px" }}>
              Armado para principiantes
            </button>
            <button className="btn btn-warning">Armado avanzado</button>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "pink" }}>
        <div
          className="w3-container"
          style={{ paddingTop: "30px", paddingLeft: "30px" }}
        >
          <div className="row">
            <div className="col-6">
              <h4>Sign up to our newsletter for the lastest PC news</h4>
              <div className="row">
                <div className="col-8">
                  <input
                    className=" form-control"
                    placeholder="Email"
                    style={{ width: "80%" }}
                  />
                </div>
                <div className="col col-lg-1">
                  <Link
                    to={"/Principal"}
                    style={{ color: "white" }}
                    type="button"
                    className="btn btn-primary"
                  >
                    subscribe
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-5 text-center">
              <div className="row row-cols-3">
                <div className="col" style={{ marginBottom: "10px" }}>
                  Build your PC
                </div>
                <div className="col" style={{ marginBottom: "10px" }}>
                  Good.
                </div>
                <div className="col" style={{ marginBottom: "10px" }}>
                  Terms and conditions
                </div>
                <div className="col" style={{ marginBottom: "10px" }}>
                  {" "}
                  Why Redux
                </div>
                <div className="col" style={{ marginBottom: "10px" }}>
                  Better.
                </div>
                <div className="col" style={{ marginBottom: "10px" }}>
                  Privacy Policy
                </div>
                <div className="col">Support.</div>
                <div className="col">Best.</div>
                <div className="col">Refund Policy</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container row plomo" style={{ paddingBottom: "58px" }}>
          <div className="col col-lg-1">
            <img
              style={{ height: "30px" }}
              src="./iconos/facebook.png"
              alt=""
            />
          </div>
          <div className="col col-lg-1">
            <img style={{ height: "30px" }} src="./iconos/twitter.png" alt="" />
          </div>
          <div className="col col-lg-1">
            <img
              style={{ height: "30px" }}
              src="./iconos/instagram.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
}
export default Principal;
