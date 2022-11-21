import {MainHeader, Imagem} from "./styleHeader"
import cart from "../../assets/shopping-cart.svg"
import logo from "../../assets/logo-header.png"
import logotitle from "../../assets/logo-title.jpg"
import heart from "../../assets/heart.svg"
import user from "../../assets/user.svg"


function Header(props){

    function alerta (){
        
        console.log("props",props)
    }

    return(
        <MainHeader>
            <div>
                <Imagem src={logo} alt="logo-astrodev"/>   
                        
            </div>
            <div>
            <img src={logotitle} alt="logo-pcdkids"/>   
            </div>
            <div>
                <img src={user} alt="user"/>
                <p>Olá,<br/>
                faça seu login ou cadastre-se</p>
            </div>
            <div>
                <img src={heart} alt="favoritos"/>
                <img src={cart} alt="carrinho" onClick={()=>props.mudarTela(2)}/>
            </div>

        </MainHeader>
    )
}

export default Header