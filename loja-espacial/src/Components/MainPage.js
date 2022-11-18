import Home from "./Home"
import CarrinhoCompleto from "./CarrinhoCompleto"
import PedidoFinalizado from "./PedidoFinalizado";
import { useState } from "react";

function MainPage(){

    const [tela, setTela] = useState(1)
    const [carrinho, setCarrinho] = useState([])

    function mudarTela(valor){
        setTela(valor)
    }

    function renderizaTela (){
        switch(tela){
          case 1:
            return <Home carrinho={carrinho} setCarrinho={setCarrinho} mudarTela={mudarTela}/>;
          case 2:
            return <CarrinhoCompleto carrinho={carrinho} setCarrinho={setCarrinho} mudarTela={mudarTela}/>;
          case 3:
            return <PedidoFinalizado carrinho={carrinho} setCarrinho={setCarrinho} mudarTela={mudarTela}/>
          default:
            return <Home mudarTela={mudarTela}/>
        }
      }
    
    return (
        <>
        {renderizaTela()}
        </>
    )
}

export default MainPage