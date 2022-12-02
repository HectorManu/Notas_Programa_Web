import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Unonuevo from "./pages/Unonuevo";
import Garage from "./pages/Garage";
import Lista from "./pages/Lista";
import Sumar from "./pages/Sumar";


export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="unonuevo" element={<Unonuevo />} />
          <Route path="garage" element={<Garage/>} />
          <Route path="lista" element={<Lista/>} />
          <Route path="sumar" element={<Sumar/>} />
          <Route path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);












//Día anterior a 21/11/2022


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// import Car from './Car'
// import Garage from './Garage'
// import Football from './Football'

// function FuePenal() {
//   return <h1>Sí Fue penal</h1>;
// }

// function NoFuePenal() {
//   return <h1>No Fue penal</h1>;
// }

// function Penal(props) {
//   const fuePenal = props.fuePenal;
// //   if (fuePenal) {
// //     return <FuePenal/>;
// //   }
// //   else return <NoFuePenal/>;

//   return fuePenal ? <FuePenal/> : <NoFuePenal/>;
  
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Penal fuePenal = {true} />
//     //<Football/>
//);

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
