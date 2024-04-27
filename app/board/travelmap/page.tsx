'use client'
import dynamic from 'next/dynamic';


export default function page() {
  const MapWithNoSSR = dynamic(() => import("@/app/components/mapGlobal/MapG"), {
    ssr: false
  });

 

  return (
    <section className='bg-blue-100 bg-opacity-40 border-2 border-white'>
      <div className='w-[99%] h-[93%]  mt-5 border border-blue-500 m-auto'>
      <MapWithNoSSR />
      </div>
    </section>
  )
}
