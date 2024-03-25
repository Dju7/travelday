import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet';



const MyMap = () => {
  const [zoom] = useState(3);
  const customIcon = new Icon({
    iconUrl:'/icon.png',
    iconSize: [30, 30]
  })

  return (
    <>
    <MapContainer center={[48.891897, 2.347856]} zoom={zoom} style={{ height: '750px' }}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

     <Marker
      position={[48.89204234555169, 2.3474069130606345]}
      icon={customIcon}
      >
      <Popup>
      C'est chez moi !
      </Popup>
     </Marker>
      
    </MapContainer>
    </>
  );
};

export default MyMap;