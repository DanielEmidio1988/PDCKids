import {BoxLateral} from "./styles"

function Filtro(){
    return (
        <>
        <BoxLateral>
        <h2>Filtros</h2>
        <p>Valor minimo:</p>
        <input type="text" className="Input-Dados" value="0"/>
        <p>Valor maximo:</p>
        <input type="text" className="Input-Dados" value="0"/>
        <p>Busca por nome:</p>
        <input type="text" className="Input-Dados" value="0"/>
        </BoxLateral>
        </>
    )
}

export default Filtro