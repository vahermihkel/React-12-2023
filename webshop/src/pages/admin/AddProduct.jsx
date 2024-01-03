import React, { useEffect, useRef, useState } from 'react'
// import productsFromFile from '../../data/products.json'
import { useTranslation } from 'react-i18next';
 
const AddProduct = () => {
  const { t } = useTranslation();
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const [dbProducts, setDbProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {    
    fetch(process.env.REACT_APP_PRODUCTS_DB_URL)
      .then(res => res.json())
      .then(json => {
        setDbProducts(json); 
      })
    fetch(process.env.REACT_APP_CATEGORIES_DB_URL)
      .then(res => res.json())
      .then(json => {
        setCategories(json); 
      })
  }, []);
 
  const updateProduct = () => {
    if (titleRef.current.value[0].toLowerCase() === titleRef.current.value[0]) {
      return;
    }

    if (priceRef.current.value === "") {
      return;
    }

    dbProducts.push({
      "id": Number(idRef.current.value),
      "title": titleRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "image": imageRef.current.value,
      "rating": {
        "rate": 0,
        "count": 0
      }
    });
    idRef.current.value = "";
    titleRef.current.value = "";
    priceRef.current.value = "";
    descriptionRef.current.value = "";
    categoryRef.current.value = "";
    imageRef.current.value = "";
    fetch(process.env.REACT_APP_PRODUCTS_DB_URL, {"method": "PUT", "body": JSON.stringify(dbProducts)});
  }

  const [idUnique, setIdUnique] = useState(true);

  const checkIdUniqueness = () => {
    const index = dbProducts.findIndex(element => element.id === Number(idRef.current.value));
    if (index === -1) {
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }
  }
 
  return (
    <div>
      {idUnique === false && <div>Sisestatud ID pole unikaalne!</div>}
      <label>Id</label>
      <input onChange={checkIdUniqueness} type='number' ref={idRef} /> <br />
      <label>{t('title')}</label>
      <input type='text' ref={titleRef} /> <br />
      <label>{t('price')}</label>
      <input type='number' ref={priceRef} /> <br />
      <label>{t('description')}</label>
      <input type='text' ref={descriptionRef} /> <br />
      <label>{t('category')}</label>
      {/* <input type='text' ref={categoryRef} /> <br /> */}
      <select ref={categoryRef}>
        {categories.map(category => <option key={category.name}>{category.name}</option>)}
      </select> <br />
      <label>{t('image')}</label>
      <input type='text' ref={imageRef} /> <br />
      <button disabled={idUnique === false} onClick={updateProduct}>{t('add')}</button>
    </div>
  )
}
 
export default AddProduct