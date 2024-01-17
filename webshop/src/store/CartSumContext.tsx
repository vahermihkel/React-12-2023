// MyContext.js
import React, { createContext, useEffect, useState } from 'react';
import { calculateCartTotalLS } from '../util/cartUtil';

const CartSumContext = createContext({
  cartSum: "0.00",
  setCartSum: (cartSum: string) => {}
});

// Create a provider component
const CartSumContextProvider = ({ children }: any) => {
  // Define your state or any data you want to share
  const [cartSum, setCartSum] = useState("0.00");

  useEffect(() => {  
    const url = process.env.REACT_APP_PRODUCTS_DB_URL;
    if (url === undefined) return;  
    fetch(url)
      .then(res => res.json())
      .then(json => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]"); 
        setCartSum(calculateCartTotalLS(cart, json));
      })
  }, []);

  return (
    <CartSumContext.Provider value={{ cartSum, setCartSum }}>
      {children}
    </CartSumContext.Provider>
  );
};

export { CartSumContext, CartSumContextProvider };