/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */

import {  } from "react-router-dom"
const Mk_12 = () => {
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
      <br />
      <div style={{height: '10em'}}>
      <div id="tit1"className="display-4 text-light"><strong>Build your own PC!</strong></div>
      <div id="princ" className="container">
      <button id="botonescompx" type="button" className="btn btn-primary btn-light" > Back</button>
      <button id="botonescompx" type="button" className="btn btn-primary btn-light"><div style={{textAlign: 'center;'}}><img id="checko"src="./iconos/carrito-de-compras.png" style={{width: '22px', height: 'auto'}}/> Checkout</div></button>
      </div>
      
      <div id="gr1"className="container btn-group-vertical btn-group-lg text-center">
          <div className="row g-2">
            <div className="col-sm">
              <button id="botonescomp" type="button" className="btn btn-primary btn-light" >Graphics</button>
            </div>
            <div className="col-sm">
              <button id="botonescomp" type="button" className="btn btn-primary btn-light">Processor</button>
            </div>
            <div className="col-sm">
              <button id="botonescomp" type="button" className="btn btn-primary  btn-light">Memory</button>
            </div>
            <div className="col-sm">
              <button id="botonescomp" type="button" className="btn btn-primary  btn-light">Storage</button>
          </div>
        
      
      </div>
      <br />
      <div id="gr2" className="container btn-group-vertical btn-group-lg text-center">
        <div className="row g-3">
          <div className="col-4">
            <button id="botonescomp2" type="button" className="btn btn-light">Cooler</button>
          </div>
          <div className="col-4">
            <button id="botonescomp2" type="button" className="btn btn-light">Windows</button>
          </div>
          <div className="col-4">
            <button id="botonescompesp1" type="button" className="btn btn-light .btn-group-justified">Power Supply</button>
          </div>
        </div>
          
      </div>
      </div>
      <div id="choose" className="container overflow-hidden text-center">
        <div className="row gy-4">
          <div className="col-6">
            <div className="p-3 border bg-light" ><img id="nvidia" src="./iconos/descarga.png"/><div style={{textAlign: 'left', marginLeft: '60px'}}>Nvidia GeForce GTX 1650 4GB</div>
            <div style={{textAlign: 'left', marginLeft: '60px'}}>$229</div></div>
          </div>
          <button className="col-1" style={{border: 'none', backgroundColor: 'blue'}}><img src="./iconos/check.png" style={{width: '30px'}}/>
          </button>
          <div className="col-6">
            <div className="p-3 border bg-light"><img id="nvidia" src="./iconos/descarga.png"/><div style={{textAlign: 'left', marginLeft: '60px'}}>Nvidia GeForce RTX 3050 8GB (VR READY)</div>
            <div style={{textAlign: 'left', marginLeft: '60px'}}>$124</div></div>
          </div>
          <button className="col-1" style={{border: "none", backgroundColor: "blue"}}>
          </button>
          <div className="col-6">
            <div className="p-3 border bg-light"><img id="nvidia" src="./iconos/descarga.png"/><div style={{textAlign: 'left', marginLeft: '60px'}}>Nvidia GeForce RTX 3060 12GB (VR READY)</div>
            <div style={{textAlign: 'left', marginLeft: '60px'}}>$240</div></div>
          </div>
          <button className="col-1" style={{border: 'none', backgroundColor: 'blue', padding: '10px 15px', position: 'relative'}}>
          </button>
          <div className="col-6">
            <div className="p-3 border bg-light"><img id="nvidia" src="./iconos/descarga.png"/><div style={{textAlign: 'left', marginLeft: '60px'}}>Nvidia GeForce RTX 3090 Ti 24GB (VR READY)</div>
            <div style={{textAlign: 'left', marginLeft: '60px'}}>$1558</div></div>
          </div>
  
          <button className="col-1" style={{border: "none", backgroundColor: "blue", padding: "10px 5px"}}>
          </button>
        </div>
      </div>
      
      <div>
      <span id="pc"><img id="p1"src="./iconos/pngwing.com.png"/></span>
      <br   />
      <div className= "container "id="pc2">
        <div>Components Price</div>
        <div>$ 1899</div>
        <div>Build Fee</div>
        <div>$ 99</div>
      </div>
      </div>
      <div className="container" style={{position: 'relative', right : '-620px', bottom: '1120px', width: '600px'}}>
        <div id= "products" className="col g-2">
            <div className="p-3 border bg-light"><img id="nvidia" src="./iconos/proc.png" style={{width: '48px'}}/><div style={{ textAlign: 'left', marginLeft: '60px'}}>INTEL CORE I7 -12100F 12-CORE</div>
            <div style={{textAlign: 'right', marginBottom: '12px'}}>$359</div></div>
            <div className="p-3 border bg-light"><img id="nvidia" src="./iconos/descarga.png"/><div style={{textAlign: 'left', marginLeft: '60px'}}>Nvidia GeForce RTX 3070 8GB (VR READY)</div>
            <div style={{textAlign: 'right', marginBottom: '12px'}}>$679</div></div>
            <div className="p-3 border bg-light"><img id="nvidia" src="./iconos/rams.png" style={{width: '48px'}}/><div style={{ textAlign: 'left', marginLeft: '60px'}}>16GB DDR4 DUAL CHANNEL</div>
            <div style={{textAlign: 'right', marginBottom: '12px'}}>$69</div></div>
            <div className="p-3 border bg-light"><img id="nvidia" src="./iconos/nvme.png" style={{width: '52px'}}/><div style={{ textAlign: 'left', marginLeft: '60px'}}>1TB NVME M.2</div>
            <div style={{textAlign: 'right', marginBottom: '12px'}}>$99</div></div>
            <div className="p-3 border bg-light"><img id="nvidia" src="./iconos/refr liquid. cm.png" style={{width: '55px'}}/><div style={{ textAlign: 'left', marginLeft: '60px'}}>CM MASTERLIQUID</div>
            <div style={{textAlign: 'right', marginBottom: '12px'}}>$89</div></div>
            <div className="p-3 border bg-light"><img id="nvidia" src="./iconos/fans.png" style={{width: '55px'}}/><div style={{ textAlign: 'left', marginLeft: '60px'}}>QTY X4 CM MASTERFANS RGB</div>
            <div style={{textAlign: 'right', marginBottom: '12px'}}>$29</div></div>
            <div className="p-3 border bg-light"><img id="nvidia" src="./iconos/case.png" style={{width: '55px'}}/><div style={{ textAlign: 'left', marginLeft: '60px'}}>COOLER MASTER TD500 RGB</div>
            <div style={{textAlign: 'right', marginBottom: '12px'}}>$99</div></div>
            <div className="p-3 border bg-light"><img id="nvidia" src="./iconos/fuente.png" style={{width: '55px'}}/><div style={{ textAlign: 'left', marginLeft: '60px'}}>700W ATX 80 PLUS GOLD</div>
            <div style={{textAlign: 'right', marginBottom: '12px'}}>$79</div></div>
            <div className="p-3 border bg-light"><img id="nvidia" src="./iconos/mother.png" style={{width: '45px'}}/><div style={{ textAlign: 'left', marginLeft: '60px'}}>ASUS PRIME B660M-A INTEL</div>
            <div style={{textAlign: 'right', marginBottom: '12px'}}>$149</div></div>  
            <div className="p-3 border bg-light"><img id="nvidia" src="./iconos/antena.png" style={{width: '45px'}}/><div style={{ textAlign: 'left', marginLeft: '60px'}}>WIRELESS 802</div>
            <div style={{textAlign: 'right', marginBottom: '12px'}}>$29</div></div>
            <div className="p-3 border bg-light"><img id="nvidia" src="./iconos/windows.png" style={{width: '45px'}}/><div style={{ textAlign: 'left', marginLeft: '60px'}}>WINDOWS 11 + USB</div>
            <div style={{textAlign: 'right', marginBottom: '12px'}}>$120</div></div>  

       </div>
    </div>
    </div>
    </div>
    
}
export default Mk_12