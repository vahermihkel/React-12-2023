import React, { useCallback, useContext, useEffect, useMemo } from "react";
// import cartFromFile from '../../data/cart.json'
import styles from "../../css/Cart.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ParcelMachines from "../../components/cart/ParcelMachines";
import Payment from "../../components/cart/Payment";
import { CartSumContext } from "../../store/CartSumContext";
import { calculateCartTotalCart } from "../../util/cartUtil";
import { Spinner } from "react-bootstrap";
import { CartProduct } from "../../models/CartProduct";
import { Product } from "../../models/Product";
import { LocalStorageProduct } from "../../models/LocalStorageProduct";
import { useDispatch } from "react-redux";
import { empty, add, remove } from '../../store/cartSumSlice';

const Cart = () => {
  const [cart, setCart] = useState<CartProduct[]>(
    // JSON.parse(localStorage.getItem("cart")) || []
    []
  );
  const { setCartSum } = useContext(CartSumContext);
  const [loading, setLoading] = useState(true);
  // const localStorageKey = process.env.REACT_APP_LOCALTORAGE_KEY;
  const cartLS: LocalStorageProduct[] = useMemo(() => JSON.parse(localStorage.getItem("cart") || "[]"), []);
  // const [number, setNumber] = useState(7);
  const dispatch = useDispatch()


  // const teeKulukasFunktsioon = () => {
  //   for (let index = 0; index < 9999999; index++) {}
  //   console.log("TULI!")
  // }

  // const number2 = useMemo(() => teeKulukasFunktsioon(), []);

  const getCartWithProducts = useCallback((json: Product[]) => {
    const cartWithProducts = cartLS.map((cartProduct: LocalStorageProduct) => ({
      "quantity": cartProduct.quantity,
      "product": json.find((dbProduct: Product) => dbProduct.id === cartProduct.productId)
    }));
    const cartWithoutUndefined = cartWithProducts.filter(p => p.product !== undefined) as CartProduct[];
    setCart(cartWithoutUndefined);
  }, [cartLS]);

  useEffect(() => {   
    // console.log(number); 
    const url = process.env.REACT_APP_PRODUCTS_DB_URL;
    if (url === undefined) return;
    fetch(url)
      .then(res => res.json())
      .then(json => {
        getCartWithProducts(json);
        setLoading(false);
      })
  }, [getCartWithProducts]);

  const decreaseQuantity = (index: number) => {
    dispatch(remove(cart[index].product.price));
    cart[index].quantity--;
    cartLS[index].quantity--;
    if (cart[index].quantity === 0) {
      cart.splice(index, 1);
      cartLS.splice(index, 1);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cartLS));
    setCartSum(calculateCartTotalCart(cart));
  };

  const increaseQuantity = (index: number) => {
    dispatch(add(cart[index].product.price));
    cart[index].quantity++;
    cartLS[index].quantity++;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cartLS));
    setCartSum(calculateCartTotalCart(cart));
  };

  const removeFromCart = (index: number) => {
    dispatch(remove(cart[index].product.price * cart[index].quantity));
    cart.splice(index, 1);
    cartLS.splice(index, 1)
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cartLS));
    setCartSum(calculateCartTotalCart(cart));
  };

  const emptyCart = () => {
    cart.splice(0);
    cartLS.splice(0);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cartLS));
    setCartSum("0.00");
  };

  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      {/* <button onClick={() => setNumber(number - 1)}>-</button>
      <div>{number}</div>
      <button onClick={() => setNumber(number + 1)}>+</button> */}
      {cart.length !== 0 ? (
        <div>
          Ostukorvis on {cart.length} toode(t)
          <button onClick={emptyCart}>Empty Cart</button>
        </div>
      ) : (
        <div>
          <div>Ostukorv on tuhi</div>
          <Link to="/">
            <button>Avalehele</button>
          </Link>
        </div>
      )}
      {cart.map((cartProduct, index) => (
        <div className={styles.product} key={index}>
          <img
            className={styles.picture}
            src={cartProduct.product.image}
            alt=""
          />
          <span className={styles.title}>{cartProduct.product.title} - </span>
          <span className={styles.price}>
            {cartProduct.product.price.toFixed(2)} €
          </span>
          <span className={styles.quantity}>
            <img
              className={styles.button}
              src={require("../../assets/cart/minus.png")}
              onClick={() => decreaseQuantity(index)}
              alt=""
            />
            <span>{cartProduct.quantity} tk</span>
            <img
              className={styles.button}
              src={require("../../assets/cart/plus.png")}
              onClick={() => increaseQuantity(index)}
              alt=""
            />
          </span>
          <span className={styles.total}>
            {(cartProduct.product.price * cartProduct.quantity).toFixed(2)} €
          </span>
          <img
            className={styles.button}
            src={require("../../assets/cart/remove.png")}
            onClick={() => removeFromCart(index)}
            alt=""
          />
        </div>
      ))}
      {cart.length > 0 && (
        <>
          <ParcelMachines />
          <div>Kokku: {calculateCartTotalCart(cart)} - EUR</div>
          <Payment sum={calculateCartTotalCart(cart)} />
        </>
      )}
    </div>
  );
};

export default Cart;
