'use client'
import Map from "@/app/components/map/Map"
import { LatLng } from "leaflet";
import { SetStateAction, useState } from 'react';



export default function page() {
  const [newplace, setNewplace] = useState<LatLng | null>(null)
 
  return (
    <section>
     <div className='p-2 flex justify-center items-center gap-6'>
        <div className='w-[60%] mt-4 mr-4  '>
          <Map geoloc={(newplace) => setNewplace(newplace)} />
        </div>
        <div className='w-[40%]'>
           <h3 className='text-3xl text-center mb-4'>Choix d'itinéraire</h3>
           {newplace && (
            <p>{`Latitude: ${newplace.lat}, Longitude: ${newplace.lng}`}</p>
          )}
        </div>
        
      </div>
    </section>
  )
}