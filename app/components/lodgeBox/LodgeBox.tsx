'use client'
import React, {useState} from 'react'
import { utilsStore } from '@/store/utils';


interface Booking {
  nights: string;
  lodgeReservation: string;
  lodgePrice: string;
}

interface LodgeBoxProps {
  children: React.ReactNode;
  updateBooking: (newBooking: Booking) => void;
}

function LodgeBox({children, updateBooking}: LodgeBoxProps) {

const [nights, setNights] = useState('')
const [lodgeReservation, setLodgeReservation] = useState('use client')
const [lodgePrice, setLodgePrice] = useState('')




const handleSubmit = () => {
  if (nights  && lodgePrice) {
    const newBooking: Booking = {
      nights: nights,
      lodgeReservation: lodgeReservation,
      lodgePrice: lodgePrice
    };
    updateBooking(newBooking)
    
  } else {
    alert('SVP remplissez tous les champs');
  } 
  
};

  return (
    <div className='h-[80%] w-[90%] flex flex-col justify-center items-center shadow-xl bg-blue-400 text-yellow-200'>
        <p className='text-xl mb-2'>{children}</p>
      <form className='flex flex-col justify-center items-center'>
        <label className='text-lg'>Nbr de nuit(s):</label>
        <input className='h-6 text-blue-500' placeholder='3' value={nights} onChange={(e) => setNights(e.target.value)} />
        <label className='text-lg'>N° de reservation</label>
        <input className='h-6 text-blue-500' value={lodgeReservation} onChange={(e) => setLodgeReservation(e.target.value)} />
        <label className='text-lg'>Prix(€):</label>
        <input className='h-6 text-blue-500' placeholder='50' value={lodgePrice} onChange={(e) => setLodgePrice(e.target.value)} />
        <button className='h-8 mt-4 border border-black ' type='button' onClick={handleSubmit}>Valider</button>
      </form>
    </div>
  )
}

export default LodgeBox
