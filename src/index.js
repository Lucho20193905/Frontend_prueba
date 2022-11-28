/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Requets from './pages/Alonso/Requets';
import Gamming from './pages/Alonso/Gamming';
import Busqueda from './pages/Alonso/Busqueda';
import Ofimatica from './pages/Alonso/Ofimatica';
import Programing from './pages/Alonso/Programing';
import Ranking from './pages/Alonso/Ranking';
import Mk_2 from './pages/Mk_2';
import Mk_4_5 from './pages/Mk_4_5';
import Mk_12 from './pages/Mk_12';
import RegistroPage from './pages/RegistroPage'
import Principal from './pages/Principal'
import ListaResena from './pages/ListaResena'
import HistorialOrden from './pages/HistorialOrden'
import Surprise from './pages/Surprise';
import Main from './pages/luis/rankingtotalcomponentes/Main'
import Carrito from './pages/luis/carrito/Carrito'
import Building from './pages/luis/building/Building'
import Mockup21 from './pages/Mockup21';
import Prueba from './pages/Alonso/Prueba';
import Product from './pages/Alonso/Product';
import Shop from './pages/Alonso/Shop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter><Routes>
      <Route path='/' element={<Busqueda />}/>
      <Route path='/Gamming' element={<Gamming />}/>
      <Route path='/Ofimatica' element={<Ofimatica />}/>
      <Route path='/Programing' element={<Programing />}/>
      <Route path='/Requets' element={<Requets />}/>
      <Route path='/Ranking' element={<Ranking />}/>
      <Route path='/Busqueda' element={<Busqueda />}/>
      <Route path='/Login' element={<Mk_2 />}/>
      <Route path='/formularioOne' element={<Mk_4_5 />}/>
      <Route path='/Componentes' element={<Mk_12 />}/>
      <Route path='/Registro' element={<RegistroPage />}/>
      <Route path='/Principal' element={<Principal />}/>
      <Route path='/ListaResena' element={<ListaResena />}/>
      <Route path='/HistorialOrden' element={<HistorialOrden />}/>
      <Route path='/Surprise' element={<Surprise />}/>
      <Route path='/Main' element={<Main />}/>
      <Route path='/Carrito' element={<Carrito />}/>
      <Route path='/Building' element={<Building />}/>
      <Route path='/Resena' element={<Mockup21 />}/>
      <Route path='/Prueba' element={<Prueba />}/>
      <Route path='/Product' element={<Product />}/>
      <Route path='/Shop' element={<Shop />}/>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
