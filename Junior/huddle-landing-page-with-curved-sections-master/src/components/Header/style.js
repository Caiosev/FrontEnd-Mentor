import styled from 'styled-components'
import { Variables as V } from '../../styled.var'


export const Header = styled.header`
    display: flex;
    width: 90vw;
    margin: 15px auto 100px auto;
    height: 45px;
    justify-content: space-between;
    align-items: center;
    
    img{
        width: 100px;
        height: 18px;
    }
    button{
        
        padding: 15px;
        height: 22px;
        border:${V.Pink} 1px solid;
        border-radius: 20px;
        display: flex;
        align-items: center;
        font-family: ${V.OpenSans};
        color: ${V.Pink};
        background-color: white;
       
    
    }


`