function Saludo({ mensaje,numero, unaFuncion, funcionDiferente }) {
    return (
        <>
            <h2>{ mensaje }</h2>
            <p>{ numero }</p>
            <button onClick={ unaFuncion }>Aumentar Numero</button>
            <button onClick={ funcionDiferente }>Reiniciar Numero</button>
        </>
    )
}

export default Saludo