import {ContainerPedido, BoxPedido, ResumoPedido, BoxPedidoEspaco, BoxPedidoProdutos, BoxPedidoProdutosItens} from "./styledCarrinhoCompleto"
import {useState} from "react"

function CarrinhoCompleto(props){

    let totalCarrinho = 0
    let qtdTotalCarrinho = 0
    let totalCompra = 0
    let frete = 0
    let desconto = 0
    const [cupom, setCupom] = useState("")

    function onChangeCupom(event){
        setCupom(event.target.value)
    }


    const somaCarrinho = ()=>{
        for (let i = 0;i<props.carrinho.length;i++){
            totalCarrinho += props.carrinho[i].precototal
            qtdTotalCarrinho += props.carrinho[i].quantidade
        }
        return
    }

    somaCarrinho()

    const aumentaItem =(produto) =>{
        const carrinhoApoio = [...props.carrinho]
        for(let i=0;i<carrinhoApoio.length;i++){
            if(carrinhoApoio[i].id === produto.id){
            carrinhoApoio[i].quantidade = carrinhoApoio[i].quantidade + 1
            carrinhoApoio[i].precototal = carrinhoApoio[i].precototal + carrinhoApoio[i].preco
            }  
        }
        props.setCarrinho(carrinhoApoio)
    }

    const diminuiItem =(produto) =>{
        const carrinhoApoio = [...props.carrinho]
        console.log("Produto", produto)
        console.log("carrinhoApoio",carrinhoApoio)
        for(let i=0;i<carrinhoApoio.length;i++){
            if(carrinhoApoio[i].id === produto.id){
            carrinhoApoio[i].quantidade = carrinhoApoio[i].quantidade - 1
            carrinhoApoio[i].precototal = carrinhoApoio[i].precototal - carrinhoApoio[i].preco
            }       
        }
        const buscaItem = carrinhoApoio.filter((item) => item.quantidade > 0)
        props.setCarrinho(buscaItem)   
    }

    const calculaFrete = ()=>{        
        if(totalCarrinho > 200){
            totalCompra = totalCarrinho
        }else{
            frete = 50
            totalCompra = totalCarrinho + frete 
        } 
        return    
    }

    calculaFrete()

    function validaCupom(){
        const cupomPremiado = "@DEVLOVERS"
        if(cupom === cupomPremiado && totalCompra > 400){
            desconto = 200
            totalCompra = totalCompra - desconto
        }
        return
    }
    validaCupom()

    function finalizaPedido(){
        const zeraCarinho = props.carrinho.filter((item)=> item.quantidade < -1)
        props.setCarrinho(zeraCarinho) 
        props.mudarTela(3)
    }

    return (
        <>
        <ContainerPedido>
            <BoxPedido>
                <div>
                    <div><h2>Meu Pedido</h2></div>
                    <BoxPedidoEspaco>
                        <span>Produto</span><span></span><span>Qtd.</span><span>Preço</span>
                    </BoxPedidoEspaco>
                    <div>
                        {props.carrinho.map((produto,index)=>{
                        return(
                        <BoxPedidoProdutos key={index}>
                        {/* <p><span>X{produto.quantidade} </span><span>{produto.nome} </span><span> <b>{produto.precototal}</b></span><button onClick={()=>removeItem(produto)}>Remover</button></p> */}
                        <BoxPedidoProdutosItens><span><img src={produto.imagem} alt="produto-carrinho"/></span><span>{produto.nome}</span><span></span><span><h4 onClick={()=>diminuiItem(produto)}>-</h4> {produto.quantidade} <h4 onClick={()=>aumentaItem(produto)}>+</h4></span><span><h4>R$ {produto.precototal}</h4></span></BoxPedidoProdutosItens>
                        </BoxPedidoProdutos>
                        )        
                        })}
                    </div>
                    <div>
                        <div>
                            <p><h4>Cupom de Desconto:</h4></p>
                            <input value={cupom} onChange={onChangeCupom} placeholder="Insira seu cupom ou vale desconto"></input>
                        </div>
                        <div>
                            <select>
                            <option value="">Forma de Pagamento</option>
                            <option value="Boleto">Boleto Bancário</option>
                            <option value="Credito">Cartão de Crédito</option>
                            <option value="Pix">Pix</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={()=>props.mudarTela(1)}>Adicionar mais produtos</button>
                        </div>
                    </div>
                </div>
            </BoxPedido>

            <ResumoPedido>
                <div>
                    <div><h2>Resumo Pedido</h2></div>
                    <div><span>x{qtdTotalCarrinho} produto</span><span>R$ {totalCarrinho}</span></div>
                    <div><span>Taxa de Entrega</span><span>R$ {frete}</span></div>
                    <div><span>Desconto</span><span>R$ {desconto}</span></div>
                    <div><span><h3>Total</h3></span><span><h3>R$ {totalCompra}</h3></span></div>
                    <div><button onClick={()=>finalizaPedido()}>Continuar</button></div>
                </div>
            </ResumoPedido>

        </ContainerPedido>           
        </>
    )
}

export default CarrinhoCompleto