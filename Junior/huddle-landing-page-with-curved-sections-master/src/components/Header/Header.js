import logo from '../../images/logo.svg'
import React from 'react'
import * as S from'./style'

export default function Header() {
  return (
    <S.Header>
        <img src={logo} alt='Logo'></img>
        <button>Try it Free</button>
    </S.Header>
  )
}
