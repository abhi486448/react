import React, { useContext } from 'react'
import { DataContext } from '../context/Usercontext'

const Footer = () => {
    const user = useContext(DataContext)
  return (
    <div>
      <h1>Footer {user.city}</h1>
    </div>
  )
}

export default Footer
