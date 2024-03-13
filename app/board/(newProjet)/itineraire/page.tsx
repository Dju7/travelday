'use client'
import Map from "@/app/components/map/Map"
import { LatLng } from "leaflet";
import { useState } from 'react';



export default function page() {
  const [newplace, setNewplace] = useState<LatLng | null>(null)
 
  return (
    <section>
     <div className='p-2 flex justify-center items-center gap-6'>
        <div className='w-[60%] mt-5 ml-4 border-2 border-blue-700  '>
          <Map geoloc={(newplace) => setNewplace(newplace)} />
        </div>
        <div className='w-[40%] h-[740px] flex flex-col'>
          <div className="w-full h-[50%] flex flex-col justify-center items-center border border-blue-700 rounded-xl">
             <h3 className='text-3xl text-center'>Choix d'itinéraire</h3>
             
             <form className="h-[90%] w-[95%] flex flex-col justify-center items-center gap-2">
             <label>Coordonnées</label>
              <div className="h-10 w-[90%] flex justify-center items-center border border-blue-700 bg-blue-200 rounded-xl">
               {newplace && (
                 <p className="text-lg ">{`Lat: ${newplace.lat} - Long: ${newplace.lng}`}</p>
                )}
                </div>
                <label>Lieu</label>
                <input/>
                <label>Description</label>
                <input />
                <button className="bg-gray-200 p-2 mt-4 border border-black">Ajouter marker</button>
             </form>
          </div>
          <div className="w-full h-[50%] flex flex-col gap-4">
              
          </div>
        </div>
        
      </div>
    </section>
  )
}