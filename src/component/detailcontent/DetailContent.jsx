import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CommentForm from "../../component/comment/CommentForm";

import {
  DetailBigWrap,
  DetailWrap,
  DetailTitle,
  DetailBtnWrap,
  // DetailBtn,
  DetailContentWrap,
  DetailContent,
  DetailCategory,
  PasswordCheckBox,
  PasswordCheckLabel,
  PassWordCheckInput,
  DetailTextBox,
  DetailWriter,
} from "../../styledComponenet/detailContent";
import { StBtn } from "../../styledComponenet/styled";
function DetailContents() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [lists, setLists] = useState([]);
  const [pwCheck, setPwCheck] = useState("");
  const fetchItem = async () => {
    const { data } = await axios.get("http://localhost:3010/Item/");
    setLists(data);
  };
  const onDeleteContent = async (id) => {
    await axios.delete(`http://localhost:3010/Item/${id}`);
    fetchItem();
    navigate(`/`);
  };
  useEffect(() => {
    fetchItem();
  }, []);

  const list = lists.filter((el) => el.id == id);
  console.log(list);

  return (
    <DetailBigWrap>
      <DetailCategory>{"카테고리 > " + list[0]?.category}</DetailCategory>
      <DetailWrap>
        <DetailTextBox>
          <DetailTitle>{list[0]?.title}</DetailTitle>
          <DetailWriter>{list[0]?.writer}</DetailWriter>
        </DetailTextBox>
        <DetailBtnWrap>
          <PasswordCheckBox>
            <PasswordCheckLabel htmlFor="password">
              비밀번호 :{" "}
            </PasswordCheckLabel>
            <PassWordCheckInput
              id="password"
              type="password"
              value={pwCheck}
              onChange={(e) => setPwCheck(e.target.value)}
            />
          </PasswordCheckBox>
          <div>
            <StBtn
              background="black"
              color="white"
              onClick={() => {
                list[0]?.password == pwCheck
                  ? navigate(`/update/${id}`)
                  : alert("비밀번호가 틀렸습니다.");
              }}
            >
              수정
            </StBtn>
            <StBtn
              background="black"
              color="white"
              onClick={() => {
                list[0]?.password == pwCheck
                  ? onDeleteContent(id)
                  : alert("비밀번호가 틀렸습니다.");
              }}
            >
              삭제
            </StBtn>
          </div>
        </DetailBtnWrap>
      </DetailWrap>
      <DetailContentWrap>
        <DetailContent>{list[0]?.contents}</DetailContent>
      </DetailContentWrap>
      <CommentForm />
    </DetailBigWrap>
  );
}

export default DetailContents;
