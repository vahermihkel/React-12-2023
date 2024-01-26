import { useEffect, useState } from 'react'
import { Product } from '../models/Product';

const useFetchProducts = () => {
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const productUrl = process.env.REACT_APP_PRODUCTS_DB_URL;
    if (productUrl === undefined) return;
    fetch(productUrl)
      .then(res => res.json())
      .then(json => {
        setDbProducts(json);
        setLoading(false);
      })
  }, []);

  // [] <-- sama kogus iga kord [1,2,3]
  // {} <-- saan valida, võtme abil võtan kasutusele
  return {dbProducts, loading}
}

export default useFetchProducts