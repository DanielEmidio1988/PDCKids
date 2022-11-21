import Home from "./Main/Home"
import Header from './Header/Header'
import Footer from './Footer/Footer'
import CarrinhoCompleto from "./Main/CarrinhoCompleto"
import PedidoFinalizado from "./Main/PedidoFinalizado"
import { useState } from "react";
import {Container} from "./Main/styles"

function MainPage(){
    const [tela, setTela] = useState(1)
    const [carrinho, setCarrinho] = useState([])

    //FUNÇÃO QUE VAI "PUXAR" O VALOR QUE SERVIRÁ DE APOIO PARA A FUNÇÃO PARA RENDERIZAR TELA
    function mudarTela(valor){
        setTela(valor)
    }

    //FUNÇÃO PARA RENDERIZAR A TELA DO USUÁRIO
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
        <Header
        mudarTela={renderizaTela()}/>
        <Container>
        {renderizaTela()}
        </Container>
        <Footer/> 
        </>
    )
}

export default MainPage