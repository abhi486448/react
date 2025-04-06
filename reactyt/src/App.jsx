import React from 'react'

const App = () => {

  const getDate =()=>{
    console.log("Hello")
  }
  return (
    <div className='p-10'>
      <button onClick={getDate} className='active:scale-90 bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded'>Get Data</button>
      <div className='p-5 mt-5 bg-black'>

      </div>
    </div>
  )
}

export default App