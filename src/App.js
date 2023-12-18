import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
//import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Header title="Geoffrey Merville" subtitle="Concepteur Développeur" />
      <Routes>
        <Route path="/accueil" element={<Home />} />
        <Route path="/parcours" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;

