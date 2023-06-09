import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div id='home' className='w-full'>
        <Link to={'/'}>
          <h1 className='text-xl py-5 font-semibold text-center border-b-2 text-white cursor-pointer'>Makanan adalah simbol cinta ketika kata-kata tidak memadai😋</h1>
        </Link>
      </div>
    </>
  )
}

export default Header