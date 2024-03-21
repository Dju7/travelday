'use client'
import React, { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

 const handleModal = () => {
  setIsOpen(!isOpen)
 }
  return (
    <header className='bg-[#2d3748] fixed top-0 h-12 w-full flex justify-between items-center z-20 '>
        <h2 className='text-2xl ml-4 text-cyan-300'><span className='font-bold text-3xl'>T</span>RAVEL<span className='font-bold text-3xl'>D</span>IARY</h2>
        <p className='text-2xl'>Utilisateur</p>
        <p className='text-2xl text-white mr-4 cursor-pointer hover:text-cyan-300' onClick={handleModal}>Connexion</p>  

        {/* MODAL */}
        {
          isOpen ? 
          <div className='fixed bg-gray-100 bg-opacity-90 top-12 right-0 h-[250px] w-[450px] flex flex-col justify-center items-center'>
            <form className='h-[90%] w-[90%] flex flex-col justify-center items-center gap-2'>
              <label className='text-blue-600'>EMAIL</label>
              <input className='w-[80%] h-6 border border-blue-600' />
              <label className='text-blue-600'>PASSWORD</label>
              <input className='w-[80%] h-6 border border-blue-600' />
              <button className='bg-blue-600 text-white p-2'>LOGIN</button>
            </form>
          </div>
          :
          ""
        }   
        
    </header>
  )
}
