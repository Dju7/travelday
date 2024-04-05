'use client'
import React, {useState, useEffect} from 'react'
import CardTrip from '../components/card/CardTrip';

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
    <section className=' p-6 grid grid-cols-4 bg-blue-100 bg-opacity-40 border-2 border-white'>
        <CardTrip title={tourData.length > 0 ? tourData[0].title : 'is loading'} date={tourData.length > 0 ? tourData[0].date : 'is loading'} duration={tourData.length > 0 ? tourData[0].duration : 'is loading'} />
    </section>
  )
}

export default page
