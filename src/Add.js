import React from "react";
import ItemForm from "./ItemForm";
import { useState } from "react";
import { Link } from "react-router-dom";

function Add({ setSnacks, setDrinks, currentSnacks, currentDrinks }) {
    const [data, setData] = useState({
      name: "",
      description: "",
      recipe: "",
      serve: "",
    });
  
    const handleFormSubmit = () => {
      // Validate the data here
      if (data.name) {
        // Add the new drink to the list of drinks
        const newDrinks = [...currentDrinks, data];
        setDrinks(newDrinks);
        setData({}); // Clear the form fields
      }
    };
  
    if (data.name) {
      return (
        <div>
          <p>{data.name} added!</p>
          <p>
            Note: Please allow infinite time to have the {data.name} added as we
            currently have no actual database.
          </p>
          <p>
            <b>Recipe:</b> {data.recipe}
          </p>
          <p>
            <b>Serve:</b> {data.serve}
          </p>
          <Link to="/">Go Home</Link>
        </div>
      );
    }
  
    return (
      <div>
        <h2>Add a New Drink</h2>
        <ItemForm
          data={data}
          setData={setData}
          handleFormSubmit={handleFormSubmit}
          itemType="drink"
        />
      </div>
    );
  }
  
  export default Add;