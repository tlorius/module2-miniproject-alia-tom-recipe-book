import ListItem from "./ListItem";
import classes from "../styles/List.module.css"

const List = ({ recipeList, deleteRecipeHandler }) => {
    return (
        <div className={classes.mainContainer}>
            {
                recipeList.map((currentRecipe) => {
                    return (
                        <ListItem key={currentRecipe.id} currentRecipe={currentRecipe} deleteRecipeHandler={deleteRecipeHandler} />
                    )
                })
            }
        </div>

    );
}

export default List;