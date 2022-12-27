import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StBtn } from "../../styledComponenet/styled";
import { hideDeleteModal } from "../../redux/modules/modal";
import axios from "axios";
import {
  StmodalContainer,
  StmodalBox,
  StmodalBtn,
  ModalDeleteInput,
} from "../../styledComponenet/modalDelete";

const Modal = ({ fetchComments, comments }) => {
  const dispatch = useDispatch();

  // redux > modules > modal에 modalId를 가져옴
  const modalId = useSelector((state) => state.modal.modalId);
  // modal창 안에 있는 input(비밀번호) 값을 받아옴
  const [pwcheck, setPwcheck] = useState("");

  // modal창 안에 있는 input(비밀번호)를 setPwcheck에 저장.
  const onChangePw = (e) => {
    setPwcheck(e.target.value);
  };

  // modal창 영역 밖을 클릭시 modal창 끔.
  const closeModalIfClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(hideDeleteModal());
    }
  };

  // 모달창을 끄는 event handler
  const closeModalHandler = (id) => {
    dispatch(hideDeleteModal(id));
  };

  // 댓글 삭제하는 event handler
  const onDeleteComments = async (id) => {
    const comment = comments.find((item) => item.id === id);
    console.log(comment);
    // 조건 : 저장된 비밀번호와 입력한 비밀번호가 같고 id값이 같은 요소만 삭제
    // id값이 같다는 조건을 안줄시 저장된 요소들을 전체 돌면서 같은 비밀번호가 있으면 입력한 비밀번호가 다르더라도 삭제됨.
    if (comment.password === pwcheck && id === id) {
      await axios.delete(`http://localhost:3001/comments/${id}`);
      // 삭제되었을 시 다시 axios.get해서 댓글 list를 가져옴...
      // 서버와 연결이 자주 있어서 안좋은 방법 같음....
      fetchComments();
      // 반드시 리턴을 해줘야 끝남 아니면 계속 돔.
      return;
    } else {
      alert("비밀번호를 확인해주세요.");
      // 반드시 리턴을 해줘야 끝남 아니면 계속 돔.
      return;
    }
  };

  return (
    <StmodalContainer onClick={(e) => closeModalIfClickOutside(e)}>
      <StmodalBox>
        <div>정말로 삭제하시겠습니까?</div>
        <label htmlFor="pw">삭제를 원하시면 비밀번호를 입력해주세요</label>
        <form
          // 버튼이 실행되었을 시 리렌더링이 되는 것을 방지.
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <ModalDeleteInput
            placeholder="비밀번호"
            type="password"
            id="pw"
            name="pw"
            onChange={onChangePw}
            value={pwcheck}
          />
          <StmodalBtn>
            <StBtn
              background="gray"
              color="white"
              onClick={() => closeModalHandler()}
            >
              취소
            </StBtn>
            <StBtn
              background="#e5092f"
              color="white"
              onClick={() => {
                onDeleteComments(modalId);
                closeModalHandler();
              }}
            >
              삭제
            </StBtn>
          </StmodalBtn>
        </form>
      </StmodalBox>
    </StmodalContainer>
  );
};

export default Modal;
