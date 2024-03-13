'use client'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <section>
      <div className='h-full w-full p-4 flex flex-col justify-center items-center gap-2'>
         <div className='h-[35%] w-full bg-yellow-400 rounded-xl flex flex-col gap-4 justify-center items-center'>
            <h3 className='text-4xl'>Ou voulez-vous allez ?</h3> 
            <div className='h-12 w-[60%] flex gap-2'>
              <input className='w-[60%] border border-black bg-white'/>
              <button className='p-1 w-[40%] bg-gray-200 border border-black'>Valider</button>
            </div>
         </div>
         <div className='h-[65%] w-full rounded-xl flex flex-col gap-4 justify-center items-center '>
          <Link className='h-10 w-52 p-2 border border-black bg-gray-200 text-center' href='/board/itineraire'>Valider cette destination</Link>

         </div >


      </div>
    </section>
  )
}
