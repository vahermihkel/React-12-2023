import React, { useEffect, useRef } from 'react'
// import productsFromFile from '../../data/products.json'
import { Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import "../../css/MaintainProducts.css"
 
const MaintainProducts = () => {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const { t } = useTranslation();
  const searchedRef = useRef();

  useEffect(() => {    
    fetch(process.env.REACT_APP_PRODUCTS_DB_URL)
      .then(res => res.json())
      .then(json => {
        setProducts(json); // väljanäitamisega seotult muudan tooteid
        setDbProducts(json); // rohkem ei tee v.a kui teen midagi andmebaasiga seotult
      })
  }, []);
 
  const deleteProduct = (product) => {
    const index = dbProducts.findIndex(element => element.id === Number(product.id));
    dbProducts.splice(index, 1);
    setProducts(dbProducts.slice());
    fetch(process.env.REACT_APP_PRODUCTS_DB_URL, {"method": "PUT", "body": JSON.stringify(dbProducts)});
  }

  const searchFromProducts = () => {
    const result = dbProducts.filter(product => 
      product.title.toLowerCase().includes(searchedRef.current.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchedRef.current.value.toLowerCase())
    );
    setProducts(result);
  }

  if (dbProducts.length === 0) {
    return <Spinner />
  }
 
  return (
    <div>
      <input ref={searchedRef} onChange={searchFromProducts} type="text" />
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product =>
            <tr key={product.id}>
              <td><img className="picture" src={product.image} alt='' /></td>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price} €</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.rating.rate}</td>
              <td>{product.rating.count}</td>
              <td>
                <button onClick={() => deleteProduct(product)}>{t('delete')}</button>
                <Button as={Link} to={'/admin/edit/' + product.id}>{t('change')}</Button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
 
export default MaintainProducts