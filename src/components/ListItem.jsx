import { Link } from "react-router-dom";
import classes from "../styles/ListItem.module.css";

const ListItem = ({ currentRecipe, deleteRecipeHandler }) => {
  return (
    <div className={classes.container}>
      <Link to={`/recipe/${currentRecipe.name}/${currentRecipe.id}`}>
        <div className={classes.imageContainer}>
          <img src={currentRecipe.image} alt="" />
        </div>
        {currentRecipe.isFavorite && (
          <div className={classes.favoriteRecipe}>Favorite Recipe</div>
        )}
        <div className={classes.textContainer}>
          <h3 className={classes.recipeHeader}>{currentRecipe.name}</h3>
          <span className={`${classes.subtitle} ${classes.subtitleRight}`}>
            {currentRecipe.calories} calories
          </span>
          <span className={classes.subtitle}>
            {" "}
            {currentRecipe.servings} servings
          </span>
        </div>
      </Link>

      <div className={classes.deleteBtnContainer}>
        <i
          onClick={() => deleteRecipeHandler(currentRecipe.id)}
          className={`bi bi-x ${classes.deleteIcon}`}
        ></i>
      </div>
    </div>
  );
};

export default ListItem;
