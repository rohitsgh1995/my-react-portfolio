import { Routes, Route } from "react-router-dom";

import Layout from './layouts/Layout';
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="contact-me" element={<ContactMe />} />
      </Route>
    </Routes>
  )
}

export default App;