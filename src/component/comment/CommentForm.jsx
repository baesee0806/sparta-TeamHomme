import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { StBtn } from "../../styledComponenet/styled";
import { useDispatch, useSelector } from "react-redux";
import { addComment, deleteComment } from "../../redux/modules/modules";
import Modal from "../modal/modal";
import { showModal } from "../../redux/modules/modal";

const StCmtForm = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
  padding: 30px 50px;
`;
const StInputForm = styled.form`
  display: flex;
  flex-direction: row;
`;
const StFormLabel = styled.label`
  font-size: 30px;
  font-weight: 1000;
`;

const StAddInput = styled.input`
  border: 3px solid gray;
  border-radius: 10px;
  height: 50px;
  width: 100%;

  margin-right: 1%;
`;

const StCmtCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 4px solid black;
  height: 60px;
`;
// const StPwInput = styled.input`
//   width: 7rem;
//   height: 2rem;

//   margin-right: 0.5rem;
// `;

const CommentForm = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  const [comment, setComment] = useState({
    contents: "",
    password: "",
    id: "",
  });
  const [comments, setComments] = useState(null);

  const fetchComments = async () => {
    const { data } = await axios.get("http://localhost:3001/comments");
    setComments(data);
  };

  const onSubmitHandler = async (comment) => {
    await axios.post("http://localhost:3001/comments", comment);
    fetchComments();
    // dispatch(addComment({ ...comment }));
    // setComment({
    //   contents: "",
    //   password: "",
    //   id: "",
    // });
  };

  const showModalHandler = (id) => {
    dispatch(showModal(id));
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <StCmtForm>
        <StFormLabel>댓글</StFormLabel>
        <StInputForm
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitHandler(comment);
          }}
        >
          <StAddInput
            type="text"
            onChange={(ev) => {
              const { value } = ev.target;
              setComment({
                ...comment,
                contents: value,
              });
            }}
            value={comment.contents}
            placeholder="댓글을 입력해주세요"
          />
          <input
            type="password"
            onChange={(ev) => {
              const { value } = ev.target;
              setComment({
                ...comment,
                password: value,
              });
            }}
            value={comment.password}
            placeholder="비밀번호"
          />
          <StBtn background="black" color="white">
            추가
          </StBtn>
        </StInputForm>
        {comments
          ?.map((comment) => (
            <StCmtCard>
              <div key={comment.id}>{comment.contents}</div>
              <div>
                <StBtn background="black" color="white">
                  수정
                </StBtn>
                <StBtn
                  background="black"
                  color="white"
                  onClick={() => showModalHandler(comment.id)}
                >
                  삭제
                </StBtn>
              </div>
            </StCmtCard>
          ))
          .reverse()}
      </StCmtForm>
      {modal.show && (
        <Modal
          comments={comments}
          setComments={setComments}
          fetchComments={fetchComments}
        />
      )}
    </>
  );
};

export default CommentForm;
