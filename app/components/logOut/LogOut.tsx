'use client'
import { signOut } from 'next-auth/react'
import { FaSignOutAlt } from "react-icons/fa";


function loggedOut() {
  return (
    <>
    <p 
    className='text-xl text-yellow-400 cursor-pointer hover:text-red-400'
    onClick={() => signOut({ callbackUrl: '/' })}
    >
     <FaSignOutAlt className='text-3xl lg:text-5xl'/> 
    </p>
   </>
  )
}

export default loggedOut