function Invitados() {

    return (
        <>
            <center>
                <h1>Invitados</h1><br />
                <form onSubmit={ev => {
                    ev.preventDefault();
                    limpia();
                }}>
                    <button type='submit'>Limpiar</button>
                </form>
                <br />
                <form onSubmit={ev => {
                    ev.preventDefault();
                    const valor = ev.target.valor.value;
                    convierte(valor);
                }}>
                    <label>Añade un invitado: </label>
                    <input
                        id="input"
                        type="text"
                        name="valor"
                        placeholder='Valor'
                        autoComplete="off" />
                    <button type='submit'>Agregar</button>


                    <div id="div1"></div>


                </form>

            </center>
        </>
    );
}

function convierte(milla) {

    // document.getElementById("div1").innerHTML = "";
    if (milla != null) {
        document.getElementById('div1').innerHTML += "<li>"+milla + "</li>";
    };
}
function limpia() {

    // document.getElementById("div1").innerHTML = "";
    document.getElementById('div1').innerHTML = "";
    document.getElementById('input').innerHTML = "";
}
export default Invitados;