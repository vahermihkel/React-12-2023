import React, { useEffect } from 'react'
// import productsFromFile from '../../data/products.json'
// import cartFromFile from '../../data/cart.json'
import { useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify';
import '../../css/HomePage.css'
 
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {    
    fetch(process.env.REACT_APP_PRODUCTS_DB_URL)
      .then(res => res.json())
      .then(json => {
        setProducts(json); // väljanäitamisega seotult muudan tooteid
        setDbProducts(json); // rohkem ei tee v.a kui teen midagi andmebaasiga seotult
      })
    fetch(process.env.REACT_APP_CATEGORIES_DB_URL)
      .then(res => res.json())
      .then(json => {
        setCategories(json); 
      })
  }, []);
 
  const sortAToZ = () => {
    products.sort((a, b) => a.title.localeCompare(b.title));
    setProducts(products.slice());
  }
 
  const sortZToA = () => {
    products.sort((a, b) => b.title.localeCompare(a.title));
    setProducts(products.slice());
  }
 
  const sortPriceAscending = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  }
 
  const sortPriceDescending = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  }
 
  const sortRatingAscending = () => {
    products.sort((a, b) => a.rating.rate - b.rating.rate);
    setProducts(products.slice());
  }
 
  const sortRatingDescending = () => {
    products.sort((a, b) => b.rating.rate - a.rating.rate);
    setProducts(products.slice());
  }
 
  // const filterMensClothing = () => {
  //   const filtered = dbProducts.filter(product => product.category === "men's clothing");
  //   setProducts(filtered);
  // }
 
  // const filterWomensClothing = () => {
  //   const filtered = dbProducts.filter(product => product.category === "women's clothing");
  //   setProducts(filtered);
  // }
 
  // const filterElectronics = () => {
  //   const filtered = dbProducts.filter(product => product.category === "electronics");
  //   setProducts(filtered);
  // }
 
  // const filterJewelery = () => {
  //   const filtered = dbProducts.filter(product => product.category === "jewelery");
  //   setProducts(filtered);
  // }

  const filterByCategory = (categoryClicked) => {
    const filtered = dbProducts.filter(product => product.category === categoryClicked);
    setProducts(filtered);
  }
 
  const addToCart = (product) => {
    // cartFromFile.push(product);
    // otse localStorage-sse pushida ei saa
    // localStorage-st saab võtta, mis selle võtme taga on
    // paneme võetule ühe juurde
    // localStorage-sse saab panna, võtme abil, asendades selle väärtuse mis oli varasemalt
    const cartLS = JSON.parse(localStorage.getItem("cart")) || []; // || "" --> "[{"Nobe"}]" ------> [{"Nobe"}]
    cartLS.push(product);
    localStorage.setItem("cart", JSON.stringify(cartLS)); // "[{"Nobe"}, {"BMW"}]"
    toast.success("Toode lisatud ostukorvi!");
  }

  // localStorage.getItem("theme") -> "dark"
  // localStorage.getItem("keel") -> "EE"

  if (dbProducts.length === 0) {
    return <Spinner />
  }
 
  return (
    <div>
      <div>
        {t("filter")}:
        {/* <button onClick={filterMensClothing}>{t("mens-clothing")}</button>
        <button onClick={filterWomensClothing}>{t("womens-clothing")}</button>
        <button onClick={filterJewelery}>{t("jewelery")}</button>
        <button onClick={filterElectronics}>{t("electronics")}</button> */}
        {categories.map(category => 
          <button key={category.name} onClick={() => filterByCategory(category.name)}>{t(category.name)}</button>)
        }
      </div>
      <div>
        {t("sort")}:
        <button onClick={sortAToZ}>A-Z</button>
        <button onClick={sortZToA}>Z-A</button>
        <button onClick={sortPriceAscending}>{t('price-ascending')}</button>
        <button onClick={sortPriceDescending}>{t('price-descending')}</button>
        <button onClick={sortRatingAscending}>{t('rating-ascending')}</button>
        <button onClick={sortRatingDescending}>{t('rating-descending')}</button>
      </div>
      <div>{t("total-products")}: {products.length} / {dbProducts.length}</div>
      <div className='products'>
        {products.map(product =>
          <div key={product.id} className='product'>
            <img src={product.image} alt='' />
            <div className='title'>{product.title}</div>
            <div>{product.price} €</div>
            <button onClick={() => addToCart(product)}>{t("add-to-cart")}</button>
            <Button as={Link} to={'/product/' + product.id}>{t("details")}</Button>
          </div>
        )}
      </div>
    </div>
  )
}
 
export default HomePage