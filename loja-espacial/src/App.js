
import './App.css';
import {createGlobalStyle} from "styled-components"
import {Container} from "./Components/styles"
import MainPage from './Components/MainPage';

export const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
}`

function App() {
  return (
    <>
    <GlobalStyled/>
    <Container>
    <MainPage/>
    </Container>    
    </>
  );
}

export default App;
