import {BoxCentral, Card, Imagem, BoxCard} from "./styles"
import {useState, useEffect} from 'react'
import Carrinho from "./Carrinho"
import Filtro from "./Filtro"

function Home (props){

  const produtos = [{
    id: 1,
    nome: "Baby-Yoda Star Wars",
    preco: 222.99,
    imagem: "https://m.media-amazon.com/images/I/71-RNACX5hL._AC_UL320_.jpg",

  },{
    id: 2,
    nome: "Navio Espacial e Space Rover",
    preco: 114.13,
    imagem: "https://m.media-amazon.com/images/I/51UqOzx2ZpL._AC_UL480_FMwebp_QL65_.jpg",

  },{
    id: 3,
    nome: "LEGO Aventura Espacial",
    preco: 309.90,
    imagem: "https://m.media-amazon.com/images/I/81Dd9Mn412L._AC_UL480_FMwebp_QL65_.jpg",

  },{
    id: 4,
    nome: "Buzz Lightyear Disney Pixar Nave Espacial",
    preco: 99.91,
    imagem: "https://m.media-amazon.com/images/I/61ijJEqzgsL._AC_UL480_FMwebp_QL65_.jpg",

  },{
    id: 5,
    nome: "Kit de Construção LEGO Star Wars",
    preco: 318.36,
    imagem: "https://m.media-amazon.com/images/I/81mh4nC99TL._AC_UL480_FMwebp_QL65_.jpg",

  },{
    id: 6,
    nome: "Onibus Espacial Space Explorer",
    preco: 119.17,
    imagem: "https://m.media-amazon.com/images/I/618tlTVGNAL._AC_UL480_FMwebp_QL65_.jpg",
  }]
 
  const [pesquisa, setPesquisa] = useState("")
  const [valorMinimo, setValorMinimo] = useState("")
  const [valorMaximo, setValorMaximo] = useState("")
  const [ordem, setOrdem] = useState("") 

  const produtosFiltradosTela = produtos
  .filter((produto) => produto.nome.includes(pesquisa))
  .filter((produto) => produto.preco >= valorMinimo)
  .filter((produto) => {return valorMaximo ? produto.preco <= valorMaximo:produto})
  .sort((a,b) =>{
    switch(ordem){
      case "Maior":
        if (a.preco < b.preco){
          return 1
        }else{
          return -1
        }
      case "Menor":
        if(a.preco<b.preco){
          return -1
        }else{
          return 1
        }
    }
  })
  
    const onChangeCarrinho = (event)=>{
      props.setCarrinho(event.target.value)
    }

    const onChangeOrdem =(event)=>{
      setOrdem(event.target.value)
    }

    //FUNÇÃO PARA COMPRA DE PRODUTOS NO CARRINHO
    const compraProduto = (produto) =>{
      const novoCarrinho = [...props.carrinho]
      const produtoAdicionado = produto
      const produtoExistente = novoCarrinho.find((produto)=>{
          return produto.id === produtoAdicionado.id 
      })
          if (produtoExistente){
            produtoExistente.quantidade++
            produtoExistente.precototal = produtoExistente.quantidade * produtoExistente.preco
          }else{
            novoCarrinho.push({...produtoAdicionado, quantidade: 1, precototal: produtoAdicionado.preco})
          } 
        props.setCarrinho(novoCarrinho)
    }

    //HOOK UTILIZADO PARA ARMAZENAR OS DADOS DO CARRINHO NO LOCALSTORAGE
    useEffect(() => {
          if(props.carrinho.length>0){
          const listaStringCarrinho = JSON.stringify(props.carrinho)
          localStorage.setItem("carrinho",listaStringCarrinho)
        }
        },[props.carrinho])

     //HOOK UTILIZADO PARA CARREGAR OS DADOS DO CARRINHO DO LOCALSTORAGE PARA A TELA
    useEffect(() => {
        const novoCarrinho = JSON.parse(localStorage.getItem("carrinho"))
          if(novoCarrinho !== null){
            props.setCarrinho(novoCarrinho)
          }   
    },[])
   

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
          <div className="boxcentral-topo">
            <div>
            <h3>
              Resultado da busca:
            </h3>
            <p>
              {produtosFiltradosTela.length} produtos 
            </p>
            </div>
            <div>
            <select value={ordem} onChange={onChangeOrdem} className="boxcentral-topo-select">
              <option value="">Ordenar por</option>
              <option value="Maior">Preço: do maior para o menor</option>
              <option value="Menor">Preço: do menor para o maior</option>
            </select>
            </div>
          </div>
        <BoxCard>

          {produtosFiltradosTela
          .map((produto, index)=>{
            return(
            <Card key={index}>
            <div>
                <img src={produto.imagem} alt="Produto-Loja"/>
            </div>
            <div>
                <span>{produto.nome}</span><br/>
                <h3>R$ {produto.preco.toFixed(2)}</h3><br/>
                <button onClick={()=>compraProduto(produto)} onChange={onChangeCarrinho}>Comprar</button>             
            </div>
            </Card>)
          })}

        </BoxCard>
        </BoxCentral>
        <Carrinho
        cesta={props.carrinho}
        setCesta={props.setCarrinho}
        carrinhoCompleto={props.mudarTela}
        />
        </>
    )
}

export default Home