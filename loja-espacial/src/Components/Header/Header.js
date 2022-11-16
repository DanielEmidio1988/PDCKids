import {MainHeader, Imagem} from "./styleHeader"
import cart from "../../assets/shopping-cart.svg"
import logo from "../../assets/logo-header.png"
import heart from "../../assets/heart.svg"
import user from "../../assets/user.svg"


function Header(){
    return(
        <MainHeader>
            <div>
                <Imagem src={logo} alt="logo-pcdkids"/>
            </div>
            <div>
                <img src={user} alt="user"/>
                <p>Olá, faça seu login ou cadastre-se</p>
            </div>
            <div>
                <img src={heart} alt="carrinho"/>
                <img src={cart} alt="carrinho"/>
            </div>

        </MainHeader>
    )
}

export default Header