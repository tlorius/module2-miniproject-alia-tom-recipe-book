import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import List from "./components/List";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <List />
      <Footer />
    </div>
  );
}

export default App;
