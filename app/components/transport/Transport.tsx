'use client'
import React, { useState, useEffect} from 'react'
import { utilsStore } from '@/store/utils';
import { FaTrain, FaCar } from "react-icons/fa";
import { IoMdBoat, IoIosArrowForward } from "react-icons/io";
import { FaPlane } from "react-icons/fa6";

interface Transport {
  transportation: string,
  departure: string,
  departureHours: string,
  arrival: string,
  arrivalHours: string,
  transportReservation: string,
  transportPrice: string
}

function Transport() {
  const newUtils = utilsStore((state:any) =>state.updateTransport)
  const [selectedTransport, setSelectedTransport] = useState<string | null>(null);
  const [transport, setTransport] = useState<Transport[]>([])
  const [transportation, setTransportation] = useState('')
  const [departure, setDeparture] = useState('')
  const [arrival, setArrival] = useState('')
  const [departureHours, setDepartureHours] = useState('')
  const [arrivalHours, setArrivalHours] = useState('')
  const [transportReservation, setTransportReservation] = useState('use client')
  const [transportPrice, setTransportPrice] = useState('')

  const handleTransportSelection = (transportType: string) => {
    setSelectedTransport(transportType); 
    setTransportation(transportType); 
    
  };

  const handleTransportInfos = () => {
    if (transportation && departure && departureHours && arrival && transportReservation && transportPrice) {
      const newTransport: Transport = {
        transportation: transportation,
        departure: departure,
        departureHours: departureHours,
        arrival: arrival,
        arrivalHours: arrivalHours,
        transportReservation: transportReservation,
        transportPrice: transportPrice
      };

      const newTransportJSON = JSON.stringify(newTransport);
  
      setTransport([ newTransport]);
      newUtils({ transport: [newTransportJSON] })

    } else {
      alert('SVP remplissez tous les champs');
    }
  }

  return (
    <article className='flex flex-col w-[60%] h-full bg-blue-200'>
        <div className='h-6 text-yellow-400 bg-sky-500 text-center'>TRANSPORT</div>
        <div className='h-24 flex justify-center items-center gap-10 text-xl '> 
        <p className={` p-1 border border-blue-500 rounded-full text-4xl ${selectedTransport === 'avion' ? 'text-red-400 border border-red-400' : 'text-blue-500'}`} onClick={() => handleTransportSelection('avion')}> <FaPlane/></p>
        <p className={`p-1 border border-blue-500 rounded-full text-4xl ${selectedTransport === 'train' ? 'group text-red-400 border border-red-400' : 'text-blue-500'}`} onClick={() => handleTransportSelection('train')}> <FaTrain/></p>
        <p className={`p-1 border border-blue-500 rounded-full text-4xl ${selectedTransport === 'bateau' ? 'text-red-400 border border-red-400' : 'text-blue-500'}`} onClick={() => handleTransportSelection('bateau')}> <IoMdBoat/></p>
        <p className={`p-1 border border-blue-500 rounded-full text-4xl ${selectedTransport === 'voiture' ? 'text-red-400 border border-red-400' : 'text-blue-500'}`} onClick={() => handleTransportSelection('voiture')}> <FaCar/></p>
        </div>

        <div className='h-[50%] w-full flex justify-center items-center'>
          <div className='h-full w-[30%] flex flex-col justify-center items-center gap-4'>
            <input value={departure} onChange={(e)=>setDeparture(e.target.value)} placeholder='(aero)gare départ' className=' border border-blue-900 text-yellow-400 p-1 bg-blue-400 rounded-lg outline-none placeholder-gray-200'/>
            <input value={departureHours} onChange={(e)=>setDepartureHours(e.target.value)} type='time' className='bg-transparent w-[30%] outline-none'/>
          </div>
          <div className='w-[40%] h-full flex justify-center items-center'>
            <div className='h-4 w-4 rounded-full bg-blue-500'/>
            <div className='h-[2px] w-60 bg-blue-500'/>
            <div className='text-blue-500 text-5xl font-bold'><IoIosArrowForward/></div>
          </div>
          <div className='h-full w-[30%] flex flex-col justify-center items-center gap-4'>
            <input value={arrival} onChange={(e)=>setArrival(e.target.value)} placeholder='(aero)gare arrivée' className='border border-blue-900 text-yellow-400 p-1 bg-blue-400 rounded-lg  outline-none placeholder-gray-200'/>
            <input value={arrivalHours} onChange={(e)=>setArrivalHours(e.target.value)} type='time' className='bg-transparent w-[30%] outile-none'/>
          </div>
        </div>

        <div className='h-[20%] w-full flex justify-around items-center'>
          <div className='w-[30%]'>
          <label className=' mr-4'>N° de reservation:</label>
            <input value={transportReservation} onChange={(e)=>setTransportReservation(e.target.value)} className=" w-[40%] border border-blue-900 text-yellow-400 p-1 bg-blue-400 rounded-lg  outline-none placeholder-gray-200"/>
            </div>
            <div className='w-[30%]'>
          <label className='mr-4'>Prix(€):</label>
            <input placeholder='50' value={transportPrice} onChange={(e)=>setTransportPrice(e.target.value)} className=" w-[40%] border border-blue-900 text-yellow-400 p-1 bg-blue-400 rounded-lg  outline-none placeholder-gray-200"/>
            </div>
            <button onClick={handleTransportInfos} className='border border-black bg-gray-200 p-2'>valider</button>
        </div>
    </article>
  )
}

export default Transport
