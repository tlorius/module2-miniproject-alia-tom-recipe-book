import ListItem from "../components/ListItem";
import classes from "../styles/Homepage.module.css";

const Homepage = ({ recipeList, deleteRecipeHandler }) => {
  return (
    <div className={classes.mainContainer}>
      {recipeList.map((currentRecipe) => {
        return (
          <ListItem
            key={currentRecipe.id}
            currentRecipe={currentRecipe}
            deleteRecipeHandler={deleteRecipeHandler}
          />
        );
      })}
    </div>
  );
};

export default Homepage;
