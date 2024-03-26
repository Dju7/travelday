import React from 'react'

function Transport() {
  return (
    <article className='flex flex-col w-[60%] h-full bg-blue-200'>
        <div className='h-6 text-yellow-400 bg-sky-500 text-center'>TRANSPORT</div>
        <div className='h-14 flex justify-center items-center gap-4 text-xl '> 
        <p> A</p>
        <p> A</p>
        <p> A</p>
        <p> A</p>
        </div>
        <div className='h-[55%] w-full flex justify-center items-center'>
          Ici aerogare depart et arrivé
        </div>
        <div className='h-[20%] w-full flex justify-center items-center'>
            ici numero de reservation + prix

        </div>
    </article>
  )
}

export default Transport
