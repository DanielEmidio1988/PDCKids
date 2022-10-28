import {BoxCentral, Card, Imagem, Container} from "./styles"
import {useState} from 'react'
import Carrinho from "./Carrinho"
import Filtro from "./Filtro"

function Home (){

  const [produtos, setProdutos] = useState([{
    id: 1,
    nome: "Baby-Yoda Star Wars",
    preco: 222.99,
    imagem: "https://m.media-amazon.com/images/I/71-RNACX5hL._AC_UL320_.jpg"
  },{
    id: 2,
    nome: "Navio Espacial e Space Rover",
    preco: 114.13,
    imagem: "https://m.media-amazon.com/images/I/51UqOzx2ZpL._AC_UL480_FMwebp_QL65_.jpg"
  },{
    id: 3,
    nome: "LEGO Aventura Espacial",
    preco: 309.90,
    imagem: "https://m.media-amazon.com/images/I/81Dd9Mn412L._AC_UL480_FMwebp_QL65_.jpg"
  },{
    id: 4,
    nome: "Buzz Lightyear Disney Pixar Nave Espacial",
    preco: 99.91,
    imagem: "https://m.media-amazon.com/images/I/61ijJEqzgsL._AC_UL480_FMwebp_QL65_.jpg"
  },{
    id: 5,
    nome: "Kit de Construção LEGO Star Wars",
    preco: 318.36,
    imagem: "https://m.media-amazon.com/images/I/81mh4nC99TL._AC_UL480_FMwebp_QL65_.jpg"
  },{
    id: 6,
    nome: "Onibus Espacial Space Explorer",
    preco: 119.17,
    imagem: "https://m.media-amazon.com/images/I/618tlTVGNAL._AC_UL480_FMwebp_QL65_.jpg"
  }])
 
  const [carrinho, setCarrinho] = useState([""])

  const novoProduto = [{
    id: 6,
    nome: "Onibus Espacial Space Explorer",
    preco: 119.17,
    imagem: "https://m.media-amazon.com/images/I/618tlTVGNAL._AC_UL480_FMwebp_QL65_.jpg"
  }]

  
 

    // BACKUP PARA GUARDAR A QUANTIDADE DE ITENS 
    // console.log(produtos.length)

    const onChangeCarrinho = (event)=>{
      setCarrinho(event.target.value)
    }



    const compraProduto = (produto) =>{
      const adicionaCarrinho = produtos.filter((item)=> item !== produto)
      const novoItem = [...carrinho, produto]
      setCarrinho(novoItem)
    }

    // const testeDoCarrinho = ()=> {console.log("Teste do carrinho", carrinho) }
   
    return(
        <>
        <Filtro/>
        <BoxCentral>
        <div>
          <input type="text" placeholder="teste1"/> 
          <input type="text" placeholder="teste1"/>
          {/* <button onClick={testeDoCarrinho}>Teste</button> */}
        </div>
        <div>
          {/* Comando para renderizar todos os produtos da loja */}
          {produtos.map((produto, index)=>{
            return (
            <Card key={index}>
            <div>
                <Imagem src={produto.imagem} alt="Produto-Loja"/>
            </div>
            <div>
                <span>{produto.nome}</span><br/>
                <span>R$ {produto.preco}</span><br/>
                <button onClick={()=>compraProduto(produto)} onChange={onChangeCarrinho}>Comprar</button>
                
            </div>
              </Card>)

          })}

        </div>

        </BoxCentral>
        <Carrinho
        cesta={carrinho}
        />
        </>
    )
}

export default Home