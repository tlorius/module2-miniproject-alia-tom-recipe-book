import { Link, useParams } from "react-router-dom";
import classes from "../styles/RecipeDetails.module.css";
import { v4 } from "uuid";

const RecipeDetails = ({ recipeList }) => {
  let { recipeid } = useParams();
  const currentRecipeDetails = recipeList.find(
    (recipe) => recipe.id === recipeid
  );
  return (
    <div className={classes.mainContainer}>
      <img
        className={classes.recipeImg}
        src={currentRecipeDetails.image}
        alt={`${currentRecipeDetails.name}`}
      />
      <h1 className={classes.title}>{currentRecipeDetails.name}</h1>
      <div className={classes.cntInformation}>
        <div className={classes.mainInformation}>
          <p>Description: {currentRecipeDetails.description}</p>
          <p>Duration: {currentRecipeDetails.duration}</p>
          <p>Servings: {currentRecipeDetails.servings}</p>
        </div>
        <div className={classes.nutritionalInformation}>
          <h4>Nutritional Information</h4>
          <p>Calories: {currentRecipeDetails.calories}</p>
          <p>Fat: {currentRecipeDetails.fat} g</p>
          <p>Carbs: {currentRecipeDetails.carbs} g</p>
          <p>Protein: {currentRecipeDetails.protein} g</p>
        </div>
      </div>

      <div className={classes.cntCooking}>
        <div>
          <h4>Ingredients:</h4>
          <ul className={classes.centerList}>
            {currentRecipeDetails.ingredients.map((currentIngredient) => (
              <li key={v4()}>{currentIngredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Steps to Cook:</h4>
          <ol className={classes.centerList}>
            {currentRecipeDetails.stepsToCook.map((currentStep) => (
              <li key={v4()}>{currentStep}</li>
            ))}
          </ol>
        </div>
      </div>

      <Link to="/">
        <button className={classes.backBtn} type="button">
          BACK
        </button>
      </Link>

      <Link
        to={`/${currentRecipeDetails.name}/${currentRecipeDetails.id}/update`}
      >
        <button className={classes.backBtn} type="button">
          Update Recipe
        </button>
      </Link>
    </div>
  );
};

export default RecipeDetails;
