import styled from "styled-components";

export const DetailBigWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 200px;
`;

export const DetailCategory = styled.div`
  font-weight: bolder;
  margin: 30px 0 0 18px;
`;

export const DetailWrap = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  border-bottom: 2px solid #e7e8e7;
`;

export const DetailTextBox = styled.div`
  margin-left: 18px;

  align-items: center;
`;

export const DetailWriter = styled.span`
  margin-left: 3px;
  color: #029fad;
`;

export const DetailTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const DetailBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PasswordCheckBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const PasswordCheckLabel = styled.label`
  font-size: 15px;
  font-weight: 600px;
`;

export const PassWordCheckInput = styled.input`
  border: 1px solid #e7e8e7;
  border-radius: 10px;
  &:focus {
    outline-color: #da3236;
  }
`;
export const DetailBtn = styled.button`
  margin-right: 18px;
  background: inherit;
  border: none;
  cursor: pointer;
`;

export const DetailContentWrap = styled.div`
  margin: 20px 20px 20px 20px;
  max-height: 1500px;
  min-height: 400px;
`;

export const DetailContent = styled.div`
  font-size: 1.5rem;
`;
