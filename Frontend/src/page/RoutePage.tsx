import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Shop from "./Shop";

const RoutePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;
