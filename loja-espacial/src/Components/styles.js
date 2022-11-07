import styled from "styled-components"

export const Card = styled.div`
    border: 1px solid black;
    height: 360px;
    width: 250px;
    display: flex;
    flex-direction: column;
    background-color: yellow;
`
export const BoxCard = styled.div`
    display: flex;
    width: 100%;
    align-center: center;
    justify-content: center;
    gap: 10px;
    background-color: white;
    flex-wrap: wrap;
    `

export const Imagem = styled.img`
    width: 100%;
    height: auto;  
`
export const Container = styled.div`
    width: 100%;
    display: flex;
`
export const BoxLateral = styled.div`
    width: 15%;
    background-color: orangered;
    padding-left: 10px;
`

export const BoxCentral = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-center: center;
    justify-content: center;
    gap: 10px;
    background-color: orange;
    flex-wrap: wrap;
`