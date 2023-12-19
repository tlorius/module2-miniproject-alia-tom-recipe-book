import { Link, useParams } from "react-router-dom";
import classes from "../styles/RecipeDetails.module.css";
import { v4 } from "uuid";
import FavoriteButton from "../components/FavoriteButton";

const RecipeDetails = ({ recipeList, handleFavToggle }) => {
  let { recipeid } = useParams();
  const currentRecipeDetails = recipeList.find(
    (recipe) => recipe.id === recipeid
  );
  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleCtn}>
        <div>
          <h1 className={classes.title}>{currentRecipeDetails.name}</h1>
          <div className={classes.mainInformation}>
            <p>
              <span className={classes.boldTxt}>Description:</span>{" "}
              {currentRecipeDetails.description}
            </p>
            <p>
              <span className={classes.boldTxt}>Duration:</span>{" "}
              {currentRecipeDetails.duration}
            </p>
            <p>
              <span className={classes.boldTxt}>Servings:</span>{" "}
              {currentRecipeDetails.servings}
            </p>
          </div>
        </div>

        <div className={classes.imgCtn}>
          <img
            className={classes.recipeImg}
            src={currentRecipeDetails.image}
            alt={`${currentRecipeDetails.name}`}
          />
        </div>
      </div>

      <div className={classes.cntInformation}>
        <div className={classes.ctnIngredients}>
          <h4>Ingredients:</h4>
          <ul className={classes.ulList}>
            {currentRecipeDetails.ingredients.map((currentIngredient) => (
              <li key={v4()}>{currentIngredient}</li>
            ))}
          </ul>
        </div>
        <div className={classes.ctnSteps}>
          <h4>Steps to Cook:</h4>
          <ol className={classes.olList}>
            {currentRecipeDetails.stepsToCook.map((currentStep) => (
              <li key={v4()}>{currentStep}</li>
            ))}
          </ol>
        </div>
        <div className={classes.nutritionalInformation}>
          <h4>Nutritional Information:</h4>
          <p>Calories: {currentRecipeDetails.calories}</p>
          <p>Fat: {currentRecipeDetails.fat} g</p>
          <p>Carbs: {currentRecipeDetails.carbs} g</p>
          <p>Protein: {currentRecipeDetails.protein} g</p>
        </div>
      </div>

      <div className={classes.btnCtn}>
        <Link to="/">
          <button className={classes.backBtn} type="button">
            Back
          </button>
        </Link>
        <FavoriteButton
          className={classes.favBtn}
          handleFavToggle={handleFavToggle}
          favRecipeId={currentRecipeDetails.id}
          isFavorite={currentRecipeDetails.isFavorite}
        />
        <Link
          to={`/${currentRecipeDetails.name}/${currentRecipeDetails.id}/update`}
        >
          <button className={classes.backBtn} type="button">
            Update Recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
