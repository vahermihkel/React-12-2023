import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productsFromFile from "../../data/products.json"

const EditProduct = () => {
  const { id } = useParams();    // {id: 3, title: ""}   3  === "3"
  const found = productsFromFile.find(product => product.id === Number(id));
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const navigate = useNavigate();

  const updateProduct = () => {
    const index = productsFromFile.findIndex(product => product.id === Number(id));
    productsFromFile[index] = {
      "id": Number(idRef.current.value),
      "title": titleRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "image": imageRef.current.value,
      "rating": { "rate": Number(found.rating.rate), "count": Number(found.rating.count) }
    };
    navigate("/admin/maintain");
  }

  if (found === undefined) {
    return <div>Toodet ei leitud</div>
  }

  return (
    <div>
      <label>Id</label> <br />
      <input type="number" ref={idRef} defaultValue={found.id} /> <br />
      <label>Title</label> <br />
      <input type="text" ref={titleRef} defaultValue={found.title} /> <br />
      <label>Price</label> <br />
      <input type="number" ref={priceRef} defaultValue={found.price} /> <br />
      <label>Description</label> <br />
      <input type="text" ref={descriptionRef} defaultValue={found.description} /> <br />
      <label>Category</label> <br />
      <input type="text" ref={categoryRef} defaultValue={found.category} /> <br />
      <label>Image</label> <br />
      <input type="text" ref={imageRef} defaultValue={found.image} /> <br />
      <button onClick={updateProduct}>Muuda</button>
    </div>
  )
}

export default EditProduct