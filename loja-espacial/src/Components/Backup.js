import Produto from "./Produto"
import {BoxCentral, Card, Imagem} from "./styles"
import {useState} from 'react'

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

    console.log(produtos.length)
   
    return(
        <>
        <BoxCentral>
        <div>
          <input type="text" placeholder="teste1"/> 
          <input type="text" placeholder="teste1"/>
        </div>
        <div>
          {produtos.map((produto, index)=>{
            return (
            <Card key={index}>
            <div>
                <Imagem src={produto.imagem} alt="Produto-Loja"/>
            </div>
            <div>
                <span>{produto.nome}</span><br/>
                <span>R$ {produto.preco}</span><br/>
                <button>Comprar</button>

            </div>
              </Card>)

          })}

        </div>

        </BoxCentral>
        </>
    )
}

export default Home