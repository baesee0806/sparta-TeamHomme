import styled from "styled-components";

// CommentForm.jsx

const StCmtForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 50px;
`;
const StInputForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const StFormLabel = styled.label`
  font-size: 30px;
  font-weight: 1000;
`;

const StAddInput = styled.input`
  border: 2px solid #e7e8e7;
  height: 50px;
  width: 78.5%;
  margin-right: 1%;
`;

const StAddPassword = styled.input`
  border: 2px solid #e7e8e7;
  height: 50px;
`;

const StCmtCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid #e7e8e7;
  height: 60px;
`;

const StBtnBox = styled.div`
  display: flex;
  gap: 0.7rem;
`;

export {
  StBtnBox,
  StCmtCard,
  StAddPassword,
  StAddInput,
  StFormLabel,
  StInputForm,
  StCmtForm,
};
