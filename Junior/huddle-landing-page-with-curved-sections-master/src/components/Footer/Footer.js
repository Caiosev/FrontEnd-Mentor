import React from 'react'
import * as S from './style'
import logo from '../../images/logo.svg'

export default function Footer() {
  return (
    <S.Footer>
        <div className='content'>
            <div>
                <h2>NEWSLETTER</h2>
                <p>To recieve tips on how to grow your community, sign up to our weekly newsletter,
                    We'll never send you spam or pass on your email adress
                </p>
                <input type='text'></input>
                <button>Subscribe</button>
            </div>
            <div>
                <img src={logo}></img>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
            </div>
            <img></img>
            <p>Phone: +1-543-123-4567</p>

            <img></img>
            <p>example@company.com</p>

            <div className='socials'>

            </div>
        </div>
    </S.Footer>
  )
}
