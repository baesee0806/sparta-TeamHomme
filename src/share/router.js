import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Detail from "../page/Detail";
import All from "../page/All";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nav/:category" element={<All />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
