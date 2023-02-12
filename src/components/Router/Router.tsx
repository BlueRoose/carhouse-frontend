import { FC } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import About from "../../pages/About/About";
import CarPage from "../../pages/CarPage/CarPage";
import CheckUser from "../../pages/CheckUser/CheckUser";
import Collections from "../../pages/Collections/Collections";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";
import Services from "../../pages/Services/Services";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/car/:id" element={<CarPage />} />
        <Route path="/admin" element={<CheckUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
