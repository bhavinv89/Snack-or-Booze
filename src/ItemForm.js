import React from "react";
import { useState } from "react";

function ItemForm({ setData }) {
    const initialState = {
      item: "food", // Default to "food"
      name: "",
      description: "",
      recipe: "",
      serve: "",
    };
  
    const [formData, setFormData] = useState(initialState);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((fData) => ({
        ...fData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setData(formData); // Pass the form data to the parent component
      setFormData(initialState); // Reset the form fields
    };

// Inline styles for labels and input fields
const labelStyle = {
    color: "blue", // Change the font color here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item" style={labelStyle}>
        Food or Drink?
      </label>
      <select
        onChange={handleChange}
        id="item"
        name="item"
        value={formData.item}
      >
        <option value="food">Food</option>
        <option value="drink">Drink</option>
      </select>

      <br />

      <label htmlFor="name" style={labelStyle}>
        Item Name
      </label>
      <input
        type="text"
        onChange={handleChange}
        id="name"
        name="name"
        value={formData.name}
      />

  
        <br />
  
        <label htmlFor="description" style={labelStyle}>
        Description
        </label>
        <input
          type="text"
          onChange={handleChange}
          id="description"
          name="description"
          value={formData.description}
        />
  
        <br />
  
        <label htmlFor="recipe" style={labelStyle}>
            Recipe
        </label>
        <input
          type="text"
          onChange={handleChange}
          id="recipe"
          name="recipe"
          value={formData.recipe}
        />
  
        <br />
  
        <label htmlFor="serve" style={labelStyle}>
        Serve
        </label>
        <input
          type="text"
          onChange={handleChange}
          id="serve"
          name="serve"
          value={formData.serve}
        />
  
        <br />
  
        <button>Add Item</button>
      </form>
    );
  }
  
  export default ItemForm;