import React from 'react'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="http://ie.linkedin.com/in/jake-young-34574110a" target="_blank">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/Jake1995y/" target="_blank">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/jake1995young/" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
