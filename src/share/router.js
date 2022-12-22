


import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../page/Detail";
import AllPage from "../page/AllPage";
import CssPage from "../page/CssPage";
import HomePage from "../page/HomePage";
import JavascriptPage from "../page/JavascriptPage";
import ReactPage from "../page/ReactPage";
import ReduxPage from "../page/ReduxPage";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="detail/:id" element={<Detail />} />

        <Route path="/" element={<HomePage/>} />
        <Route path="AllPage" element={<AllPage/>} />
        <Route path="JavascriptPage" element={<JavascriptPage/>} />
        <Route path="CssPage" element={<CssPage/>} />
        <Route path="ReactPage" element={<ReactPage/>} />
        <Route path="ReduxPage" element={<ReduxPage/>} />

      </Routes>
    </BrowserRouter>
  );
};


export default Router;

