import styled from 'styled-components'



export const DetailWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin-top: 30px;
  border-bottom: 2px solid black;
`;

export const DetailTitle = styled.div`
  margin-left: 18px;
  font-size: 2rem;
  font-weight: bold;
`;

export const DetailBtnWrap = styled.div``;
export const DetailBtn = styled.button`
  margin-right: 18px;
  background: inherit;
  border: none;
  cursor: pointer;
`;

export const DetailContentWrap = styled.div`
  margin: 20px 20px 20px 20px;
  max-height: 1500px;
  min-height: 800px;
`;

export const DetailContent =styled.div`
  font-size: 1.5rem;
`;