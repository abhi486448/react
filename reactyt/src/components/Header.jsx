import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
        <h2 className='text-2xl'>sheryains <input className='text-black bg-white' type="text" /></h2>
        <div className='flex gap-10 text-lg underline'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contect'>Contect</Link>
            <Link to='/product'>Product</Link>
            {/* we use Link insted of anker tags to overcome relode in browser */}
        </div>
    </div>
  )
}

export default Header
