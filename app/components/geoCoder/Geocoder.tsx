import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import Geocoder from 'leaflet-control-geocoder';
import L from "leaflet";

export default function LeafletControlGeocoder() {
  const map = useMap();

  useEffect(() => {
    const geocoderControl = new Geocoder();
    
    geocoderControl.on('markgeocode', function (e) {
      const lat_lng = e.geocode.center;
      new L.Marker(lat_lng).addTo(map).bindPopup(e.geocode.name).openPopup();
      map.fitBounds(e.geocode.bbox);
    }).addTo(map)

      
  }, [map]);

  return null;
}