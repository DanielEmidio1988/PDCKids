
import {createGlobalStyle} from "styled-components"
import {Container} from "./Components/styles"
import MainPage from './Components/MainPage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'

export const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
  font-family: 'Montserrat', sans-serif;
}

li{
  list-style: none;
}`

function App() {
  return (
    <>
    <GlobalStyled/>
    <Header/>
    <Container>
    <MainPage/>
    </Container>  
    <Footer/>  
    </>
  );
}

export default App;
