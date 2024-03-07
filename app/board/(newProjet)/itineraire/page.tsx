'use client'
import dynamic from 'next/dynamic';

export default function page() {
  const MapWithNoSSR = dynamic(() => import("@/app/components/map/Map"), {
    ssr: false
  });
  return (
    <section>
     <div className='flex justify-center items-center gap-6'>
        <div className='w-[40%]'>
           <h3 className='text-3xl text-center mb-4'>Choix d'itinéraire</h3>
        </div>
        <div className='w-[60%] mt-10 mr-4 '>
          <MapWithNoSSR />
        </div>
      </div>
    </section>
  )
}
