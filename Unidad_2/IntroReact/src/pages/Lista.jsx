import Estudiante from "./Estudiante";

const Lista= () => {
    const estudiantes = [
        {matricula:"E19081442", nombre:"Hector Manuel"},
        {matricula:"E19081443", nombre:"Buen Manuel"},
        {matricula:"E19081444", nombre:"Evil Manuel"},
    ];
    
    return (
        <table border="1">
            {estudiantes.map((unEstudiante)=><Estudiante key={unEstudiante.matricula} matricula={unEstudiante.matricula}   nombre={unEstudiante.nombre}/>)}
        </table>

    );
}

export default Lista;