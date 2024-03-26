'use client'
import React, { useState, SetStateAction,  } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, LatLng } from 'leaflet';
import { geoLocStore } from '@/store/geoloc';
import LeafletControlGeocoder from '../geoCoder/Geocoder';
import LocationMarker from '../locationMarker/LocationMarker';
import ButtonMarker from '../buttonMarker/ButtonMarker';
import 'leaflet/dist/leaflet.css'


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
  const [zoom] = useState(5);
  const [newpin, setNewPin] = useState<[number, number] | null>(null);
  const [latlngValue, setLatlngValue] = useState<string | null>(null);
  const customIcon = new Icon({
    iconUrl:'/icon.png',
    iconSize: [44, 44]
  })
  console.log(localisation)

  const handleLatLngChange = (newLatLngValue: string) => {
    setLatlngValue(newLatLngValue);
  };

   //ajout d'un nouveau marker
  const handleMarkerAdd = () => {

    const newLat = 48.5 + Math.random() * 2; // Latitude entre 48.5 et 50.5
    const newLng = 1.5 + Math.random() * 2;  // Longitude entre 1.5 et 3.5
    const newPin: [number, number] = [newLat, newLng];
    setNewPin(newPin);
  };

  const deletePin = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation()
    setNewPin(null)
  }

  return (
    <>
    <MapContainer center={localisation} zoom={zoom} style={{ height: '750px' }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
    />
    
    
    <ButtonMarker onMarkerAdd={handleMarkerAdd} />
    <LeafletControlGeocoder />
    {newpin && (
          <Marker position={newpin} icon={customIcon} draggable={true}>
            <Popup minWidth={90}>
              <span>hello</span>
              <button className='cursor pointer ml-2' onClick={deletePin}>supp</button>
            </Popup>
          </Marker>
        )}

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={customIcon} draggable={true}>
            <Popup minWidth={90}>
              <div>
                <p>Etape: {marker.step}</p>
                <h2>{marker.city}</h2>
                <p>{marker.description}</p>
                <p>{marker.booking}</p>
                
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