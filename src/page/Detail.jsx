import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div>
      Detail
      <button onClick={() => navigate(`/update/${id}`)}>수정페이지 이동</button>
    </div>
  );
}
