import './card.css'
function Perfil({ nombre, edad, pais }){
    return (
        <div className="card">
            <h2>{ nombre }</h2>
            <p>{ edad }</p>
            <p>{ pais }</p>
        </div>
    )
}

export default Perfil