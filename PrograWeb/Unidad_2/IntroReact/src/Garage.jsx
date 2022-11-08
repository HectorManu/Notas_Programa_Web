import Car from './Car'

function Garage() {
    const autos=[{ marca : "ford", color : "magenta"},{maca : "porch", color : "cyan"},{marca :"Dodge", color :"carmín"}];

    return(
        <div>
            <ul>
                <li><Car unauto = {autos[0]}></Car></li>
                <li><Car unauto = {autos[1]}></Car></li>
                <li><Car unauto = {autos[2]}></Car></li>
            </ul>
        </div>
    );
    
}
export default Garage;
// ponemos aquí que poner esto siempre ya que va a rescibir una propierad 