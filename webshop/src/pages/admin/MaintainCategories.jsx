import React, { useEffect, useRef, useState } from 'react'

const MaintainCategories = () => {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

  useEffect(() => {
    fetch(process.env.REACT_APP_CATEGORIES_DB_URL)
      .then(res => res.json())
      .then(json => setCategories(json || []));
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