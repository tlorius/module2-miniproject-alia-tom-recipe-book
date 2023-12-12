import { useState } from "react";

import ListItem from "./ListItem";
import classes from "../styles/List.module.css"
import recipeListData from "../dataset/RecipeList.json";

const List = () => {
    const [recipeList, setRecipeList] = useState(recipeListData);

    const deleteRecipeHandler = (currentId) => {
        setRecipeList(recipeList.filter((currentRecipe) => currentRecipe.id !== currentId))
    }
    return (
        <div className={classes.mainContainer}>
            {
                recipeList.map((currentRecipe) => {
                    return (
                        <ListItem
                            key={currentRecipe.id}
                            currentRecipe={currentRecipe}
                            deleteRecipeHandler={deleteRecipeHandler}
                        />
                    )
                })
            }
        </div>

    );
}

export default List;