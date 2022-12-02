import { useState } from 'react';
import ReactDOM from 'react-dom/client';


function Sumar() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [suma, setSuma] = useState("");//Este sirve para el resultado

    const doSuma = (evento)=>{

        //para evitar la recarga 
        evento.preventDefault();
        let suma = Number(num1)+Number(num2);
        setSuma(suma);
        
        // Se necesita limpiear los cmpos num1 y num2
        setNum1("");
        setNum2("");

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${num1}`)
    }

    return (
        //<form onSubmit={handleSubmit}>
        <>
        <h1>sumar 2 números papu</h1>
            <form >
                <label>Ingrese numero 1:
                    <input
                        type="text"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                    />
                </label>
                <br></br>
                <label>Ingrese numero 2:
                    <input
                        type="text"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                    />
                </label>
                <br />
                <button onClick={doSuma}>Sumar</button>
                {/* <input type="submit" />  */}
            </form>
            <br />
            <h2>El restultado es papu: {suma}</h2>
        </>
    )
}

export default Sumar;