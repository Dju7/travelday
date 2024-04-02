import React from 'react'

function LodgeBox({children}:any) {
  return (
    <div className='h-[70%] w-[90%] flex flex-col justify-center items-center shadow-xl bg-gray-200'>
        <p className='text-xl mb-2'>{children}</p>
        <label className='text-lg'>Nbr de nuit(s):</label>
        <input/>
        <label className='text-lg'>N° de reservation</label>
        <input/>
        <label className='text-lg'>Prix:</label>
        <input/> 
    </div>
  )
}

export default LodgeBox
