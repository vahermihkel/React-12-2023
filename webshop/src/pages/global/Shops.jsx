import { useState, useEffect } from 'react';
import { ButtonGroup, Spinner, Button } from 'react-bootstrap';
import Map from '../../components/Map';
import { useTranslation } from 'react-i18next';
 
const Shops = () => {
	const { t } = useTranslation();
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    fetch(process.env.REACT_APP_SHOPS_DB_URL)
      .then(res => res.json())
      .then(json => {
        setShops(json || []);
        setIsLoading(false);
      })
  }, []);
 
  if (isLoading) {
    return <Spinner />
  }
 
  return (
    <div>
      <Button onClick={() => setCoordinates({lngLat: [58.7286, 25.7873], zoom: 7})}>{t("all shops")}</Button>{' '}
      <Button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>{t("all shops in tallinn")}</Button>{' '}
      <div>
        <ButtonGroup>
          {shops.map(shop =>
            <Button key={shop.name} onClick={() => setCoordinates({lngLat: [shop.longitude, shop.latitude], zoom: 13})} size="sm" variant='secondary'>{shop.name}</Button>
          )}
        </ButtonGroup>
      </div>
 
      <Map mapCoordinaates={coordinaates}  />
    </div>
  )
}
 
export default Shops;