import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Product } from '../../models/Product';
import { Category } from '../../models/Category';
// import productsFromFile from "../../data/products.json"

const EditProduct = () => {
  const { id } = useParams();    // {id: 3, title: ""}   3  === "3"
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const found = dbProducts.find(product => product.id === Number(id));
  const idRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [idUnique, setIdUnique] = useState(true);

  useEffect(() => {    
    const productUrl = process.env.REACT_APP_PRODUCTS_DB_URL;
    if (productUrl === undefined) return;
    fetch(productUrl)
      .then(res => res.json())
      .then(json => {
        setDbProducts(json); 
      })
    const categoryUrl = process.env.REACT_APP_PRODUCTS_DB_URL;
    if (categoryUrl === undefined) return;
    fetch(categoryUrl)
      .then(res => res.json())
      .then(json => {
        setCategories(json); 
      })
  }, []);

  if (found === undefined) {
    return <div>Toodet ei leitud</div>
  }

  const updateProduct = () => {
    if (idRef.current === null || titleRef.current === null || 
      priceRef.current === null || categoryRef.current === null ||
      imageRef.current === null || descriptionRef.current === null) {
        return;
      }

    if (titleRef.current.value[0].toLowerCase() === titleRef.current.value[0]) {
      return;
    }

    if (priceRef.current.value === "") {
      return;
    }
    
    const index = dbProducts.findIndex(product => product.id === Number(id));
    dbProducts[index] = {
      "id": Number(idRef.current.value),
      "title": titleRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "image": imageRef.current.value,
      "rating": { "rate": Number(found.rating.rate), "count": Number(found.rating.count) }
    };
    const url = process.env.REACT_APP_PRODUCTS_DB_URL;
    if (url === undefined) return;
    fetch(url, {"method": "PUT", "body": JSON.stringify(dbProducts)})
      .then(() => navigate("/admin/maintain"));
  }

  const checkIdUniqueness = () => {
    const idInput = idRef.current;
    if (idInput === null) return;
    if (idInput.value === id) {
      setIdUnique(true);
      return;
    }
    const index = dbProducts.findIndex(element => element.id === Number(idInput.value));
    if (index === -1) {
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }
  }

  return (
    <div>
      {idUnique === false && <div>Sisestatud ID pole unikaalne!</div>}
      <label>Id</label> <br />
      <input type="number" onChange={checkIdUniqueness} ref={idRef} defaultValue={found.id} /> <br />
      <label>Title</label> <br />
      <input type="text" ref={titleRef} defaultValue={found.title} /> <br />
      <label>Price</label> <br />
      <input type="number" ref={priceRef} defaultValue={found.price} /> <br />
      <label>Description</label> <br />
      <input type="text" ref={descriptionRef} defaultValue={found.description} /> <br />
      <label>Category</label> <br />
      {/* <input type="text" ref={categoryRef} defaultValue={found.category} /> <br /> */}
      <select ref={categoryRef} defaultValue={found.category}>
        {categories.map(category => <option key={category.name}>{category.name}</option>)}
      </select> <br />
      <label>Image</label> <br />
      <input type="text" ref={imageRef} defaultValue={found.image} /> <br />
      <button disabled={idUnique === false} onClick={updateProduct}>Muuda</button>
    </div>
  )
}

export default EditProduct