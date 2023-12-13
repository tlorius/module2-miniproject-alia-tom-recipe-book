import { useParams } from "react-router-dom";
import classes from "../styles/RecipeDetails.module.css";

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
      <p>Ingredients: {currentRecipeDetails.ingredients[0].ingredient}</p>

      {/* need to loop thru steps to cook to create UL with li elements
      same with the nutritional data 
      <p>{currentRecipeDetails.stepsToCook}</p>*/}
    </div>
  );
};

export default RecipeDetails;
