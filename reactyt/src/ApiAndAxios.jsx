import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

//API calling and axios

const ApiAndAxios = () => {

  const [data, setData] = useState( [] )

  const getDate = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
    console.log(data)
  }

  useEffect(() => {
    getDate()
  

  }, [])
  
  return (
    <div className='p-10'>
      {/* <button onClick={getDate} className='active:scale-90 bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded'>Get Data</button> */}
      <div className='p-5 mt-5 bg-black'>
          {data.map(function(elem,idx){
            return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
              <img className='h-40' src={elem.download_url} alt="" />
              <h1>{elem.author}</h1>
            </div>
          })}
      </div>
    </div>
  )
}

export default ApiAndAxios