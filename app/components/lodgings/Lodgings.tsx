'use client'
import React, {useState} from 'react'
import LodgeBox from '../lodgeBox/LodgeBox';
import { utilsStore } from '@/store/utils';


interface LodgingsProps {
  lodges: string[];
}

interface Booking {
  nights: string;
  lodgeReservation: string;
  lodgePrice: string;
}

function Lodgings({lodges}: LodgingsProps ){
  const [booking, setBooking] = useState<Booking[]>([]);
  const newUtils = utilsStore((state:any) =>state.updateBooking)

  const updateBooking = (newBooking:Booking) => {
    setBooking(prevBooking => [...prevBooking, newBooking]);
    newUtils({ booking: [...booking, newBooking] })  
  };

 
  return (
    <article className='flex flex-col w-full justify-center items-center h-full bg-blue-200'>
        <div className='h-6 w-full text-yellow-400 bg-sky-500 text-center'>HEBERGEMENTS</div>
        <div className='h-[330px] w-[95%] flex flex-col lg:flex-row justify-center items-center gap-4 text-xl '> 
          {lodges.map((lodge, id) => (         
            <LodgeBox key={id} updateBooking={updateBooking}>         
              {lodge}          
            </LodgeBox>      
          ))}        
        </div>
    </article>
  )
}

export default Lodgings
