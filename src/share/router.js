import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../page/Detail";
// import AllPage from "../page/AllPage";
// import CssPage from "../page/CssPage";
import HomePage from "../page/HomePage";
import JavascriptPage from "../page/JavascriptPage";
import NotFound from "../page/NotFound";
import Write from "../page/Write";
import Update from "../page/Update";
// import ReactPage from "../page/ReactPage";
// import ReduxPage from "../page/ReduxPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="detail/:id" element={<Detail />} />
        <Route path="/" element={<HomePage />} />
        {/* <Route path="AllPage/:category" element={<AllPage />} /> */}
        <Route path=":category" element={<JavascriptPage />} />
        {/* <Route path="CssPage/:category" element={<CssPage />} />
        <Route path="ReactPage/:category" element={<ReactPage />} />
        <Route path="ReduxPage/:category" element={<ReduxPage />} /> */}
        <Route path="notFound" element={<NotFound />} />
        <Route path="/post" element={<Write />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
