'use client'
import { signOut } from 'next-auth/react'


function loggedOut() {
  return (
    <>
    <p 
    className='text-xl text-blue-700 cursor-pointer hover:text-red-500'
    onClick={() => signOut({ callbackUrl: '/' })}
    >
      Deconnexion
    </p>
   </>
  )
}

export default loggedOut