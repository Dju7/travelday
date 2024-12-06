'use client'
import React from 'react'
import Nav from '../nav/Nav'
import { useSession } from "next-auth/react";


 function UserBar() {
  const { data: session } = useSession();
  const username = session?.user?.username;

  // Vérifie si l'email existe pour générer l'avatar
  const placeholderImage = username
    ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`
    : 'https://api.dicebear.com/7.x/avataaars/svg?seed=default';


  return (
    <aside className='h-14 w-full lg:min-h-[92vh] lg:w-[10%] bg-indigo-300 bg-opacity-30  flex lg:flex-col justify-around items-center border border-white'> 
        <div className='h-[80px] w-[80px] rounded-full border-2 border-red-400 overflow-hidden bg-white/30'>

        <img src={placeholderImage} alt='avatar utilisateur' className='h-full w-full object-cover'/>
        </div>
        <div className='w-full h-[75vh] flex justify-center items-center'>
        <Nav />
        </div> 
    </aside>
  )
}

export default UserBar
