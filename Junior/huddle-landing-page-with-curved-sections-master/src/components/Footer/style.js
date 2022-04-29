import styled from 'styled-components'
import { Variables as V } from '../../styled.var'

export const Footer = styled.footer`
    width: 100vw;
    height: 750px;
    background-color: #00252E;
    color: white;
    
    #curve{
        margin-top: -10%;
        filter: brightness(0) saturate(100%) invert(12%) sepia(21%) saturate(3433%) hue-rotate(155deg) brightness(95%) contrast(105%);
        width: 100vw;
        color:red;        
    }
    .content{
        margin: 20px;
    }
    h2{
        padding-top: 40px;
        font-size: 20px;
    }
    p{
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 30px;
    }
    input{
        width: 100%;
        height: 40px;
        border-radius: 10px;
        border: none;
       
    }
    button{
        width: 140px;
        height: 40px;
        background-color: ${V.Pink};
        border: 0;
        border-radius: 10px;
        color: white;
        margin-top: 12px;
        float: right;
        margin-bottom: 90px;
    }
    img{
        color: #fff;
        filter: invert(92%) sepia(100%) saturate(0%) hue-rotate(202deg) brightness(106%) contrast(106%);
        width: 53vw;
        margin-bottom: 15px;
    }

    .info{
        p{
            margin: 0%;
            margin-left: 10px;
        }
        img{
            width: 30px;
            height: 30px;
        }
        .tel-div,.email-div{
            display: flex;
            align-items: center;
        }
    }
    .socials{
        margin-top: 40px ;
        display: flex;
        justify-content: space-around;
        width: 120px;
        height: 30px;

        svg{
            height: 100%;
        }
    }

`