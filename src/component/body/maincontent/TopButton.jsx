import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PositionContainer = styled.div`
  position: fixed;
  width: 95%;
  bottom: 95px;
  z-index: 1000;
`;

const TopBtn = styled.button`
  position: absolute;
  right: 0;
  border: 1px solid black;
  border-radius: 50%;
  background-color: transparent;
  font-size: 40px;
  opacity: 0.3;
  cursor: pointer;
`;

export default function TopButton() {
  // 버튼 상태
  const [BtnStatus, setBtnStatus] = useState(false);

  // Y축 스크롤 위치에 따라 Show || Hide 함수
  const onShowTopButton = () => {
    if (window.scrollY > 400) setBtnStatus(true);
    else setBtnStatus(false);
  };

  // 클릭시 맨 위로 가는 이벤트
  const onClickTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setBtnStatus(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", onShowTopButton);
      console.log("watch");
    };
    watch();
    return () => {
      window.removeEventListener("scroll", onShowTopButton);
      console.log("remove");
    };
  });

  return (
    <PositionContainer>
      {BtnStatus ? <TopBtn onClick={onClickTopHandler}>🔝</TopBtn> : null}
    </PositionContainer>
  );
}
