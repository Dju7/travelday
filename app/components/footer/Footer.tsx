import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full h-[300px] bg-indigo-600 flex justify-center items-center">
        <div className='w-[80%] h-[90%] flex justify-between items-center'>
            <div className='w-[40%] flex flex-col justify-center items-center text-white gap-4 text-xl'>
                <p className='text-3xl'>TravelDiary</p>
                <p>A propos</p>
                <p>livre d'or</p>
                <p>Contact</p>

            </div>
            <div className='w-[40%] h-[60%] flex flex-col justify-between items-center text-white'>
                <p className='text-2xl'>LOGO</p>
                <p className='text-sm'>Copyright@2024 - Travel diary</p>

            </div>
        </div>

    </footer>
  )
}
