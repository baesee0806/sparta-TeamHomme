import React from "react";
import styled from "styled-components";

import Time from "./Time";

const ListBox = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  width: 1200px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &:hover Figcaption,
  &:focus Figcaption {
    opacity: 1;
  }
`;

const PageText = styled.h5`
  line-height: 0px;
`;

const FooterBox = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Writer = styled.span`
  font-size: 12px;
`;

const Figcaption = styled.figcaption`
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

export default function HommeList({ item }) {
  return (
    <ListBox>
      <figure>
        <PageText>{item.category}</PageText>
        <h2>{item.title}</h2>
        <p>
          {item.content.length > 100
            ? item.content.slice(0, 100) + "..."
            : item.content}
        </p>
        <FooterBox>
          <Writer>{item.writer}</Writer>
          <Time />
        </FooterBox>
        <Figcaption>자세히보기</Figcaption>
      </figure>
    </ListBox>
  );
}
