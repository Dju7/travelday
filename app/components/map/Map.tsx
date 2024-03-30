'use client'
import React, { useState, SetStateAction, useRef  } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, LatLng } from 'leaflet';
import { geoLocStore } from '@/store/geoloc';
import LeafletControlGeocoder from '../geoCoder/Geocoder';
import LocationMarker from '../locationMarker/LocationMarker';
import ButtonMarker from '../buttonMarker/ButtonMarker';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

 interface Marker {
  position: LatLng;
  step: string,
  city: string;
  description: string;
  booking: string;
}

  interface MapProps {
    geoloc: (place: SetStateAction<LatLng | null>) => void;
    markers: Marker[];
  }

 
  // Afficher la carte 

const Map: React.FC<MapProps> = ({markers, geoloc}) => {
  const localisation = geoLocStore((state:any) =>state.geoloc.latlng)
  const mapRef = useRef<any>(null)
  const polylineRef = useRef<L.Polyline | null>(null);
  const [zoom] = useState(5);
  const [newpin, setNewPin] = useState<[number, number] | null>(null);
  const [latlngValue, setLatlngValue] = useState<string | null>(null);
  const customIcon = new Icon({
    iconUrl:'/icon.png',
    iconSize: [44, 44]
  })
 
  const customIcon2 = new Icon({
    iconUrl:'/icon2.png',
    iconSize: [44, 44]
  })
 
 
  const lastMarker = markers.length > 0 ? markers[markers.length - 1]?.position : null;


  const handleLatLngChange = (newLatLngValue: string) => {
    setLatlngValue(newLatLngValue);
  };


  // fonction de calcul de distance entre le newPin et le dernier marker ajouter.
  function calcDistance(pin: [number, number], Lmarker: LatLng | null) {
    if(!Lmarker){
      return null
    }
    if (polylineRef.current) {
      mapRef.current.removeLayer(polylineRef.current); 
    }
    const ligne = L.polyline([pin, Lmarker]);
    ligne.addTo(mapRef.current);
    polylineRef.current = ligne; // Mettre à jour la référence de la ligne (polyline)
    const start = L.latLng(pin);
    const end = Lmarker;
    const distance = Math.round(start.distanceTo(end) / 1000.0);
    return distance;
  }

   //ajout d'un nouveau marker
   const handleMarkerAdd = () => {
    const newLat = 48.5 + Math.random() * 2; // Latitude entre 48.5 et 50.5
    const newLng = 1.5 + Math.random() * 2; // Longitude entre 1.5 et 3.5
    const newPin: [number, number] = [newLat, newLng];
    setNewPin(newPin);
  };
  
  const handleMarkerDragEnd = (event: L.LeafletEvent) => {
    const { lat, lng } = event.target.getLatLng(); // Obtenez les nouvelles coordonnées du marqueur
    const newPin: [number, number] = [lat, lng];
    setNewPin(newPin);
    if (lastMarker) {
      calcDistance(newPin, lastMarker);
    }
  };

    const deletePin = () => {
      if (polylineRef.current) {
        mapRef.current.removeLayer(polylineRef.current); 
      }
      setNewPin(null); 
    };

  

  return (
    <>
    <MapContainer center={localisation} zoom={zoom} style={{ height: '750px' }} ref={mapRef} >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
    
    <ButtonMarker onMarkerAdd={handleMarkerAdd} />
    <LeafletControlGeocoder />
    {newpin && (
          <Marker position={newpin} icon={customIcon2} draggable={true} eventHandlers={{ dragend: handleMarkerDragEnd }}>
            <Popup minWidth={90}>
              <span className='text-lg font-bold'>Hello</span>
              <p>Distance to last marker: {calcDistance(newpin, lastMarker)} km</p>
              <button className='cursor text-xl pointer ml-2' onClick={deletePin}>supp</button>
            </Popup>
          </Marker>
        )}

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={customIcon} draggable={true}>
            <Popup minWidth={100}>
              <div>
                <p className=' bg-sky-100 p-2 rounded-xl text-blue-500 text-center'>Etape: {marker.step}</p>
                <p className='text-lg text-blue-500 font-bold'><span className='underline font-light'>Lieu</span>: {marker.city}</p>
                <p className='text-lg text-blue-500 font-bold'><span className='underline font-light'>Description</span>: {marker.description}</p>
                <p className='text-lg text-blue-500 font-bold'><span className='underline font-light'>Reservation</span>: {marker.booking}</p> 
              </div>
            </Popup>
          </Marker>
        ))}
     <LocationMarker onLatLngChange={handleLatLngChange} geoloc={geoloc} /> 
    </MapContainer>
    </>
  );
};

export default Map;