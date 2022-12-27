import styled from "styled-components";

// MainContent.jsx

export const MainContentWrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageTitle = styled.h1`
  padding-right: 1200px;
`;

// ContentItems.jsx

export const ListBox = styled.div`
  padding: 10px 0;
  border-top: 1px solid #eee;
  width: 95%;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &:hover Figcaption,
  &:focus Figcaption {
    opacity: 0.5;
  }
`;

export const PageText = styled.h5`
  line-height: 0px;
`;

export const ListFooterBox = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemWriter = styled.span`
  font-size: 12px;
`;

export const Figcaption = styled.figcaption`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  text-align: center;
  line-height: 200px;
  opacity: 0;
  transition: 0.3s;
`;

// TopBtn.jsx

export const PositionContainer = styled.div`
  position: fixed;
  width: 95%;
  bottom: 95px;
  z-index: 1000;
`;

export const TopBtn = styled.button`
  position: absolute;
  right: 0;
  border: 1px solid black;
  border-radius: 50%;
  background-color: transparent;
  font-size: 40px;
  opacity: 0.3;
  cursor: pointer;
`;

// Time.jsx

export const TimeSpan = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  color: #94969b;
  vertical-align: top;
`;
