import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Background from "./components/Background";
import About from "./pages/about";
import Works from "./pages/works";
import Contact from "./pages/contact";

function App() {
  return (
    <div>
      <Navbar />
      <Background />
      <div className="relative h-screen container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
