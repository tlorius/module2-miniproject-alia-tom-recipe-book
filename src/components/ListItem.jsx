import classes from "../styles/ListItem.module.css";

const ListItem = ({ currentRecipe, deleteRecipeHandler }) => {
    return (
        <div className={classes.container}>
            <div className={classes.imageContainer}>
                <img src={currentRecipe.image} alt="" />
            </div>
            {currentRecipe.calories >= 300 && <div className={classes.highCalories}>High in Calories</div>}
            <div className={classes.textContainer}>
                <h3 className={classes.recipeHeader}>{currentRecipe.name}</h3>
                <span className={`${classes.subtitle} ${classes.subtitleRight}`}>{currentRecipe.calories} calories</span>
                <span className={classes.subtitle}>{' '}{currentRecipe.servings} servings</span>
            </div>
            <div className={classes.deleteBtnContainer}>
                <i onClick={() => deleteRecipeHandler(currentRecipe.id)} className={`glyphicon glyphicon-remove ${classes.deleteIcon}`}></i>
            </div>
        </div>
    );
}

export default ListItem;