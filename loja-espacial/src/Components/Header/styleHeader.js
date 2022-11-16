import styled from "styled-components"

export const MainHeader = styled.div`
    height: 16vh;
    width: 100%;
    // background-color: #C991FF;
    background-image: linear-gradient(180deg, #5A2455 0%, #A94DF3 100%);
    display: flex;
    justify-content: space-between;
    border-radius: 0 0 20px 20px;
    margin-bottom: 30px;
    color: white;

    div:first-child{
        width: 20%;

    }

    div:nth-child(2){
        display: flex;
        justify-content: center;
        align-items: center;


        img{
            border: 2px solid white;
            border-radius: 50%;
            padding: 8px;
            height:20px;
            margin-right: 8px;
        }
    }

    div:last-child{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        gap: 40px;
        
        
        img{
            height: 36px;
            transition: transform .3s;
        }

        img:hover{
            cursor: pointer;
            transform: scale(1.2)
        }

    }

` 

export const Imagem = styled.img`
    height: 22vh;
    width: auto;`
