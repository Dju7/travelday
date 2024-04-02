import React from 'react'
import LodgeBox from '../lodgeBox/LodgeBox';

interface LodgingsProps {
  lodges: string[];
}

function Lodgings({lodges}: LodgingsProps ){

  return (
    <article className='flex flex-col w-full justify-center items-center h-full bg-blue-200'>
        <div className='h-6 w-full text-yellow-400 bg-sky-500 text-center'>HEBERGEMENTS</div>
        <div className='h-[95%] w-[95%] flex justify-center items-center gap-4 text-xl '> 
        
        {lodges.map((lodge) => <LodgeBox key={lodge}>{lodge}</LodgeBox>)}
        </div>

    </article>
  )
}

export default Lodgings
