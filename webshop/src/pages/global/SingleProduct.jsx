import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import productsFromFile from '../../data/products.json'
 
const SingleProduct = () => {
  const { id } = useParams();
  const [dbProducts, setDbProducts] = useState([]);
  const product = dbProducts.find(product => product.id === Number(id));
 
  useEffect(() => {
    fetch(process.env.REACT_APP_PRODUCTS_DB_URL)
      .then(res => res.json())
      .then(json => {
        setDbProducts(json);
      })
  }, []);
 
  if ( product === undefined ) {
    return <div>Toodet ei leitud</div>
  }
 
  return (
    <div>
      <img src={product.image} alt='' />
      <div>{product.id}</div>
      <div>{product.title}</div>
      <div>{product.price} €</div>
      <div>{product.description}</div>
      <div>{product.category}</div>
      <div>{product.rating.rate}</div>
      <div>{product.rating.count}</div>
    </div>
  )
}
 
export default SingleProduct