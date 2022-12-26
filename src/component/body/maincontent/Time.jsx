import React from "react";
import { TimeSpan } from "../../../styledComponenet/mainContent";

let now = new Date();
let writeDay = new Date("2022-12-21T00:00:00");

let difference = now.getTime() - writeDay.getTime();
difference = Math.trunc(difference / 1000);

let ResultTime;

const seconds = 1;
const minute = seconds * 60;
const hour = minute * 60;
const day = hour * 24;
const mon = day * 30;
const year = mon * 12;

if (difference < seconds) {
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

export default function Time() {
  return (
    <div>
      <TimeSpan>{ResultTime}</TimeSpan>
    </div>
  );
}
