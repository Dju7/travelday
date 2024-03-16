'use client'
import React, { useState, SetStateAction,  } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, LatLng } from 'leaflet';
import LeafletControlGeocoder from '../geoCoder/Geocoder';
import LocationMarker from '../locationMarker/LocationMarker';
import ButtonMarker from '../buttonMarker/ButtonMarker';
import 'leaflet/dist/leaflet.css'

 interface Marker {
  position: LatLng;
  city: string;
  description: string;
}

  interface MapProps {
    geoloc: (place: SetStateAction<LatLng | null>) => void;
    markers: Marker[];
  }

  // Afficher la carte 

const MyMap: React.FC<MapProps> = ({markers, geoloc}) => {
  const [zoom] = useState(3);
  const [newpin, setNewPin] = useState<[number, number] | null>(null);
  const [latlngValue, setLatlngValue] = useState<string | null>(null);
  const customIcon = new Icon({
    iconUrl:'/icon.png',
    iconSize: [30, 30]
  })

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
    <MapContainer center={[48.891897, 2.347856]} zoom={zoom} style={{ height: '750px' }}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <ButtonMarker onMarkerAdd={handleMarkerAdd} />
    <LeafletControlGeocoder />
    {newpin && (
          <Marker position={newpin} icon={customIcon} draggable={true}>
            <Popup minWidth={90}>
              <span>hello</span>
              <button className='cursor pointer' onClick={deletePin}>supp</button>
            </Popup>
          </Marker>
        )}

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={customIcon} draggable={true}>
            <Popup minWidth={90}>
              <div>
                <h2>{marker.city}</h2>
                <p>{marker.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
     <LocationMarker onLatLngChange={handleLatLngChange} geoloc={geoloc} /> 
    </MapContainer>
    </>
  );
};

export default MyMap;