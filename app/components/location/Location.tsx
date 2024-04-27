'use client'
import React, {useState} from 'react'
import { utilsStore } from '@/store/utils';
import { PiCalendarCheckDuotone } from "react-icons/pi";

interface Rent {
  isRent: boolean,
  vehicule?: string,
  modele?: string ,
  vehiculePrice?: string
}

function Rent() {
const [validate, setvalidate] = useState(false)
const [location, setLocation] = useState<Rent[]>([])
const [isRent, setIsRent ] = useState(false)
const [vehicule, setVehicule] = useState('')
const [modele, setModele] = useState('')
const [vehiculePrice, setVehiculePrice] = useState('')
const newUtils = utilsStore((state:any) =>state.updateLocation)


const handleRent = () => {
  if (!isRent) {
    const newLocation: Rent = {
      isRent: isRent,
    };

    setLocation([newLocation]);
    newUtils({ location: [newLocation] });
  } else if (isRent && vehicule && modele && vehiculePrice) {
    const newLocation: Rent = {
      isRent: isRent,
      vehicule: vehicule,
      modele: modele,
      vehiculePrice: vehiculePrice,
    };

    setLocation([newLocation]);
    newUtils({ location: [newLocation] });
    setvalidate(!validate)
  } else {
    alert('SVP remplissez tous les champs');
  }
}

  return (
    <article className='flex flex-col w-[80%] lg:w-[40%] h-[350px] bg-blue-200'>
        <div className='h-6 text-yellow-400 bg-sky-500 text-center'>LOCATION VEHICULES</div>
        <div className='h-[30%] mt-6 w-full flex flex-col justify-center mt-4 items-center gap-4'>
          <label className='text-xl'>Location d'un véhicule ?</label>
          <input checked={isRent} onChange={(e) => setIsRent(e.target.checked)} type='checkbox'/>
          <select value={vehicule} onChange={(e) => setVehicule(e.target.value)} disabled={!isRent} className='w-[40%] mb-4 border border-blue-900 font-bold text-yellow-200 p-1 bg-blue-400 rounded-lg placeholder-yellow-200 outline-none text-center'>
            <option>-- Choisissez --</option>
            <option>Voiture</option>
            <option>Moto</option>
            <option>Bateau</option>
          </select>
        </div>
        <div className='h-[55%] w-full flex flex-col justify-center items-center gap-4'>
          <input value={modele} onChange={(e) => setModele(e.target.value)} disabled={!isRent} placeholder='Modèle: Dacia Sandero' className='w-[40%] text-center border border-blue-900 text-yellow-400 p-1 bg-blue-400 rounded-lg placeholder-gray-200 outline-none'/>
          <input value={vehiculePrice} onChange={(e) => setVehiculePrice(e.target.value)} disabled={!isRent} placeholder='prix en €, ex: 47' className='w-[40%] text-center border border-blue-900 text-yellow-400 p-1 bg-blue-400 rounded-lg placeholder-gray-200 outline-none'/>
          <div className='flex gap-14 items-center mt-6'>
            <button onClick={handleRent} disabled={!isRent} className=' w-32 border border-black bg-gray-200 p-2'>valider</button>
            <div className=' w-12'>
                {validate ? <PiCalendarCheckDuotone className='text-green-700 text-4xl'/> : <PiCalendarCheckDuotone className='text-red-700 text-4xl'/>}
              </div>
          </div>
        </div>
        
    </article>
  )
}

export default Rent