import React, { useContext } from 'react'
import Header1 from './components/Header1'
import Section from './components/Section'
import Footer from './components/Footer'
import { DataContext } from './context/Usercontext'


const App = () => {

  const data = useContext(DataContext)
  console.log(data)
  return (
    <div>
        <h1>This is App.jsx {data.username}</h1>
        <Header1 />
        <Section />
        <Footer />
    </div>
  )
}

export default App