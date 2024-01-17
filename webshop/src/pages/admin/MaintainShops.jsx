import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next';
 
const MaintainShops = () => {
  const { t } = useTranslation();
  const [shops, setShops] = useState([]);
  const nameRef = useRef();
  const longitudeRef = useRef();
  const latitudeRef = useRef();
  const openTimeRef = useRef();
 
  useEffect(() => {
    fetch(process.env.REACT_APP_SHOPS_DB_URL)
      .then(res => res.json())
      .then(json => setShops(json || []));
  }, []);
 
  const addShop = () => {
    shops.push({
      "name": nameRef.current.value,
      "longitude": longitudeRef.current.value,
      "latitude": latitudeRef.current.value,
      "openTime": openTimeRef.current.value
    });
    fetch(process.env.REACT_APP_SHOPS_DB_URL, {"method": "PUT", "body": JSON.stringify(shops)})
      .then(() => {
        setShops(shops.slice());
        toast.success("Shop added: " + nameRef.current.value);
        nameRef.current.value = "";
        longitudeRef.current.value = 0;
        latitudeRef.current.value = 0;
        openTimeRef.current.value = "";
      })
  }
 
  const deleteShop = (index) => {
    shops.splice(index, 1);
    fetch(process.env.REACT_APP_SHOPS_DB_URL, {"method": "PUT", "body": JSON.stringify(shops)})
      .then(() => {
        setShops(shops.slice())
        toast.success("Shop deleted");
      });
  }
  // Tapselt MaintainCategories järgi
  // kuid {name: .value}
  // {name: "Kristiine", longitude: 12, latitude: 12, openTime: "12-22"}
  //andmebaasis kuvada, lisada, kustutada
  return (
    <div>
      <label>{t("name")}</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>{t("longitude")}</label> <br />
      <input ref={longitudeRef} type="number" /> <br />
      <label>{t("latitude")}</label> <br />
      <input ref={latitudeRef} type="number" /> <br />
      <label>{t("open hours")}</label> <br />
      <input ref={openTimeRef} type="text" /> <br />
      <button onClick={addShop}>{t("add")}</button> <br />
      {shops.map((shop, index) => 
        <div key={shop.name}>
          <div>{shop.name}</div>
          <div>{shop.longitude}, {shop.latitude}</div>
          <div>{shop.openTime}</div>
          <button onClick={() => deleteShop(index)}>x</button>
        </div>)}
    </div>
  )
}

export default MaintainShops