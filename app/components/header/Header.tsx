'use client'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default  function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { data: session, status } = useSession()

  
 const handleModal = () => {
  setIsOpen(!isOpen)
 }

 const login =  async (e: {currentTarget: any; preventDefault: () => any}) => {
  e.preventDefault();
  const form = e.currentTarget
  const formData = new FormData(form)
  const username = formData.get('username')
  const password=formData.get('password')
  const data = {
    username: username,
    password: password
  }
  const result = await signIn('credentials', {
    ...data,
    redirect: false,
  });
  if (result?.ok) { 
    alert("authentification réussi, vous allez être redirigé vers le Board dans quelques instants")
    router.push('/board');
    setIsOpen(!isOpen)
  } else {
    console.error("L'utilisateur n'existe pas. Veuillez vérifier vos informations d'identification.");
  }

 }
  return (
    <header className='bg-gradient-to-t from-[#2b468b] to-blue-500 fixed top-0 h-12 w-full flex justify-between items-center z-1000 '>
        <h2 className='text-2xl ml-4 text-[#fa9746]'><span className='font-bold text-3xl'>T</span>RAVEL<span className='font-bold text-3xl'>D</span>IARY</h2>
        <p className='text-3xl italic text-[#fa9746]'>{status === "authenticated" ? session.user.username : ""}</p>
        <p className='text-2xl text-cyan-400 mr-4 cursor-pointer hover:text-[#fa9746]' onClick={handleModal}>Connexion</p>  

        {/* MODAL */}
        {
          isOpen ? 
          <div className='fixed  bg-gray-100 bg-opacity-90 top-12 right-0 h-[250px] w-[450px] flex flex-col justify-center items-center'>
            <form onSubmit={login} className='h-[90%] w-[90%] flex flex-col justify-center items-center gap-2'>
              <label className='text-blue-600'>Username</label>
              <input name='username' type="text" className='w-[80%] h-6 border border-blue-600' />
              <label className='text-blue-600'>PASSWORD</label>
              <input name='password' type="password" className='w-[80%] h-6 border border-blue-600' />
              <button type='submit' className='bg-blue-600 text-white p-2'>LOGIN</button>
            </form>
          </div>
          :
          ""
        }   
        
    </header>
  )
}

