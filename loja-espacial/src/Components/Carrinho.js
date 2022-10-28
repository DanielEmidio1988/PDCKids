import {BoxLateral} from "./styles"
import Home from "./Home"

function Carrinho (props){
    console.log("Acessando a cesta",props.cesta)
    console.log("Acessando o nome", props.cesta.nome)

    return(
        <BoxLateral>
        <h2>Carrinho:</h2>
        
        <p>{props.cesta.nome}</p>
        {/* Inserir aqui os dados dos produtos que serão carregados */}
        <p>Valor total: R$</p> 
        </BoxLateral>
    )
}

export default Carrinho