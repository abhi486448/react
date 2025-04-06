import React from 'react'
import NavPart2 from './NavPart2'

const Navbar = () => {
  return (
    <nav className='flex bg-emerald-950 items-center py-5 px-10 justify-between'>
          <h2 className='text-2xl'>sheriyans</h2>
          <NavPart2 />
      </nav>
  )
}

export default Navbar