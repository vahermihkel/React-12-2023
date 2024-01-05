import React from 'react'
// import cartFromFile from '../../data/cart.json'
import styles from '../../css/Cart.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ParcelMachines from '../../components/cart/ParcelMachines';
import Payment from '../../components/cart/Payment';
 
const Cart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const decreaseQuantity = (index) => {
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      cart.splice(index, 1);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const increaseQuantity = (index) => {
    cart[index].quantity++;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }
 
  const removeFromCart = (index) => {
    cart.splice(index, 1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }
 
  const emptyCart = () => {
    cart.splice(0);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }
 
  const calculateCartTotal = () => {
    let sum = 0;
    cart.forEach(p => sum = sum + p.product.price * p.quantity);
    return sum.toFixed(2);
  }
 
  return (
    <div>
      {cart.length !== 0 ? 
        <div>
          Ostukorvis on {cart.length} toode(t)
          <button onClick={emptyCart}>Empty Cart</button>
        </div> :
        <div>
          <div>Ostukorv on tuhi</div>
          <Link to='/'>
            <button>Avalehele</button>
          </Link>
        </div>
      }
      {cart.map((cartProduct, index) => 
        <div className={styles.product} key={index}>
          <img className={styles.picture} src={cartProduct.product.image} alt='' />
          <span className={styles.title}>{cartProduct.product.title} - </span>
          <span className={styles.price}>{cartProduct.product.price.toFixed(2)} €</span>
          <span className={styles.quantity}>
            <img className={styles.button} src="/minus.png" onClick={() => decreaseQuantity(index)} alt="" />
            <span>{cartProduct.quantity} tk</span>
            <img className={styles.button} src="/plus.png" onClick={() => increaseQuantity(index)} alt="" />
          </span>
          <span className={styles.total}>{(cartProduct.product.price * cartProduct.quantity).toFixed(2)} €</span>
          <img className={styles.button} src="/remove.png" onClick={() => removeFromCart(index)} alt="" />
        </div>
      )}
      <ParcelMachines />
      <div>Kokku: {calculateCartTotal()} - EUR</div>
      <Payment sum={calculateCartTotal()} />
    </div>
  )
}
 
export default Cart
