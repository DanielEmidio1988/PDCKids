import {BoxLateral} from "./styles"
import Home from "./Home"

function Carrinho (props){

    let totalCarrinho = 0

    const somaCarrinho = ()=>{
        for (let i = 0;i<props.cesta;i++){
            totalCarrinho =+ props.cesta[i].preco  
            console.log("Preço", props.cesta[i].preco)  
        }
        console.log("Total carrinho", totalCarrinho)
        return totalCarrinho
    }

    const removeItem = (produto)=>{
        const buscaItem = props.cesta.filter((item) => item !== produto)
        props.setCesta(buscaItem)
    }

    return(
        <BoxLateral>
        <h2>Carrinho:</h2>
        
            {props.cesta.map((produto,index)=>{
            return(
                <div key={index}>
                <p><span>{produto.nome} </span><span> {produto.preco}</span> <button onClick={()=>removeItem(produto)}>Remover</button></p>
                </div>
            )
            
        })}
        
        {/* <p>{props.cesta.nome}</p> */}
        {/* Inserir aqui os dados dos produtos que serão carregados */}
        {/* <p>Valor total: R$ {totalCarrinho}</p>  */}
        <p>Valor total: R$ {somaCarrinho()}</p> 
        </BoxLateral>
    )
}

export default Carrinho