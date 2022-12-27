import styled from "styled-components";
// ModifyModal.jsx

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

export {};
