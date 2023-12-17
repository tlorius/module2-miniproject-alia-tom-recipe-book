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
      onSubmit={(event) => {
        handleSubmit(newRecipe, event, isCreateForm);
      }}
    >
      {isCreateForm ? (
        <span>Add Your Recipe</span>
      ) : (
        <span>Update Your Recipe</span>
      )}
      <div className={classes.formContainer}>
        <label>
          Name
          <input
            required
            name="name"
            type="text"
            placeholder="name"
            value={newRecipe.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Image
          <input
            name="image"
            type="url"
            placeholder="image"
            value={newRecipe.image}
            onChange={handleChange}
          />
        </label>

        <label>
          Duration
          <input
            name="duration"
            type="string"
            value={newRecipe.duration}
            onChange={handleChange}
          />
        </label>

        <label>
          Description
          <input
            name="description"
            type="text"
            value={newRecipe.description}
            onChange={handleChange}
          />
        </label>

        <label>
          Servings
          <input
            name="servings"
            type="number"
            value={newRecipe.servings}
            onChange={handleChange}
          />
        </label>

        <label>
          Ingredients
          <textarea
            name="ingredients"
            type="text"
            placeholder="Enter each ingredient with the required amount on a new line."
            cols="50"
            rows="10"
            onChange={handleChange}
            value={newRecipe.ingredients}
          ></textarea>
        </label>

        <label>
          Steps to Cook
          <textarea
            name="stepsToCook"
            type="text"
            placeholder="Enter each step on a new line. Numeration will be added after submitting."
            cols="50"
            rows="10"
            onChange={handleChange}
            value={newRecipe.stepsToCook}
          ></textarea>
        </label>

        <div>
          <p>Nutritional Information</p>
          <label>
            Calories
            <input
              name="calories"
              type="number"
              value={newRecipe.calories}
              onChange={handleChange}
            />
          </label>
          <label>
            Fat
            <input
              name="fat"
              type="number"
              value={newRecipe.fat}
              onChange={handleChange}
            />
          </label>
          <label>
            Carbs
            <input
              name="carbs"
              type="number"
              value={newRecipe.carbs}
              onChange={handleChange}
            />
          </label>
          <label>
            Protein
            <input
              name="protein"
              type="number"
              value={newRecipe.protein}
              onChange={handleChange}
            />
          </label>
        </div>

        {isCreateForm ? (
          <button type="submit">Add Recipe</button>
        ) : (
          <div>
            <button type="submit">Update Recipe</button>
            <button type="button" onClick={() => navigate(-1)}>
              Cancel
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default CreateRecipeForm;
