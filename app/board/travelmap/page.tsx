'use client'
import dynamic from 'next/dynamic';

export default function page() {
  const MapWithNoSSR = dynamic(() => import("@/app/components/mapGlobal/MapG"), {
    ssr: false
  });
  return (
    <section>
      <h3 className='text-3xl text-center mb-4'>Carte des voyages</h3>
      <div className='w-[97%] ml-5'>
      <MapWithNoSSR />
      </div>
    </section>
  )
}
