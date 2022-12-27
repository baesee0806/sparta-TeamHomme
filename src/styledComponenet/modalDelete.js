import styled from "styled-components";
// modal.jsx

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

  margin-top: 30px;
`;

const ModalDeleteInput = styled.input`
  margin-left: 15px;
`;

export { StmodalContainer, StmodalBox, StmodalBtn, ModalDeleteInput };
