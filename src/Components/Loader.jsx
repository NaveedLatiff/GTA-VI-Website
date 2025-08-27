import React from 'react'

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
    </div>
  )
}

export default Loader