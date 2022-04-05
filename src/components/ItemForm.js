import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Produce"
  });

  function handleChange(e) {
    console.log(e.target.name)
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value
    })
    console.log(newProduct)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newProduct.category)
    const newItem = {
      id: uuid(),
      name: newProduct.name,
      category: newProduct.category
    }
    console.log(newProduct)
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newProduct.name} onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
