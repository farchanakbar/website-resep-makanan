import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className='w-full bg-[#E3C9C3] px-3 py-5'>
        <Link to={'/'}><h1 className='text-xl font-semibold text-black cursor-pointer'>Resep Makanan</h1></Link>
      </div>
    </>
  )
}

export default Header