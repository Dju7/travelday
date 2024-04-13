'use client'
import React, {useState, useEffect} from 'react'
import CardTrip from '../components/card/CardTrip';
import Image from 'next/image';
import Link from 'next/link';

interface Tour {
  id: string;
  title: string;
  date: string;
  duration: string;
  itinerary: any[];
  author: string;
  authorId: string;
  utils: string[];
}

function page() {
  const [tourData, setTourData] = useState<Tour[]>([]);

  useEffect( ()=> {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/tour/getTourAll')
        const tour = await response.json()
        setTourData(tour)

      } catch(error) {
        console.error(error)
      }
    }
    fetchData()

  }, [])

 console.log('donnée tourData', tourData)

 return (
  <section className='relative z-0 p-6 grid grid-cols-4 bg-blue-300 bg-opacity-30 border-2 border-white gap-4 overflow-hidden'>
    <Image src='/bousole.png' alt="dessin trajet" className='absolute top-[340px] left-[300px] opacity-60 z-1' height={700} width={1000} />
    {tourData.length > 0 ? (
        tourData.map((tourItem) => (
          <Link key={tourItem.id} href={`/board/${tourItem.id}`}>
            <CardTrip
              key={tourItem.id}
              title={tourItem.title}
              tourId={tourItem.id}
              date={tourItem.date}
              duration={tourItem.duration}
              docs={tourItem.utils}
            />
          </Link>
        ))
      ) : (
        <p className='text-white text-3xl'>Recherche de voyages ...</p>
      )}
  </section>
);
}

export default page
