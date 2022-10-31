import {BoxCentral, Card, Imagem, boxCard} from "./styles"
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
 
  const [carrinho, setCarrinho] = useState([])
  const [pesquisa, setPesquisa] = useState("")
  const [valorMinimo, setValorMinimo] = useState("")
  const [valorMaximo, setValorMaximo] = useState(9999)
  const [ordem, setOrdem] = useState("")
  
 
    // BACKUP PARA GUARDAR A QUANTIDADE DE ITENS 
    // console.log(produtos.length)

    const onChangeCarrinho = (event)=>{
      setCarrinho(event.target.value)
      console.log(event.target.value)
    }

    const onChangeOrdem =(event)=>{
      setOrdem(event.target.value)
      console.log(event.target.value)
    }

    const compraProduto = (produto) =>{
      const adicionaCarrinho = produtos.filter((item)=> item !== produto)
      const novoItem = [...carrinho, produto]
      setCarrinho(novoItem)
    }

    // const testeDoCarrinho = ()=> {console.log("Teste do carrinho", carrinho) }
   
    return(
        <>
        <Filtro
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        minimo={valorMinimo}
        setMinimo={setValorMinimo}
        maximo={valorMaximo}
        setMaximo={setValorMaximo}
        />
        <BoxCentral>
        <div>
          <span>Quantidade de Itens: {produtos.length}</span>
          <select value={ordem} onChange={onChangeOrdem}>
            <option value="">Ordenar</option>
            <option value="Maior">Preço: do maior para o menor</option>
            <option value="Menor">Preço: do menor para o maior</option>
          </select>
   
        </div>
        <boxCard>

          {produtos
          //Busca de produto pelo nome
          .filter((produto) => {return produto.nome.includes(pesquisa)})
          //filtrar produtos a partir do menor valor
          .filter((produto)=> {return produto.preco >= valorMinimo})
          //filtrar produtos a partir do menor valor
          .filter((produto)=> {return produto.preco <= valorMaximo})
          //Ordenar do maior e do menor
          .sort((a,b)=>{  
            switch(ordem){
              case "Maior":
                if(a.preco < b.preco){
                  return 1
                }else{
                  return -1
                }
              case "Menor":
                if(a.preco < b.preco){
                  return -1
                }else{
                  return 1
                }
              }
          })
          // Comando para renderizar todos os produtos da loja
          .map((produto, index)=>{
            return(
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

        </boxCard>

        </BoxCentral>
        <Carrinho
        cesta={carrinho}
        setCesta={setCarrinho}
        />
        </>
    )
}

export default Home