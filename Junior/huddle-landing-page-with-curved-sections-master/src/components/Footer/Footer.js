import React from 'react'
import * as S from './style'
import logo from '../../images/logo.svg'
import tel from '../../images/icon-phone.svg'
import email from '../../images/icon-email.svg'
import curve from '../../images/bg-footer-top-mobile.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare,faInstagramSquare,faTwitterSquare} from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <S.Footer>
         <img src={curve} id='curve'></img>
        <div className='content'>
           

            <div className='news-sub'>
                <h2>NEWSLETTER</h2>
                <p>To recieve tips on how to grow your community, sign up to our weekly newsletter,
                    We'll never send you spam or pass on your email adress
                </p>
                <input type='text'></input>
                <button>Subscribe</button>
            </div>

            <div className='huddle-desc'>
                <img src={logo}></img>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
            </div>
            <div className='info'>
                <div className='tel-div'>
                    <img src={tel}></img>
                    <p>Phone: +1-543-123-4567</p>
                </div>
                <div className='email-div'>
                    <img src={email}></img>
                    <p>example@company.com</p>
                </div>
            </div>
            <div className='socials'>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <FontAwesomeIcon icon={faInstagramSquare} />
            <FontAwesomeIcon icon={faTwitterSquare} />
            </div>
        </div>
    </S.Footer>
    
  )
}
