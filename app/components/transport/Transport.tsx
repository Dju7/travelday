import React from 'react'
import { FaTrain, FaCar } from "react-icons/fa";
import { IoMdBoat, IoIosArrowForward } from "react-icons/io";
import { FaPlane } from "react-icons/fa6";

function Transport() {
  return (
    <article className='flex flex-col w-[60%] h-full bg-blue-200'>
        <div className='h-6 text-yellow-400 bg-sky-500 text-center'>TRANSPORT</div>
        <div className='h-24 flex justify-center items-center gap-10 text-xl '> 
        <p className='p-1 border border-blue-500 rounded-full text-4xl text-blue-500'> <FaPlane/></p>
        <p className='p-1 border border-blue-500 rounded-full text-4xl text-blue-500'> <FaTrain/></p>
        <p className='p-1 border border-blue-500 rounded-full text-4xl text-blue-500'> <IoMdBoat/></p>
        <p className='p-1 border border-blue-500 rounded-full text-4xl text-blue-500'> <FaCar/></p>
        </div>

        <div className='h-[50%] w-full flex justify-center items-center'>
          <div className='h-full w-[30%] flex flex-col justify-center items-center gap-4'>
            <input placeholder='(aero)gare départ' className=' border border-blue-900 text-yellow-400 p-1 bg-blue-400 rounded-lg placeholder-yellow-400 outline-none'/>
            <input type='time' className='bg-transparent w-[30%] outline-none'/>
          </div>
          <div className='w-[40%] h-full flex justify-center items-center'>
            <div className='h-4 w-4 rounded-full bg-blue-500'/>
            <div className='h-[2px] w-60 bg-blue-500'/>
            <div className='text-blue-500 text-5xl font-bold'><IoIosArrowForward/></div>
          </div>
          <div className='h-full w-[30%] flex flex-col justify-center items-center gap-4'>
            <input placeholder='(aero)gare arrivée' className='border border-blue-900 text-yellow-400 p-1 bg-blue-400 rounded-lg placeholder-yellow-400 outline-none'/>
            <input type='time' className='bg-transparent w-[30%] outile-none'/>
          </div>
        </div>

        <div className='h-[20%] w-full flex justify-around items-center'>
          <div className='w-[30%]'>
          <label className=' mr-4'>N° de reservation:</label>
            <input className=" w-[40%] border border-blue-900 text-yellow-400 p-1 bg-blue-400 rounded-lg placeholder-yellow-400 outline-none"/>
            </div>
            <div className='w-[30%]'>
          <label className='mr-4'>Prix:</label>
            <input className=" w-[40%] border border-blue-900 text-yellow-400 p-1 bg-blue-400 rounded-lg placeholder-yellow-400 outline-none"/>
            </div>

        </div>
    </article>
  )
}

export default Transport
