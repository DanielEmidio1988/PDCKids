import {BoxLateral} from "./styles"
import Home from "./Home"

function Carrinho (props){

    let totalCarrinho = 0

    const somaCarrinho = ()=>{
        for (let i = 0;i<props.cesta.length;i++){
            totalCarrinho += props.cesta[i].precototal
        }
        return
    }

    const removeItem = (produto)=>{
        const buscaItem = props.cesta.filter((item) => item !== produto)
        props.setCesta(buscaItem)
    }

    somaCarrinho()

    return(
        <BoxLateral>
        <h2>Carrinho:</h2>
        
            {props.cesta.map((produto,index)=>{
            return(
                <div key={index}>
                <p><span>X{produto.quantidade} </span><span>{produto.nome} </span><span> {produto.preco}</span><span> {produto.precototal}</span> <button onClick={()=>removeItem(produto)}>Remover</button></p>
                </div>
            )
            
        })}
        <p>Valor total: R$ {totalCarrinho}</p> 
        </BoxLateral>
    )
}

export default Carrinho