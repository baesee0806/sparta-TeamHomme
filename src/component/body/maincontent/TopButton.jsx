import React, { useState, useEffect } from "react";
import {
  PositionContainer,
  TopBtn,
} from "../../../styledComponenet/mainContent";

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
