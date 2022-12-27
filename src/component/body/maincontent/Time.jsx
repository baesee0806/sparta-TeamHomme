import React from "react";
import { TimeSpan } from "../../../styledComponenet/mainContent";

export default function Time({ time }) {
  // 한국 현재 시간
  let now = new Date();
  // 현재시간을 getTime() 숫자형식으로 바꾸고
  // item.time 시간을 한국 현재 시간 표기법으로 바꾼다.
  // 그리고 숫자형식으로 바꾸고
  // 현재 시간과 item.time(글 작성 시간)을 빼준다.
  let difference = now.getTime() - new Date(time).getTime();

  // 초 단위로 바꿔준다.
  difference = Math.trunc(difference / 1000);

  let ResultTime;

  const seconds = 1;
  const minute = seconds * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const mon = day * 30;
  const year = mon * 12;

  // 조건에 맞게 바로전 or 숫자를 나타내준다.
  if (difference < seconds) {
    ResultTime = "바로 전";
  } else if (difference < minute) {
    ResultTime = Math.trunc(difference / seconds) + "초 전";
  } else if (difference < hour) {
    ResultTime = Math.trunc(difference / minute) + "분 전";
  } else if (difference < day) {
    ResultTime = Math.trunc(difference / hour) + "시간 전";
  } else if (difference < mon) {
    ResultTime = Math.trunc(difference / day) + "일 전";
  } else if (difference < year) {
    ResultTime = Math.trunc(difference / mon) + "달 전";
  } else {
    ResultTime = Math.trunc(difference / year) + "년 전";
  }
  return (
    <div>
      <TimeSpan>{ResultTime}</TimeSpan>
    </div>
  );
}
