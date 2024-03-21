import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import Geocoder from 'leaflet-control-geocoder';
import L, { Icon } from "leaflet";

export default function LeafletControlGeocoder() {
  const map = useMap();
  const customIcon = new Icon({
    iconUrl:'/icon.png',
    iconSize: [30, 30]
  })

  useEffect(() => {
    const geocoderControl = new Geocoder();
    
    geocoderControl.on('markgeocode', function (e) {
      const lat_lng = e.geocode.center;
      new L.Marker(lat_lng, {icon: customIcon}).addTo(map).bindPopup(e.geocode.name).openPopup();
      map.fitBounds(e.geocode.bbox);
    }).addTo(map)

    return () => {
      geocoderControl.remove();
    }; 
     
  }, [map]);

  return null;
}