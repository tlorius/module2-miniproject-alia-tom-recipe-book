import { useParams } from "react-router-dom";
import classes from "../styles/RecipeDetails.module.css";

const RecipeDetails = ({ recipeList }) => {
  let { recipeid } = useParams();
  console.log(recipeid);
  const currentRecipeDetails = recipeList.find(
    (recipe) => recipe.id === recipeid
  );
  return (
    <div className={classes.mainContainer}>{currentRecipeDetails.name}</div>
  );
};

export default RecipeDetails;
