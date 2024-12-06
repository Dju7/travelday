'use client'
import React, {ReactNode, useState} from 'react'
import { PiCalendarCheckDuotone } from "react-icons/pi";


interface Booking {
  lodgeName: React.ReactNode;
  nights: string;
  lodgeReservation: string;
  lodgePrice: string;
}

interface LodgeBoxProps {
  children: React.ReactNode;
  updateBooking: (newBooking: Booking) => void;
}

function LodgeBox({children, updateBooking}: LodgeBoxProps) {
const [validate, setvalidate] = useState(false)
const [nights, setNights] = useState('')
const [lodgeReservation, setLodgeReservation] = useState('use client')
const [lodgePrice, setLodgePrice] = useState('')


console.log('name', children)

const handleSubmit = () => {
  if (nights  && lodgePrice && lodgeReservation) {
    const newBooking: Booking = {
      lodgeName: children, 
      nights: nights,
      lodgeReservation: lodgeReservation,
      lodgePrice: lodgePrice
    };
    updateBooking(newBooking)
    setvalidate(!validate)
    
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
        <div className='flex gap-4 items-center'>
          <button className='h-8 mt-4 w-24  bg-blue-800 text-white shadow-lg shadow-blue-500 hover:bg-green-400' type='button' onClick={handleSubmit}>Valider</button>
          <div className=' w-12 mt-4'>
              {validate ? <PiCalendarCheckDuotone className='text-green-700 text-4xl'/> : <PiCalendarCheckDuotone className='text-red-700 text-4xl'/>}
          </div>
        </div>
      </form>
    </div>
  )
}

export default LodgeBox
