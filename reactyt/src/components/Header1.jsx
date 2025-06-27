import React, { useContext } from 'react'
import { data } from 'react-router-dom'
import { DataContext } from '../context/Usercontext'

const Header1 = () => {
    const user = useContext(DataContext)
  return (
    <div><h1>Header1 {user.age}</h1></div>
  )
}

export default Header1