import { FC } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
