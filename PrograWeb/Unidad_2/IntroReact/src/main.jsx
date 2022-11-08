import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Car from './Car'
import Garage from './Garage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Car color = "rojo"/> SOLO PONEMOS UN RENDER A LA VEZ
  <Garage />
  
);
// PARECE QUE SI PONGO ESTO NO ME FUNCIONA EL COMPONENTE DE ARRIBA 
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
