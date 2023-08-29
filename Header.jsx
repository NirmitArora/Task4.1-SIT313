import React from 'react'
import { logo } from '../Constants/constant'

export const Header = () => {
  return (
    <>
      <img className='logo' src={logo} alt="No image found" />
      <p className='text'>SIT313 - Full-Stack Development: Secure Frontend Applications</p>
    </>
  )
}
