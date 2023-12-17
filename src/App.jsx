import "./App.css";
import { v4 } from "uuid";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import RecipeDetails from "./pages/RecipeDetails";
import CreateRecipeForm from "./pages/CreateRecipeForm";
import { Route, Routes, useNavigate } from "react-router-dom";
import recipeListData from "./dataset/RecipeList.json";
import { useState } from "react";

function App() {
  const [recipeList, setRecipeList] = useState(recipeListData);

  const deleteRecipeHandler = (currentId) => {
    setRecipeList(
      recipeList.filter((currentRecipe) => currentRecipe.id !== currentId)
    );
  };

  let navigate = useNavigate();

  const handleSubmit = (newRecipe, event, isCreateForm) => {
    event.preventDefault();
    let stepsArray = [];
    let ingredientsArray = [];
    if (typeof newRecipe.stepsToCook === "string") {
      stepsArray = newRecipe.stepsToCook
        .split("\n")
        .filter((line) => line.trim() !== "");
    }
    if (typeof newRecipe.ingredients === "string") {
      ingredientsArray = newRecipe.ingredients
        .split("\n")
        .filter((line) => line.trim() !== "");
    }
    if (isCreateForm) {
      setRecipeList((prevRecipes) => {
        return [
          ...prevRecipes,
          {
            id: v4(),
            name: newRecipe.name,
            image: newRecipe.image,
            duration: newRecipe.duration,
            description: newRecipe.description,
            servings: newRecipe.servings,
            calories: newRecipe.calories,
            fat: newRecipe.fat,
            carbs: newRecipe.carbs,
            protein: newRecipe.protein,
            stepsToCook: stepsArray,
            ingredients: ingredientsArray,
          },
        ];
      });
    } else {
      newRecipe = {
        ...newRecipe,
        stepsToCook: stepsArray,
        ingredients: ingredientsArray,
      };
      setRecipeList(
        recipeList.map((recipe) =>
          recipe.id === newRecipe.id ? newRecipe : recipe
        )
      );
    }
    navigate(`/`);
  };
  return (
    <div>
      <Navbar />

      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              deleteRecipeHandler={deleteRecipeHandler}
              recipeList={recipeList}
            />
          }
        />
        <Route
          path="/:recipename/:recipeid/update"
          element={
            <CreateRecipeForm
              recipeList={recipeList}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/recipe/:recipename/:recipeid"
          element={<RecipeDetails recipeList={recipeList} />}
        />
        <Route
          path="/createrecipe"
          element={<CreateRecipeForm handleSubmit={handleSubmit} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
