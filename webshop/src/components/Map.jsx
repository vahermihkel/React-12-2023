import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
 
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;
 
const Map = (props) => {
  const { t } = useTranslation();
  const [shops, setShops] = useState([]);
 
  useEffect(() => {
    fetch(process.env.REACT_APP_SHOPS_DB_URL)
      .then(res => res.json())
      .then(json => {
        setShops(json || []);
      })
  }, []);
 
  return (	
  <div>
    <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
      <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {shops.map(shop =>
        <Marker position={[shop.longitude, shop.latitude]}>
          <Popup>
            {shop.name} <br /> {t("open")} {shop.openTime}
          </Popup>
        </Marker>
      )}
    </MapContainer>	
  </div>
  )	
}
 
export default Map; 