import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Footer />
      <h2 id="home">Home Page</h2>
      <h2 id="about">About Page</h2>
    </div>
  );
}

export default App;
