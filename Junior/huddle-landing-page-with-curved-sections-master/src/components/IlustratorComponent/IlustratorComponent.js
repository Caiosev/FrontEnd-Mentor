import React from 'react'
import * as S from './style'

export default function IlustratorComponent({image,titulo,p}) {
  return (
    <S.Container>
        <img src={image}></img>
        <h1>{titulo}</h1>
        <p>{p}</p>
    </S.Container>
  )
}
