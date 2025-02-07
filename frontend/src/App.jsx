import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./Components/Navbar";
import Publication from "./pages/publication";
import Academics from "./pages/academics";
import Gallery from "./pages/gallery";
import Achievement from "./pages/achievement";
import Conference from "./pages/conference";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/achievements" element={<Achievement />} />
        <Route path="/conferences" element={<Conference />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/publications" element={<Publication />} />


        {/* <Route path="dashboard/*" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
