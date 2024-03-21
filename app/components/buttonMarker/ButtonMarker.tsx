import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

interface ButtonMarkerProps {
    onMarkerAdd: () => void;
  }

export default function ButtonMarker({ onMarkerAdd }:ButtonMarkerProps) {
  const map = useMap();

  const handleButtonClick = () => {
    if (onMarkerAdd) {
      onMarkerAdd();
    }
  };

  useEffect(() => {
    const buttonMarker = L.Control.extend({
      options: {
        position: 'topleft' 
      },
    
      onAdd: function() {
        const container = L.DomUtil.create('div', 'h-8 w-8 bg-white flex justify-center items-center');
        container.classList.add('rounded-lg', 'border-2', 'border-gray-300');
        const button = L.DomUtil.create('button', 'text-lg', container);
        
        button.innerHTML = '++'; 
        
        // Gestionnaire d'événements du clic sur le bouton
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            handleButtonClick()
        });
        
        return container;
      }
    });

    const buttonMarkerInstance = new buttonMarker();
    buttonMarkerInstance.addTo(map);

    return () => {
      map.removeControl(buttonMarkerInstance);
    }; 
  }, [map]);

  return null;
}