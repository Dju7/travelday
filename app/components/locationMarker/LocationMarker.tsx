import { Icon, LatLng, Marker as LeafletMarker, } from 'leaflet';
import { useMemo, useRef, useState } from "react";
import { Marker, useMapEvents, Popup } from "react-leaflet";

interface LocationMarkerProps {
    onLatLngChange: (latlngValue: string) => void;
    geoloc: (place: LatLng | null) => void;
  }
  
  // Ajouter un marker
  
  export default function LocationMarker({ onLatLngChange, geoloc }: LocationMarkerProps) {
  
    const [markerPlace, setMarkerPlace] = useState<LatLng | null>(null)
    const markerRef = useRef<LeafletMarker>(null);
    const customIcon = new Icon({
      iconUrl:'/icon.png',
      iconSize: [30, 30]
    })
  
    // Récupéreration nouvelle coordonnée du marker déplacé
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            const latlng = marker.getLatLng();
            setMarkerPlace(latlng);
            const latlngValue = `Latitude: ${latlng.lat.toFixed(6)}, Longitude: ${latlng.lng.toFixed(6)}`;
            onLatLngChange(latlngValue); 
            geoloc(latlng);
          }
        },
      }),
      [onLatLngChange, geoloc],
    );
   
   // Ajout du marker avec un click + récupération coordonée
    const map = useMapEvents({
      click(e) {
        const { latlng } = e;
        setMarkerPlace(latlng);
        const latlngValue = `Latitude: ${latlng.lat.toFixed(6)}, Longitude: ${latlng.lng.toFixed(6)}`;
       
        onLatLngChange(latlngValue);
        geoloc(latlng);
  
        map.flyTo(latlng, map.getZoom());
      },
    });
    
      return markerPlace === null ? null : (
          <Marker
          position={markerPlace}
          ref={markerRef}
          draggable={true}
          eventHandlers={eventHandlers}
          icon={customIcon}
        >
         <Popup minWidth={90}>
            <span className='text-lg'>
              Nouveau marker
            </span>
            <p>Saississez des données dans les champs de droite, puis valider en cliquant sur "ajouter Marker"</p>
          </Popup>
        </Marker>
      )
    }