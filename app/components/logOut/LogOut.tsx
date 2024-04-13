'use client'
import { signOut } from 'next-auth/react'


function loggedOut() {
  return (
    <>
    <p 
    className='text-xl text-blue-100 cursor-pointer hover:text-yellow-400'
    onClick={() => signOut({ callbackUrl: '/' })}
    >
      Deconnexion
    </p>
   </>
  )
}

export default loggedOut