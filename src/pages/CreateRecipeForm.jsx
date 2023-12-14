import { useState } from "react";
import classes from "../styles/CreateRecipeForm.module.css"

const CreateRecipeForm = ({ handleSubmit }) => {
  const [newRecipe, setNewRecipe] = useState({
    name: '', duration: '', description: '', stepsToCook: [],
    nutrionalInformation: {
      "calories": 0,
      "fat": 0,
      "carbs": 0,
      "protein": 0
    }, image: '', servings: 1, ingredients: []
  })

  return (
    < form onSubmit={() => { handleSubmit(newRecipe) }} >
      <span>Add Your Recipe</span>
      <div className={classes.formContainer}>
        <label>
          Name
          <input name="name" type="text" placeholder="name" value={newRecipe.name} onChange={(event) => setNewRecipe({ ...newRecipe, name: event.target.value })} />
        </label>

        <label>
          Image
          <input name="image" type="url" placeholder="image" value={newRecipe.image} onChange={(event) => setNewRecipe({ ...newRecipe, image: event.target.value })} />
        </label>

        <label>
          Duration
          <input name="duration" type="number" value={newRecipe.duration} onChange={(event) => setNewRecipe({ ...newRecipe, duration: event.target.value })} />
        </label>

        <label>
          Description
          <input name="description" type="text" value={newRecipe.description} onChange={(event) => setNewRecipe({ ...newRecipe, description: event.target.value })} />
        </label>

        <label>
          Servings
          <input name="servings" type="number" value={newRecipe.servings} onChange={(event) => setNewRecipe({ ...newRecipe, servings: event.target.value })} />
        </label>

        <button type="submit">Add Recipe</button>

      </div>

    </form >

  );
};

export default CreateRecipeForm;
