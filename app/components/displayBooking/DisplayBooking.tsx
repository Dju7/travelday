import React from 'react'

export default function DisplayBooking({night, step, reservation, price, name}:any) {
  return (
    <div className='w-[98%] h-[220px] flex flex-col justify-center items-center text-blue-800 font-bold'>
        <div className='h-10 w-10 flex items-center justify-center bg-blue-100 border border-red-400'>{step}</div>
        <div className='h-6 w-[3px] bg-red-400 '/>
        <div className='h-[120px] w-full bg-blue-100 shadow-lg shadow-blue-700  flex  rounded-xl'>
          <div className='w-[30%] h-full flex flex-col justify-between items-center'>
            <p className='w-full h-10 text-sm p-2 text-yellow-400  text-center underline bg-blue-500'>Nbr de huit(s)</p>
            <p className='w-full text-center mb-8'>{night}</p>
          </div>
          <div className='w-[40%] h-full flex flex-col justify-between items-center'>
            <p className='text-sm p-2 h-10 w-full bg-blue-500 text-yellow-400 text-center underline'>Nom</p>
            <p className=' text-center mb-8'>{name || undefined}</p>
          </div>
          <div className='w-[30%] h-full flex flex-col justify-between items-center'>
            <p className='text-sm p-2 h-10 w-full bg-blue-500 text-yellow-400 text-center underline'>reservation</p>
            <p className='mb-8'>{reservation}</p>
            
          </div>
        </div>
        <div className='bg-yellow-400 p-1 shadow-lg shadow-blue-700 w-20 flex justify-center'>{price}€</div>
      
    </div>
  )
}
