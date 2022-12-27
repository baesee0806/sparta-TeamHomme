import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../page/Detail";
import HomePage from "../page/HomePage";
import Category from "../page/Category";
import NotFound from "../page/NotFound";
import Write from "../page/Write";
import Update from "../page/Update";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":category" element={<Category />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="/post" element={<Write />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="notFound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
