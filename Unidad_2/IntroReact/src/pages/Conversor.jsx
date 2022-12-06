function Conversor() {

    return (
        <>
            <center>
                <h1>Conversor de Unidades</h1><br/>
                <h1>Millas a kilometros</h1>
                <form onSubmit={ev => {
                    ev.preventDefault();
                    const valor = ev.target.valor.value;
                    convierte(valor);
                }}>
                    <label>Ingresa las millas: </label>
                    <input
                        id="lim"
                        type="text"
                        name="valor"
                        placeholder='Valor'
                        autoComplete="off" />
                    <button type='submit'>Convertir</button>
                    <h2 id="div1"></h2>
                    


                </form>
            </center>
        </>
    );
}

function convierte(milla) {
    
    const mul = parseFloat(milla);
    document.getElementById("lim").innerHTML =0;    
    document.getElementById("div1").innerHTML = "";
    if (milla != 0) {
        const resultado = mul*1.60934;
        document.getElementById('div1').innerHTML += "<br>"+mul+" millas = "+resultado+"kilometros";

        return;

    };
}

export default Conversor;