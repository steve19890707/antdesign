import { Routes, Route, Navigate } from "react-router-dom";
// common
import { AppLayout } from "./Common/Layout";
// component
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { Other } from "./Pages/Other";
import { Product } from "./Pages/Product";

export const AppRoutes = () => {
  return <AppLayout>
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/product" element={<Product />} />
      <Route exact path="/other" element={<Other />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  </AppLayout>
};