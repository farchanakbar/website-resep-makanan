import React from 'react'

function Layout(props) {
  return (
    <div className='w-[95%] mx-auto mt-10 rounded-sm p-2'>
      {props.children}
    </div>
  )
}

export default Layout