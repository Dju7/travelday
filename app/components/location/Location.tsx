'use client'
import React, {useState} from 'react'
import { utilsStore } from '@/store/utils';

interface Rent {
  isRent: boolean,
  vehicule?: string,
  modele?: string ,
  vehiculePrice?: string
}

function Rent() {
const [location, setLocation] = useState<Rent[]>([])
const [isRent, setIsRent ] = useState(false)
const [vehicule, setVehicule] = useState('')
const [modele, setModele] = useState('')
const [vehiculePrice, setVehiculePrice] = useState('')
const newUtils = utilsStore((state:any) =>state.updateLocation)


const handleRent = () => {
  if (isRent && vehicule && modele && vehiculePrice) {
    const newLocation: Rent = {
      isRent: isRent,
      vehicule: vehicule,
      modele: modele,
      vehiculePrice: vehiculePrice,
    };

    setLocation([ newLocation]);
    newUtils({ location: [newLocation] })
  } else {
    alert('SVP remplissez tous les champs');
  }
}


  return (
    <article className='flex flex-col w-[40%] h-full bg-blue-200'>
        <div className='h-6 text-yellow-400 bg-sky-500 text-center'>LOCATION VEHICULES</div>
        <div className='h-[30%] mt-6 w-full flex flex-col justify-center mt-4 items-center gap-4'>
          <label className='text-xl'>Location d'un véhicule ?</label>
          <input checked={isRent} onChange={(e) => setIsRent(e.target.checked)} type='checkbox'/>
          <select value={vehicule} onChange={(e) => setVehicule(e.target.value)} disabled={!isRent} className='w-[40%] mb-4 border border-blue-900 text-yellow-400 p-1 bg-blue-400 rounded-lg placeholder-yellow-400 outline-none text-center'>
            <option>Voiture</option>
            <option>Moto</option>
            <option>Bateau</option>
          </select>
        </div>
        <div className='h-[55%] w-full flex flex-col justify-center items-center gap-4'>
          <input value={modele} onChange={(e) => setModele(e.target.value)} disabled={!isRent} placeholder='Modèle: Dacia Sandero' className='w-[40%] text-center border border-blue-900 text-yellow-400 p-1 bg-blue-400 rounded-lg placeholder-gray-200 outline-none'/>
          <input value={vehiculePrice} onChange={(e) => setVehiculePrice(e.target.value)} disabled={!isRent} placeholder='prix: XXX $' className='w-[40%] text-center border border-blue-900 text-yellow-400 p-1 bg-blue-400 rounded-lg placeholder-gray-200 outline-none'/>
          <button onClick={handleRent} className=' w-16 border border-black bg-gray-200 p-2'>valider</button>
        </div>
        
    </article>
  )
}

export default Rent