import { useState } from 'react';
import ReactDOM from 'react-dom/client';


function Sumar() {
    const [num1, setNum1] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${num1}`)
    }

    return (
        //<form onSubmit={handleSubmit}>
        <form >
            <label>Ingrese numero:
                <input
                    type="text"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />
            </label>
            <br></br>
            {/* <input type="submit" /> */}
        </form>
    )
}

export default Sumar;