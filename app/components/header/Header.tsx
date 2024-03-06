import React from 'react'

export default function Header() {
  return (
    <header className='bg-white fixed top-0 h-12 w-full flex justify-between items-center border-b border-gray-400'>
        <h2 className='text-2xl ml-4'>TRAVELDAILY</h2>
        <p className='text-2xl'>Utilisateur</p>
        <p className='text-2xl mr-4'>Connexion</p>     
    </header>
  )
}
