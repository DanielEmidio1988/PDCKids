import {BoxLateral} from "./styles"
import Home from "./Home"

function Filtro(props){

    const handleNomeSearch = (event)=>{
        props.setPesquisa(event.target.value)
    }

    const handleMinSearch = (event)=>{
        props.setMinimo(event.target.value)
    }

    const handleMaxSearch = (event)=>{
        props.setMaximo(event.target.value)
    }

    return (
        <>
        <BoxLateral>
        <h2>Filtros</h2>
        <p>Valor minimo:</p>
        <input type="text" className="Input-Dados" value={props.minimo} onChange={handleMinSearch}/>
        <p>Valor maximo:</p>
        <input type="text" className="Input-Dados" value={props.maximo} onChange={handleMaxSearch}/>
        <p>Busca por nome:</p>
        <input type="text" className="Input-Dados" value={props.pesquisa} onChange={handleNomeSearch} />
        </BoxLateral>
        </>
    )
}

export default Filtro