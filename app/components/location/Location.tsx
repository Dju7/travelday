import React from 'react'

function Rent() {
  return (
    <article className='flex flex-col w-[40%] h-full bg-blue-200'>
        <div className='h-6 text-yellow-400 bg-sky-500 text-center'>LOCATION VEHICULES</div>
        <div className='h-[20%] w-full flex justify-center items-center'>
          <label>Type de véhicule: </label>
          <select className='w-[50%]'>
            <option>Voiture</option>
            <option>Moto</option>
            <option>Bateau</option>
          </select>
        </div>
        <div className='h-[55%] w-full flex justify-center items-center'>
            ici modèle + Prix

        </div>
    </article>
  )
}

export default Rent