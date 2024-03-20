import React from 'react'

export default function Header() {
  return (
    <header className='bg-gray-700 fixed top-0 h-12 w-full flex justify-between items-center z-20 '>
        <h2 className='text-2xl ml-4 text-cyan-300'><span className='font-bold text-3xl'>T</span>RAVEL<span className='font-bold text-3xl'>D</span>IARY</h2>
        <p className='text-2xl'>Utilisateur</p>
        <p className='text-2xl text-white mr-4'>Connexion</p>     
    </header>
  )
}
