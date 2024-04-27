'use client'
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster'
import 'leaflet/dist/leaflet.css'
import { Icon, LatLngExpression } from 'leaflet';


interface TourItem {
  booking: string;
  city: string;
  description: string;
  position: { lat: number; lng: number };
  step: string;
}

const MyMap = () => {
  
  const [tourItinerary, setTourItinerary] = useState([]);
  const [tourPolylines, setTourPolylines] = useState([])
  const [zoom] = useState(3);

  const customIcon = new Icon({
    iconUrl:'/icon.png',
    iconSize: [30, 30]
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/tour/getTourAll"
        );
        const tour = await response.json();
        const itinerary = tour.map((trip: any) => trip.itinerary )
        setTourItinerary(itinerary)

        
    const polylines = itinerary.map((trip: TourItem[]) =>
      trip.map((location: TourItem) => [location.position.lat, location.position.lng])
    );
    setTourPolylines(polylines);
 

      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(tourItinerary)

  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
 
   
  return (
    <MapContainer center={[38.891897, 2.347856]} zoom={zoom} style={{ height: '800px' }} >

      <TileLayer
      attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> contributors'
      url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=a2jhbod89TvrcVfM5uc5"
    />
      <MarkerClusterGroup>
      {tourItinerary && tourItinerary.map((trip: TourItem[], index: number) => (
      trip.map((location: TourItem, position: number) => (
        <Marker key={`${index}-${position}`} position={[location.position.lat, location.position.lng]} icon={customIcon}>
            <Popup minWidth={100}>
              <div>
                <p className='bg-sky-100 p-2 rounded-xl text-blue-500 text-center'>Etape: {location.step}</p>
                <p className='text-lg text-blue-500 font-bold'><span className='underline font-light'>Lieu</span>: {location.city}</p>
                <p className='text-lg text-blue-500 font-bold'><span className='underline font-light'>Description</span>: {location.description}</p>
                <p className='text-lg text-blue-500 font-bold'><span className='underline font-light'>Reservation</span>: {location.booking}</p> 
              </div>
            </Popup>
          </Marker>
        ))
      ))}
      </MarkerClusterGroup>

      {tourPolylines.map((polyline: LatLngExpression[], index: number) => (
        <Polyline key={index} positions={polyline} color={generateRandomColor()} />
       ))}
      

    </MapContainer>
    
  );
};

export default MyMap;