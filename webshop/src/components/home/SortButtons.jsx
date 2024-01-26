import { Button } from '@mui/material';
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
      <Button onClick={sortAToZ}>A-Z</Button>
      <Button onClick={sortZToA}>Z-A</Button>
      <Button onClick={sortPriceAscending}>{t('price-ascending')}</Button>
      <Button onClick={sortPriceDescending}>{t('price-descending')}</Button>
      <Button onClick={sortRatingAscending}>{t('rating-ascending')}</Button>
      <Button onClick={sortRatingDescending}>{t('rating-descending')}</Button>
    </div>
  )
}

export default SortButtons