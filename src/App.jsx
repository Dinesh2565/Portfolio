import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Skills from "./Components/Skills";
function App() {
  return (<BrowserRouter>
    <div className="min-h-screen bg-black text-white relative ">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Skills />} />
        <Route path="/about" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
