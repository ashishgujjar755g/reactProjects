import React from 'react'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import {useDipatcher} from 'react-redux'

function LogoutBtn() {

const dispatch = useDipatcher()

const LogoutHandler = ( )=>
      authService.logout().then(()=>{dispatch(logout())}).catch((error)=>{throw error})

  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-b-full'>Logout</button>
  )
}

export default LogoutBtn