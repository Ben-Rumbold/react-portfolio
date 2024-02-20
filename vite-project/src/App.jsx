import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./dir/Home";
import Projects from "./dir/Projects";
import Contact from "./dir/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
