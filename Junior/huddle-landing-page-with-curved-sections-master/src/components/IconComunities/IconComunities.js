import React from 'react'
import * as S from './style'

export default function IconComunities({icon,num,p}) {
  return (
    <S.Container>
        <img src={icon} alt='comunities icon'></img>
        <h1>{num}</h1>
        <p>{p}</p>
    </S.Container>
  )
}
