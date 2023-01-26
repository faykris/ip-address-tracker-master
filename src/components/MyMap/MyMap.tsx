import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import './MyMap.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility';
import L, { LatLngExpression } from 'leaflet';
import IconLocation from '../../images/icon-location.svg';

interface MapProps {
  lat: number,
  lng: number
}

const icon = new L.Icon({
  iconUrl: IconLocation,  // path of icon file
  iconSize:     [50, 64], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const MyMap: React.FC<MapProps> = ({ lat, lng }) => {
 
  function ChangeView({ center, zoom } : { center: LatLngExpression, zoom: number}) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <MapContainer center={[lat, lng]} zoom={40} scrollWheelZoom={true} >
       <ChangeView center={[lat, lng]} zoom={40} />
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[lat, lng]} icon={icon}>
      <Popup>
        Latitude: {lat} <br /> 
        Longitude: {lng}
      </Popup>
    </Marker>
  </MapContainer>
  );
};

export default MyMap;

