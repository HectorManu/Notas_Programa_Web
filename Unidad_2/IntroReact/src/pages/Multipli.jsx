function Multipli() {

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

export default Multipli;