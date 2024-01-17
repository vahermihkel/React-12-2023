import { CartProduct } from "../models/CartProduct";
import { LocalStorageProduct } from "../models/LocalStorageProduct";
import { Product } from "../models/Product";

export const calculateCartTotalLS = (cartLS: LocalStorageProduct[], dbProducts: Product[]) => {
  const cartWithProducts = cartLS.map(cartProduct => ({
    "quantity": cartProduct.quantity,
    "product": dbProducts.find(dbProduct => dbProduct.id === cartProduct.productId)
  }));
  const cartWithoutUndefined = cartWithProducts.filter(p => p.product !== undefined) as CartProduct[];
  let sum = 0;
  cartWithoutUndefined.forEach(p => sum = sum + p.product.price * p.quantity);
  return sum.toFixed(2);
}

export const calculateCartTotalCart = (cartHTML: CartProduct[]) => {
  let sum = 0;
  cartHTML.forEach(p => sum = sum + p.product.price * p.quantity);
  return sum.toFixed(2);
}