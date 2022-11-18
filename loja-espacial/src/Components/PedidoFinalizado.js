import {ContainerFinalizado} from "./stylePedidoFinalizado"

function PedidoFinalizado(){

    const statusPedido = [{
        nome: "Pedido Aprovado",
        status: true,
    },{
        nome: "Pagamento Aprovado",
        status: true,
    },{
        nome: "Nota Fiscal Emitida",
        status: false,
    },{
        nome: "Pedido a Caminho",
        status: false,
    },{
        nome: "Entregue",
        status: false,
    }]

    return (
        <>
        <ContainerFinalizado>
            <div>
                <h1>Parabéns! Pedido Finalizado.</h1>
                <h3>Pedido #00000.00000</h3>
            </div>
            <div>
                <div>{statusPedido.map((status)=>{
                    return(
                        <div>
                            <p>{status.nome}</p>
                        </div>
                    )
                })}
                </div>
            </div>
            <div>
                <button>Troca ou Devolução</button>
                <button>Novo Pedido</button>
            </div>
        </ContainerFinalizado>
        
        </>
    )
}

export default PedidoFinalizado