import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import List from "./components/List";
import recipeListData from "./dataset/RecipeList.json";
import { useState } from "react";

function App() {
  const [recipeList, setRecipeList] = useState(recipeListData);

  const deleteRecipeHandler = (currentId) => {

    setRecipeList(recipeList.filter((currentRecipe) => currentRecipe.id !== currentId))
  }


  return (
    <div>
      <Navbar />
      <Sidebar />
      <List recipeList={recipeList} deleteRecipeHandler={deleteRecipeHandler} />
      <Footer />
    </div>
  );
}

export default App;
