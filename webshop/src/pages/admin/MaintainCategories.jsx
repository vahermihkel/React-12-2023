import React, { useEffect, useRef, useState } from 'react'
import { Spinner } from 'react-bootstrap';

const MaintainCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const categoryRef = useRef();

  useEffect(() => {
    fetch(process.env.REACT_APP_CATEGORIES_DB_URL)
      .then(res => res.json())
      .then(json => {
        setCategories(json || []);
        setLoading(false);
      });
  }, []);

  const addCategory = () => {
    // kontrolle
    categories.push({"name": categoryRef.current.value});
    fetch(process.env.REACT_APP_CATEGORIES_DB_URL, {"method": "PUT", "body": JSON.stringify(categories)})
      .then(() => {
        setCategories(categories.slice());
        categoryRef.current.value = "";
      });
  }

  const deleteCategory = (index) => {
    categories.splice(index,1);
    fetch(process.env.REACT_APP_CATEGORIES_DB_URL, {"method": "PUT", "body": JSON.stringify(categories)})
      .then(() => setCategories(categories.slice()));
    // toast välja
  }

  if (loading === true) {
    return <Spinner />
  }

  return (
    <div>
      <label>Name</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <button onClick={addCategory}>Add</button> <br />
      {categories.map((category, index) => 
        <div key={category.name}>
          {category.name}
          <button onClick={() => deleteCategory(index)}>x</button>
        </div>)}
    </div>
  )
}

export default MaintainCategories