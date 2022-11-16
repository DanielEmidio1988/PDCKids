import {MainFooter, Imagem} from "./styleFooter"
import github from "../../assets/logo-github.svg"
import linkedin from "../../assets/logo-linkedin.svg"
import logo from "../../assets/logo-footer.jpg"

function Footer(){
    return (

        <MainFooter>
            <div className="footer-dados">
                <div className="footer-introducao">
                    <Imagem src={logo} alt="logo-footer"/>
                    <br/><br/>
                    
                </div>

                <div className="footer-contatos">
                    <p><h3>Fale Conosco:</h3></p><br/>
                    <p><b>Telefone</b></p>
                    <p>9999-9999 | 0800-999-9999</p>
                    <p>Segunda a sexta das 8h às 22h, e aos sabados das 8h às 14h.</p>
                    <br/>
                    <p><b>faleconosco@pdckids.com.br</b></p>
                    <p>Dúvidas gerais, atendimento ao cliente</p>
                    <br/>
                    <p><b>imprensa@pdckids.com.br</b></p>
                    <p>Atendimento exclusivo para imprensa.</p>
                </div>

                <div className="footer-menu">
                        <ul>
                            <li>Quem somos</li>
                            <li>Carreiras</li>
                            <li>Nossas lojas</li>                       
                            <li>Seja um parceiro</li>
                            <li>Central de ajuda</li>
                        </ul>                            
                </div>
            </div>

            <div className="footer-daniel">

                <p>Desenvolvido com ❤️ por Daniel Emidio</p>
                <div>
                <img src={github} alt="icon-github"/>
                <img src={linkedin} alt="icon-linkedin"/>
                </div>
            </div>
        </MainFooter>
    )
}

export default Footer
