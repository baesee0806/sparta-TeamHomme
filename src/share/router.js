import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommentForm from "../component/comment/CommentForm";

function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommentForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default router;
