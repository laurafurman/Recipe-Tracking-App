import React from "react";

function RecipeDisplay({recipeIndex, recipeName, recipeCuisine, recipePhoto, recipeIngredients, recipePreparation, handleDeleteRecipe}) {
  return (
          <tr key={recipeIndex}>
            <td>{recipeName}</td>
            <td>{recipeCuisine}</td>
            <td>
              <img
                src={recipePhoto}
                alt='recipephoto'
              />
            </td>
            <td className="content_td"><p>{recipeIngredients}</p></td>
            <td className="content_td"><p>{recipePreparation}</p></td>
            <td>
              <button name="delete" onClick={() => handleDeleteRecipe(recipeIndex)}>Delete</button>
            </td>
          </tr>
  );
};

export default RecipeDisplay;