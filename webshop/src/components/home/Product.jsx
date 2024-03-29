import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Button as MuiButton } from '@mui/material';

import { Link } from "react-router-dom";
import styles from "../../css/HomePage.module.css";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { CartSumContext } from "../../store/CartSumContext";
import { calculateCartTotalLS } from "../../util/cartUtil";
import { useDispatch } from "react-redux";
import { add } from '../../store/cartSumSlice';


const Product = ({ product, dbProducts }) => {
  const { t } = useTranslation();
  const { setCartSum } = useContext(CartSumContext);
  const dispatch = useDispatch()


  const addToCart = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || []; // || "" --> "[{"Nobe"}]" ------> [{"Nobe"}]
    const index = cartLS.findIndex((p) => p.productId === productClicked.id);
    if (index >= 0) {
      cartLS[index].quantity = cartLS[index].quantity + 1;
      // cartLS[index].quantity += 1;
      // cartLS[index].quantity++;
    } else {
      cartLS.push({ "quantity": 1, "productId": productClicked.id });
    }
    localStorage.setItem("cart", JSON.stringify(cartLS)); // "[{"Nobe"}, {"BMW"}]"
    toast.success("Toode lisatud ostukorvi!");
    setCartSum(calculateCartTotalLS(cartLS, dbProducts));
    dispatch(add(productClicked.price));
  };

  return (
    <div className={styles.product}>
      <img src={product.image} alt="" />
      <div className={styles.title}>{product.title}</div>
      <div>{product.price} €</div>
      <MuiButton variant="contained" onClick={() => addToCart(product)}>{t("add-to-cart")}</MuiButton>
      <Button variant="danger" as={Link} to={"/product/" + product.id}>
        {t("details")}
      </Button>
    </div>
  );
};

export default Product;
