import styled from 'styled-components'
import { Variables as V } from '../../styled.var'

export const Footer = styled.footer`
    width: 100vw;
    height: 750px;
    background-color: #00252E;
    color: white;
    
    .content{
        margin: 20px;
    }
    h2{
        padding-top: 20px;
    }
    p{
        font-size: 12px;
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
    }
    img{
        color: #fff;
        filter: invert(92%) sepia(100%) saturate(0%) hue-rotate(202deg) brightness(106%) contrast(106%);

    }

`