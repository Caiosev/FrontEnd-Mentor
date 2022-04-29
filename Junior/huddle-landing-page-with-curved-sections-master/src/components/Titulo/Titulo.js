import React from 'react'
import * as S from './style'

export default function Titulo({titulo,subTitulo,btnText}) {
  return (
    <S.Sec>
       <h1>{titulo}</h1>
       {subTitulo ?  <p>{subTitulo}</p> : ''}
       <button>{btnText}</button> 
    </S.Sec>
  )
}
