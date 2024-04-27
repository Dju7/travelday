import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full h-[250px] bg-[#2b468b] flex justify-center items-center text-orange-400">
        <div className='w-[80%] h-[90%] flex justify-between items-center'>
            <div className='w-[40%] flex flex-col justify-center items-center gap-4 text-xl'>
                <p className='text-3xl'>TravelDiary</p>
                <p>A propos</p>
                <p>livre d'or</p>
                <p>Contact</p>

            </div>
            <div className='w-[40%] h-[60%] flex flex-col justify-between items-center'>
                <Image src="/logo.png" alt='logo' height={200} width={200}/>
                <p className='text-sm'>Copyright@2024 - Travel diary</p>

            </div>
        </div>

    </footer>
  )
}
