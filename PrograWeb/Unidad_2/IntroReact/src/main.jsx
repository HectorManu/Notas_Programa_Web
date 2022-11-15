import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Car from './Car'
import Garage from './Garage'
import Football from './Football'

function FuePenal() {
  return <h1>Sí Fue penal</h1>;
}

function NoFuePenal() {
  return <h1>No Fue penal</h1>;
}

function Penal(props) {
  const fuePenal = props.fuePenal;
//   if (fuePenal) {
//     return <FuePenal/>;
//   }
//   else return <NoFuePenal/>;

  return fuePenal ? <FuePenal/> : <NoFuePenal/>;
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Penal fuePenal = {true} />
    //<Football/>
);

// const root1 = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <Car color = "rojo"/> SOLO PONEMOS UN RENDER A LA VEZ
//   <Garage />
  
// );
// PARECE QUE SI PONGO ESTO NO ME FUNCIONA EL COMPONENTE DE ARRIBA 
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
