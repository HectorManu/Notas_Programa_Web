import Car from './Car'

function Garage() {
    const unauto=[{ marca : "ford", color : "magenta"},{maca : "porch", color : "cyan"},{marca :"Dodge", color :"carmín"}];

    return(
        <div>
            <ul>
                <li><Car unauto = {unauto[0]}></Car></li>
                <li><Car unauto = {unauto[1]}></Car></li>
                <li><Car unauto = {unauto[2]}></Car></li>
            </ul>
        </div>
    );
    
}
export default Garage;
// ponemos aquí que poner esto siempre ya que va a rescibir una propierad 