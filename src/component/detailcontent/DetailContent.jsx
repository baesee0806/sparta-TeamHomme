import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CommentForm from "../../component/comment/CommentForm";

import {
  DetailWrap,
  DetailTitle,
  DetailBtnWrap,
  DetailBtn,
  DetailContentWrap,
  DetailContent,
  DetailCategory,
} from "../../styledComponenet/detailContent";
import { StBtn } from "../../styledComponenet/styled";
function DetailContents() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [lists, setLists] = useState([]);

  const fetchItem = async () => {
    const { data } = await axios.get("http://localhost:3010/Item/");
    setLists(data);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  const list = lists.filter((el) => el.id == id);
  console.log(list);
  return (
    <>
      <DetailCategory>{"카테고리 > " + list[0]?.category}</DetailCategory>
      <DetailWrap>
        <DetailTitle>{list[0]?.title}</DetailTitle>
        <DetailBtnWrap>
          <StBtn  background="black" color="white" onClick={() => navigate(`/update/${id}`)}>수정</StBtn>
          <StBtn background="black" color="white" onClick={() => {}}>삭제</StBtn>
        </DetailBtnWrap>
      </DetailWrap>
      <DetailContentWrap>
        <DetailContent>{list[0]?.contents}</DetailContent>
      </DetailContentWrap>
      <CommentForm />
    </>
  );
}

export default DetailContents;
