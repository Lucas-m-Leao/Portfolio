import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
const TheRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default TheRoutes;
