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
import { Route, Routes } from "react-router-dom";
import recipeListData from "./dataset/RecipeList.json";
import { useState } from "react";

function App() {
  const [recipeList, setRecipeList] = useState(recipeListData);

  const deleteRecipeHandler = (currentId) => {
    setRecipeList(
      recipeList.filter((currentRecipe) => currentRecipe.id !== currentId)
    );
  };

  const handleSubmit = (newRecipe) => {
    event.preventDefault();
    setRecipeList(prevRecipes => {
      return [
        ...prevRecipes,
        {
          id: v4(),
          name: newRecipe.name,
          image: newRecipe.image,
        }
      ]

    })
  }
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
          path="/recipe/:recipename/:recipeid"
          element={<RecipeDetails recipeList={recipeList} />}
        />
        <Route path="/createrecipe" element={<CreateRecipeForm handleSubmit={handleSubmit} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
