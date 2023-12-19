import { useState, useEffect, useCallback } from "react";
import classes from "../styles/CreateRecipeForm.module.css";
import { useParams, useNavigate } from "react-router-dom";

const CreateRecipeForm = ({ handleSubmit, recipeList }) => {
  let { recipeid } = useParams();
  let isCreateForm = !recipeid;

  let navigate = useNavigate();

  //check if we received a recipeid in the url -> if we didn't set empty recipe as placeholder, otherwise use current recipe
  //as placeholders
  //useCallback prevents the function from being recreated each re-render but only if recipeid or recipelist change
  const initializeRecipeForm = useCallback(() => {
    if (isCreateForm) {
      return {
        name: "",
        duration: "",
        description: "",
        stepsToCook: [],
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
        image: "",
        servings: 1,
        ingredients: [],
      };
    } else {
      const updatingRecipe = recipeList.find(
        (recipe) => recipe.id === recipeid
      );
      return {
        ...updatingRecipe,
        stepsToCook: Array.isArray(updatingRecipe.stepsToCook)
          ? updatingRecipe.stepsToCook.join("\n")
          : updatingRecipe.stepsToCook,
        ingredients: Array.isArray(updatingRecipe.ingredients)
          ? updatingRecipe.ingredients.join("\n")
          : updatingRecipe.ingredients,
      };
    }
  }, [recipeid, recipeList]);

  const [newRecipe, setNewRecipe] = useState(initializeRecipeForm());

  const handleChange = (event) => {
    const currentName = event.target.name;
    let currentValue = event.target.value;

    if (event.target.type === "number") {
      currentValue = parseInt(currentValue);
    }
    setNewRecipe({ ...newRecipe, [currentName]: currentValue });
  };
  //re-rendering the page in-case the recipeID changes
  //this covers an edge case, where the user navigates to create a new recipe
  //while already editing an existing recipe
  useEffect(() => {
    setNewRecipe(initializeRecipeForm());
  }, [recipeid, initializeRecipeForm]);

  return (
    <form
      className={classes.formCtn}
      onSubmit={(event) => {
        handleSubmit(newRecipe, event, isCreateForm);
      }}
    >
      {isCreateForm ? (
        <h2 className={classes.formHeader}>Add Your Recipe</h2>
      ) : (
        <h2 className={classes.formHeader}>
          Update Your {newRecipe.name} Recipe
        </h2>
      )}
      <div className={classes.inputContainer}>
        <div className={classes.leftCtn}>
          <label className={classes.label}>
            Name
            <input
              className={classes.input}
              required
              name="name"
              type="text"
              placeholder="Enter name here"
              value={newRecipe.name}
              onChange={handleChange}
            />
          </label>
          <label className={classes.label}>
            Description
            <input
              className={classes.input}
              name="description"
              type="text"
              placeholder="Enter description here"
              value={newRecipe.description}
              onChange={handleChange}
            />
          </label>
          <label className={classes.label}>
            Duration
            <input
              className={classes.input}
              name="duration"
              type="string"
              placeholder="1 hour"
              value={newRecipe.duration}
              onChange={handleChange}
            />
          </label>
          <label className={classes.label}>
            Servings
            <input
              className={classes.input}
              name="servings"
              type="number"
              value={newRecipe.servings}
              onChange={handleChange}
            />
          </label>
          <label className={classes.label}>
            Image
            <input
              className={classes.input}
              name="image"
              type="url"
              placeholder="Enter image url here"
              value={newRecipe.image}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={classes.centerCtn}>
          <label className={classes.label}>
            Calories
            <input
              className={classes.input}
              name="calories"
              type="number"
              value={newRecipe.calories}
              onChange={handleChange}
            />
          </label>
          <label className={classes.label}>
            Fat in grams
            <input
              className={classes.input}
              name="fat"
              type="number"
              value={newRecipe.fat}
              onChange={handleChange}
            />
          </label>
          <label className={classes.label}>
            Carbs in grams
            <input
              className={classes.input}
              name="carbs"
              type="number"
              value={newRecipe.carbs}
              onChange={handleChange}
            />
          </label>
          <label className={classes.label}>
            Protein in grams
            <input
              className={classes.input}
              name="protein"
              type="number"
              value={newRecipe.protein}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={classes.rightCtn}>
          <div className={classes.textAreaCtn}>
            <label className={classes.label}>
              Ingredients
              <textarea
                className={classes.textArea}
                name="ingredients"
                type="text"
                placeholder="Enter each ingredient with the required amount on a new line."
                cols="50"
                rows="10"
                onChange={handleChange}
                value={newRecipe.ingredients}
              ></textarea>
            </label>
          </div>
          <div className={classes.textAreaCtn}>
            <label className={classes.label}>
              Steps to Cook
              <textarea
                className={classes.textArea}
                name="stepsToCook"
                type="text"
                placeholder="Enter each step on a new line. Numeration will be added after submitting."
                cols="50"
                rows="10"
                onChange={handleChange}
                value={newRecipe.stepsToCook}
              ></textarea>
            </label>
          </div>
        </div>
      </div>
      {isCreateForm ? (
        <div className={classes.buttonsCtn}>
          <button className={classes.buttonForm} type="submit">
            Add Recipe
          </button>
          <button
            className={classes.buttonForm}
            type="button"
            onClick={() => navigate("/")}
          >
            Cancel{" "}
          </button>
        </div>
      ) : (
        <div className={classes.buttonsCtn}>
          <button className={classes.buttonForm} type="submit">
            Update Recipe
          </button>
          <button
            className={classes.buttonForm}
            type="button"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      )}
    </form>
  );
};

export default CreateRecipeForm;
