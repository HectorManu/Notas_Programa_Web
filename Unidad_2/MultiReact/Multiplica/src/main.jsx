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

function Car(props) {
  
  return <tr><td>{props.brand} * {(props.brand)} = </td><td>{props.brand}</td></tr>;
}

function Garage() {
  const cars = [1,2,3,4,5,6,7,8,9,10];
  for (let index = 0; index < 10; index++) {
    const resultado = cars[index]*(index+1);
    cars[index]=resultado;
  }

  const [search, setSearch] ="";


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
        type="text"
        name = "valor" 
        placeholder='Valor'
        autoComplete = "off"/>
        <button type='submit'>Generar Tabla</button>

        <table border={1}></table>
        
      </form>
      

      <table border={1}>
        <script>
          if (search!=) {
            
          }
        </script>
        {cars.map((car) => <Car brand={car} />)}
      </table>
      </center>
    </>
  );
}

const multiplicar2 = (valor) => {
  if(valor !=0)
    alert("no es cero "+valor);
  else alert("sí es cero");
  
}

function multiplicar(multiplo) {
  console.log(typeof(multiplo));
  const mul = parseInt(multiplo);
  console.log(typeof(mul))
  console.log(mul)
  if (multiplo!=0) {
    let resultados = [];
    const iteraciones = [1,2,3,4,5,6,7,8,9,10]
    for (let index = 0; index < 10; index++) {
      resultados[index] = mul*(index+1);
      console.log(resultados);
    }
    
  };
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage/>);