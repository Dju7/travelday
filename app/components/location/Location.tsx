import React from 'react'

function Rent() {
  return (
    <article className='flex flex-col w-[40%] h-full bg-blue-200'>
        <div className='h-6 text-yellow-400 bg-sky-500 text-center'>LOCATION VEHICULES</div>
        <div className='h-[20%] w-full flex flex-col justify-center mt-6 items-center'>
          <label className='mb-4 text-xl'>Type de véhicule: </label>
          <select className='w-[40%] border border-blue-900 text-yellow-400 p-1 bg-blue-400 rounded-lg placeholder-yellow-400 outline-none text-center'>
            <option>Voiture</option>
            <option>Moto</option>
            <option>Bateau</option>
          </select>
        </div>
        <div className='h-[55%] w-full flex flex-col justify-center items-center mt-4'>
        <label className='mb-2 text-xl'>Modele : </label>
          <input placeholder='Dacia Sandero' className='w-[40%] text-center border border-blue-900 text-yellow-400 p-1 bg-blue-400 rounded-lg placeholder-gray-200 outline-none'/>
          <label className='mb-2 text-xl'>Prix : </label>
          <input placeholder='XXX $' className='w-[40%] text-center border border-blue-900 text-yellow-400 p-1 bg-blue-400 rounded-lg placeholder-gray-200 outline-none'/>

        </div>
    </article>
  )
}

export default Rent