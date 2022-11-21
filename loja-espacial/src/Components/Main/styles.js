import styled from "styled-components"

// #A94DF3 cor roxa
// background-color: #EAEAEA; - CINZA

export const Card = styled.div`
    border: 1px solid #EAEAEA;
    border-radius: 8px;
    height: 400px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    
    div:first-child{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60%;
        border-radius: 8px 8px 0 0;

        img{
            height: 180px;
            width: auto;
            max-width: 100%;

        }

    }

    div:last-child{
        height: 40%;
        border-radius: 0 0 8px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        span{
            font-size: 12px;
            width: 90%;
            text-align: center;
        }

        h3{
            font-size: 20px;
            color: #A94DF3;
        }

        button{
            background-color: #A94DF3;
            border-radius: 8px;
            color: white;
            width: 200px;
            height: 40px;
            border: none;
            font-weight: bold;
            transition: transform .3s;
        }

        button:hover{
            cursor: pointer;
            background-color: #AA7DFC;
            font-weight: light;
            transform: scale(1.1)
        }
    }

    :hover{
        border: #A94DF3 2px solid;
    }
`
export const BoxCard = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: white;
    flex-wrap: wrap;
    `
export const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: white;
    margin-bottom: 30px;
    justify-content: center;
`
export const BoxLateral = styled.div`
    width: 15%;
    padding-left: 10px;

    h2{
        color: #A94DF3;
    }

    input{
        border: 1px gray solid;
        border-radius: 4px;
        height: 20px;
        padding-left: 8px;
        background-color: white;
    }

    input:active{
        border: 1px #A94DF3 solid; 
    }

`

export const BoxLateralCarrinho = styled.div`
    width: 20%;
    padding-left: 10px;

    h2{
        color: #A94DF3;
    }

    button{
        background-color: #A94DF3;
        border-radius: 8px;
        font-size: 16px;
        color: white;
        width: 100%;
        height: 40px;
        border: none;
        transition: transform .3s;
    }

    button:hover{
        cursor: pointer;
        background-color: #AA7DFC;
        transform: scale(1.1);
    }

    div:hover{
        cursor: pointer;
        color: #A94DF3;
    }

    span{
        font-size: 12px;
    }

`

export const BoxCentral = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    align-center: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;

    .boxcentral-topo{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .boxcentral-topo-select{
        border-radius: 8px;
    }

`