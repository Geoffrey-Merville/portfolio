import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header title="Geoffrey Merville" subtitle="Concepteur Développeur" />
      <Routes>
        <Route path="/accueil" element={<Home />} />
        <Route path="/parcours" element={<Experience />} />
        <Route path="/projets" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;

