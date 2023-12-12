import classes from "../styles/ListItem.module.css";

const ListItem = ({ currentRecipe, deleteRecipeHandler }) => {
    
    return (
        <div className={classes.container}>
            <div className={classes.imageContainer}>
                <img src={currentRecipe.image} alt="" />
            </div>
            <div className={classes.textContainer}>
                <h3>{currentRecipe.name}</h3>
                <p>{currentRecipe.calories} calories</p>
                <p>{currentRecipe.servings} servings</p>
                {currentRecipe.calories >= 300 && <div className={classes.highCalories}>High in Calories</div>}
            </div>
            <div className={classes.deleteBtnContainer}>
                <button type="button" onClick={() => deleteRecipeHandler(currentRecipe.id)}>Delete</button>
            </div>
        </div>
    );
}

export default ListItem;