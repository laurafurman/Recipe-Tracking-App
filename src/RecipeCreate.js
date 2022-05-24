import React, { useState } from "react";

function RecipeCreate({handleNewRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({...initialFormState});
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", formData);
    setFormData({...initialFormState});

    const newRecipe = {
      name: formData.name,
      cuisine: formData.cuisine,
      photo: formData.photo,
      ingredients: formData.ingredients,
      preparation: formData.preparation,
    }

    handleNewRecipes(newRecipe);
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td htmlFor="name">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td htmlFor="cuisine">
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td htmlFor="photo">
              <input
                id="photo"
                name="photo"
                type="url"
                placeholder="URL"
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td htmlFor="ingredients">
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                rows={2}
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td htmlFor="preparation">
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                rows={2}
                onChange={handleChange}
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default RecipeCreate;
