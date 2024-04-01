import React from 'react'

interface LodgingsProps {
  lodges: string[];
}

function Lodgings({lodges}: LodgingsProps ){

  return (
    <article className='flex flex-col w-full h-full bg-blue-200'>
        <div className='h-6 text-yellow-400 bg-sky-500 text-center'>HEBERGEMENTS</div>
        <div className='h-[95%] flex justify-center items-center gap-4 text-xl '> 
        {lodges.map((lodge) => <p key={lodge}>{lodge}</p>)}
        </div>

    </article>
  )
}

export default Lodgings
