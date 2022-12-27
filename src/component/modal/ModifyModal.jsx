import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StBtn } from "../../styledComponenet/styled";
import { hideModifyModal } from "../../redux/modules/modifymodal";
import styled from "styled-components";
import axios from "axios";

const StmodalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  background-color: rgba(0 0 0/60%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
const StmodalBox = styled.div`
  padding: 20px;
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
  justify-content: center;
  gap: 1rem;

  margin-top: 30px;
`;

const Stmodalinput = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Stmodifyinput = styled.input`
  height: 3rem;
  width: 20rem;
`;

const ModalModifyInput = styled.input`
  width: 98%;
  height: 30px;
`;

const ModifyModal = ({ fetchComments, comments }) => {
  const dispatch = useDispatch();

  // redux > modules > modal에 modalId를 가져옴
  const MmodalId = useSelector((state) => state.modifymodal.MmodalId);
  // modal창 안에 있는 input(비밀번호) 값을 받아옴
  const [pwcheck, setPwcheck] = useState("");
  const [modifyCmt, setModifyCmt] = useState([]);

  // modal창 안에 있는 input(비밀번호)를 setPwcheck에 저장.
  const onChangePw = (e) => {
    setPwcheck(e.target.value);
  };

  const fetchCmts = async () => {
    const { data } = await axios.get(`http://localhost:3001/comments/`);
    const modify = data.find((comments) => comments.id === MmodalId);
    setModifyCmt(modify);
  };

  useEffect(() => {
    fetchCmts();
  }, []);

  // modal창 영역 밖을 클릭시 modal창 끔.
  const closeModalIfClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(hideModifyModal());
    }
  };

  // 모달창을 끄는 event handler
  const closeModalHandler = (id) => {
    dispatch(hideModifyModal(id));
  };

  // 댓글 수정하는 event handler
  const onModifyComments = async (id) => {
    const comment = comments.find((item) => item.id === id);
    // 조건 : 저장된 비밀번호와 입력한 비밀번호가 같고 id값이 같은 요소만 삭제
    if (comment.password === pwcheck && id === id) {
      await axios.patch(`http://localhost:3001/comments/${id}`, modifyCmt);
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
        <div>수정하시겠습니까?</div>
        <label htmlFor="pw">수정을 원하시면 비밀번호를 입력해 주세요</label>
        <form
          // 버튼이 실행되었을 시 리렌더링이 되는 것을 방지.
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Stmodalinput>
            <ModalModifyInput
              type="password"
              id="pw"
              name="pw"
              placeholder="비밀번호"
              onChange={onChangePw}
              value={pwcheck}
            />
            <Stmodifyinput
              type="text"
              name="modify"
              onChange={(e) => {
                setModifyCmt({ ...comments, contents: e.target.value });
              }}
              value={modifyCmt.contents}
            />
          </Stmodalinput>
          <StmodalBtn>
            <StBtn
              background="gray"
              color="white"
              onClick={() => closeModalHandler()}
            >
              취소
            </StBtn>
            <StBtn
              background="#1585f1"
              color="white"
              onClick={() => {
                onModifyComments(MmodalId);
                closeModalHandler();
              }}
            >
              수정
            </StBtn>
          </StmodalBtn>
        </form>
      </StmodalBox>
    </StmodalContainer>
  );
};

export default ModifyModal;
