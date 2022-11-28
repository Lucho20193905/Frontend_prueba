/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {} from "react-router-dom";


const Mockup21 = () => {
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
      <br />
      <br />
      <div className="titulo">Influencers</div>

      <div className="resenias">
        <div className="res1">
          <iframe
            width="460"
            height="250"
            src="https://www.youtube.com/embed/4vpPJb392Vg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="comentarios">
            <p>
              "This computer is absolutely insane! Once again if you want to
              check out this brand new Redux gaming PC - it's an absolute super
              computer. Highly, highly recommend it."
            </p>
          </div>
          <div className="caja_top">
            <div className="perfil">
              <div className="perfil_imagen">
                <img
                  src={
                    "https://yt3.ggpht.com/ytc/AMLnZu8jxLukZTH4Nchnsrw8o2-BG7Yh1GmSZDJxLadQDA=s900-c-k-c0x00ffffff-no-rj"
                  }
                ></img>
              </div>
              <div className="name_user">
                <strong>MR TOP 5.</strong>
              </div>
            </div>
          </div>
          <div className="comentarios">
            <p>
              Thanks to @MrTop5 for showing off the unboxing of the #BuildRedux
              PC! Check out his video to see his PC and setup
            </p>
          </div>
        </div>

        <div className="res1">
          <iframe
            width="460"
            height="250"
            src="https://www.youtube.com/embed/UhO7MLntkDE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="comentarios">
            <p>
              "You basically just pick which games you play, which performance
              you want, and it'll suggest a rig for you. They make things much,
              much simpler and again for only $75 bucks? Okay!"
            </p>
          </div>
          <div className="caja_top">
            <div className="perfil">
              <div className="perfil_imagen">
                <img
                  src={
                    "https://yt3.ggpht.com/ytc/AMLnZu_-v2bzQCks3k_MHJNya5J_TSVpMevRw2-axtLX=s900-c-k-c0x00ffffff-no-rj"
                  }
                ></img>
              </div>
              <div className="name_user">
                <strong>SHORT CIRCUIT.</strong>
              </div>
            </div>
          </div>
          <div className="comentarios">
            <p>Thanks for the awesome review @ShortCircuit!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mockup21;
