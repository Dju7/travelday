import Rent from '@/app/components/location/Location'
import Lodgings from '@/app/components/lodgings/Lodgings'
import Transport from '@/app/components/transport/Transport'
import React from 'react'

export default function page() {
  return (
    <section className='flex flex-col justify-center items-center bg-blue-100 bg-opacity-70 border-2 border-white gap-3'>
      <div className='h-10 w-full flex justify-center items-center'>
          <h3 className='text-4xl text-blue-600'>INFORMATIONS UTILES</h3>
      </div>
      <div className='h-[45%] w-[98%]  flex gap-4'>
      <Transport/>
      <Rent/>
      </div>
      <div className='h-[50%] w-[98%]'>
        <Lodgings/>

      </div>
      <div className='h-[8%] w-[98%]  flex justify-between items-center'>
        <p className='text-blue-500 text-2xl'>Budget minimal: 800$</p>
        <button className='h-[90%] w-[10%] bg-gray-200 text-black'>Créer voyage</button>
      </div>
    </section>
  )
}
