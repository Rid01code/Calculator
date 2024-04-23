import React from 'react'

const Display = ({calVal}) => {
  return (
    <input className=' border-solid border-2 border-black rounded-lg w-11/12 h-1/6 mt-6 text-5xl ' type="text" value={calVal}
      readOnly/>
    
  )
}

export default Display