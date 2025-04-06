import React, { useState } from 'react'

const formhandling = () => {

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(username)
    setUsername('')
    }

    const [username, setUsername] = useState('')

  return (
    <div>
        <form onSubmit={(e)=>{submitHandler(e) }}> 
            <input
            value={username}
            onChange={(e)=>{
              setUsername(e.target.value)
            }}
            className='px-4 py-3 text-xl m-5 bg-amber-50' type="text" placeholder='Enter Your Name' 
            />
            <button className='px-4 py-3 text-xl m-5 font-semibold bg-emerald-600 text-white'>Submit</button>
        </form>
    </div>
  )
}

export default formhandling