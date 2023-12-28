import React, { useState } from 'react'
import productsFromFile from "../../data/products.json"
import "../../css/HomePage.css"

// rafce
const HomePage = () => {
  const [products, setProducts] = useState(productsFromFile);

  return (
    <div>
      <button>men's clothing</button>
      <button>jewelery</button>
      <button>electronics</button>
      <button>women's clothing</button>
      <div>Tooteid kokku {products.length} / {productsFromFile.length}</div>
      <div className='products'>
        {products.map(product => 
            <div key={product.id} className='product'>
              <img src={product.image} alt="" />
              <div className='title'>{product.title}</div>
              <div>{product.price} €</div>
              <button>Add to cart</button>
            </div>
        )}
      </div>
    </div>
  )
}

export default HomePage