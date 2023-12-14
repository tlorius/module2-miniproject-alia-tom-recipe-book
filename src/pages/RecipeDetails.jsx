import { useParams } from "react-router-dom";
import classes from "../styles/RecipeDetails.module.css";
import { v4 } from "uuid";

const RecipeDetails = ({ recipeList }) => {
  let { recipeid } = useParams();
  console.log(recipeid);
  const currentRecipeDetails = recipeList.find(
    (recipe) => recipe.id === recipeid
  );
  return (
    <div className={classes.mainContainer}>
      <h2>{currentRecipeDetails.name}</h2>
      <img
        className={classes.recipeImg}
        src={currentRecipeDetails.image}
        alt={`${currentRecipeDetails.name}`}
      />
      <p>Description: {currentRecipeDetails.description}</p>
      <p>Duration: {currentRecipeDetails.duration}</p>
      <p>Servings: {currentRecipeDetails.servings}</p>
      <div>
        <h4>Ingredients:</h4>
        <ul>
          {currentRecipeDetails.ingredients.map((currentIngredient) => (
            <li key={v4()}>
              {currentIngredient.amount} {currentIngredient.unit}{" "}
              {currentIngredient.ingredient}
            </li>
          ))}
        </ul>
      </div>
      {/* should probably create its own component from the steps to cook*/}
      <div>
        <h4>Steps to Cook:</h4>
        <ol>
          {currentRecipeDetails.stepsToCook.map((currentStep) => (
            <li key={v4()}>{currentStep}</li>
          ))}
        </ol>
      </div>
      <div>
        <h4>Nutritional Information:</h4>
        <p>Calories: {currentRecipeDetails.nutrionalInformation.calories}</p>
        <p>Fat: {currentRecipeDetails.nutrionalInformation.fat}</p>
        <p>Carbs: {currentRecipeDetails.nutrionalInformation.carbs}</p>
        <p>Protein: {currentRecipeDetails.nutrionalInformation.protein}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
