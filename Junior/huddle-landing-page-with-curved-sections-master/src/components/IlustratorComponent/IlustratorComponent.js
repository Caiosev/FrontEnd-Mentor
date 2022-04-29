import React from 'react'
import * as S from './style'

export default function IlustratorComponent({image,titulo,p,bgTop,bgBottom}) {
  return (
    <>
      <S.Bg className='bgs' id='bgTop'src={bgTop} style={{marginTop:'100px'}}></S.Bg>
        <S.Container>
        <S.Content>
            <img id='ilustration' src={image}></img>
            <h1>{titulo}</h1>
            <p>{p}</p>
        </S.Content>
      </S.Container>
      <S.Bg className='bgs' id='bgBottom' style={{marginBottom:'80px'}} src={bgBottom}></S.Bg>
    </>
  )
}
