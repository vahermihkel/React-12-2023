import { useState } from 'react';
import Map from '../../components/Map';

const Shops = () => {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});

    // useEffect

  return (<div>
    <button onClick={() => setCoordinates({lngLat: [58.8297, 25.8217], zoom: 7})}>Kõik poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</button>
    
    {/* kuidas HomePage.jsx sees sai tehtud filterButtons */}
    <button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</button>
    <button onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine</button>
    <button onClick={() => setCoordinates({lngLat: [58.3777, 26.7303], zoom: 13})}>Tasku</button>

    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;