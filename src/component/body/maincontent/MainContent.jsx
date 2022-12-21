import React, { useState } from "react";
import styled from "styled-components";
// import { useInView } from "react-intersection-observer";

import ContentItems from "./ContentItems";
import TopButton from "./TopButton";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Page = styled.h1`
  padding-right: 1200px;
`;

export default function HommeMain() {
  //   const [ref, inView] = useInView();
  const [list, setList] = useState(initialList);

  //   useEffect(() => {
  //     사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
  //     if (inView) {
  //       return;
  //     }
  //   }, [inView]);
  //     console.log(inView);
  return (
    <>
      {/* <h1>{list.page === "All" ? "All" : null}</h1> */}
      <Wrap>
        <Page>All</Page>
        {list.map((item) => (
          <ContentItems key={item.id} item={item} />
        ))}
        <TopButton />
      </Wrap>
    </>
  );
}

const initialList = [
  {
    id: 1,
    title: "제목1",
    content:
      "내용11111111111111111111111111111111111111내용11111111111111111111111111111111111111내용11111111111111111111111111111111111111",
    category: "All",
    writer: "옴므",
  },
  { id: 2, title: "제목2", content: "내용2", category: "All", writer: "옴므" },
  { id: 3, title: "제목3", content: "내용3", category: "Js", writer: "옴므" },
  {
    id: 4,
    title: "제목4",
    content: "내용4",
    category: "React",
    writer: "옴므",
  },
  { id: 5, title: "제목5", content: "내용5", category: "Css", writer: "옴므" },
  {
    id: 6,
    title: "제목6",
    content: "내용6",
    category: "Redux",
    writer: "옴므",
  },
  {
    id: 7,
    title: "제목7",
    content: "내용7",
    category: "React-Router-Dom",
    writer: "옴므",
  },
  {
    id: 8,
    title: "제목8",
    content: "내용8",
    category: "React-Query",
    writer: "옴므",
  },
  { id: 9, title: "제목9", content: "내용9", category: "All", writer: "옴므" },
  {
    id: 10,
    title: "제목10",
    content: "내용10",
    category: "All",
    writer: "옴므",
  },
];
