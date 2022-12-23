import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StBtn } from "../../styledComponenet/styled";
import { deleteComment } from "../../redux/modules/modules";
import { hideModal } from "../../redux/modules/modal";
import styled from "styled-components";
import axios from "axios";

const StmodalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  margin: auto;
  background-color: rgba(0 0 0/60%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
const StmodalBox = styled.div`
  width: 500px;
  height: 250px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 1rem;
`;
const StmodalBtn = styled.div`
  display: flex;
  gap: 1rem;
`;

const Modal = ({ comments, setComments, fetchComments }) => {
  const dispatch = useDispatch();
  const modalId = useSelector((state) => state.modal.modalId);
  //   const [comments, setComments] = useState([]);

  const closeModalIfClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(hideModal());
    }
  };

  const closeModalHandler = (id) => {
    dispatch(hideModal(id));
  };

  const onDeleteComments = async (id) => {
    await axios.delete(`http://localhost:3001/comments/${id}`);
    fetchComments();
  };

  return (
    <StmodalContainer onClick={(e) => closeModalIfClickOutside(e)}>
      <StmodalBox>
        <div>정말로 삭제하시겠습니까?</div>
        <StmodalBtn>
          <StBtn
            background="gray"
            color="white"
            onClick={() => closeModalHandler()}
          >
            취소
          </StBtn>
          <StBtn
            background="red"
            color="white"
            onClick={() => {
              onDeleteComments(modalId);
              //   debugger;
              closeModalHandler();
            }}
          >
            삭제
          </StBtn>
        </StmodalBtn>
      </StmodalBox>
    </StmodalContainer>
  );
};

export default Modal;
