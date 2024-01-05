import React from 'react'
import { useTranslation } from 'react-i18next'
                //= (props)
const SortButtons = ({products, setProducts}) => {
  const { t } = useTranslation();

  const sortAToZ = () => {
    // props.products
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

  return (
    <div>
      {t("sort")}:
      <button onClick={sortAToZ}>A-Z</button>
      <button onClick={sortZToA}>Z-A</button>
      <button onClick={sortPriceAscending}>{t('price-ascending')}</button>
      <button onClick={sortPriceDescending}>{t('price-descending')}</button>
      <button onClick={sortRatingAscending}>{t('rating-ascending')}</button>
      <button onClick={sortRatingDescending}>{t('rating-descending')}</button>
    </div>
  )
}

export default SortButtons