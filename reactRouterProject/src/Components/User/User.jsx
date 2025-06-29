import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
      const {userId}=useParams()
  return (
    <div className='bg-gray-600 h-20 text-white text-2xl text-center'>User:{userId}</div>
  )
}

export default User