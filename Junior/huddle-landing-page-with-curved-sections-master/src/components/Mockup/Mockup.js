import React from 'react'
import MockupUI from '../../images/screen-mockups.svg'
import * as S from './style'

export default function Mockup() {
  return (
    <S.Container>
        <img src={MockupUI} alt='mockup'></img>
    </S.Container>
  )
}
