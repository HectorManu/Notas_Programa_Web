// import React from 'react'
// import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import Tabla from './Tabla'


// // const root1 = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   // <Car color = "rojo"/> SOLO PONEMOS UN RENDER A LA VEZ
// //   <Tabla />

// // );

// // function Tabla(props) {
// //   return <h2>I am a {props.color} Car!</h2>;
// // }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Tabla color="red"/>);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
// import Tabla from './Tabla.jsx';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Tabla />);

function Garage() {




  return (
    <>
      <center>
        <h1>Tabla de Multiplicar</h1>
        <form onSubmit={ev => {
          ev.preventDefault();
          const valor = ev.target.valor.value;
          multiplicar(valor);
        }}>
          <label>Tú número: </label>
          <input
            type="number"
            name="valor"
            placeholder='Valor'
            autoComplete="off" />
          <button type='submit'>Generar Tabla</button>
          <div>
            <table border={1} id='div1'></table>
          </div>


        </form>
      </center>
    </>
  );
}

function multiplicar(multiplo) {
  console.log(typeof (multiplo));
  const mul = parseInt(multiplo);
  console.log(typeof (mul))
  console.log(mul)
  document.getElementById("div1").innerHTML = "";
  if (multiplo != 0) {
    let resultados = [];
    for (let index = 0; index < 10; index++) {
      resultados[index] = mul * (index + 1);
      document.getElementById('div1').innerHTML += "<tr><td>" + mul + " * " + (index + 1) + " = </td><td>" + resultados[index] + "</td></tr>";
    }
    return;

  };
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);