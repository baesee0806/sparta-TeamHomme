import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import {
  DetailWrap,
  DetailTitle,
  DetailBtnWrap,
  DetailBtn,
  DetailContentWrap,
  DetailContent,
} from '../../styledComponenet/detailContent';




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
      
      const list = lists.filter(el=>el.id == id)[0]
      
  return (
    <>
      <DetailWrap>
        <DetailTitle>{list.title}</DetailTitle>
        <DetailBtnWrap>
          <DetailBtn onClick={() => navigate(`/update/${id}`)}>수정</DetailBtn>
          <DetailBtn  onClick={() => { }} >삭제</DetailBtn>
        </DetailBtnWrap>
      </DetailWrap>
      <DetailContentWrap>
        <DetailContent>{list.content}</DetailContent>
      </DetailContentWrap>
    </>
  );
}

export default DetailContents;

