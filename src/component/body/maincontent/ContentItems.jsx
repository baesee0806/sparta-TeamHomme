import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ListBox,
  PageText,
  ListFooterBox,
  ItemWriter,
  Figcaption,
} from "../../../styledComponenet/mainContent";

import Time from "./Time";

function ContentItems({ item }) {
  const navigate = useNavigate();

  return (
    <ListBox onClick={() => navigate(`/detail/${item.id}`)}>
      <figure>
        <PageText>{item.category}</PageText>
        <h2>{item.title}</h2>
        <p>
          {item.content.length > 100
            ? item.content.slice(0, 100) + "..."
            : item.content}
        </p>
        <ListFooterBox>
          <ItemWriter>{item.writer}</ItemWriter>
          <Time />
        </ListFooterBox>
        <Figcaption>자세히보기</Figcaption>
      </figure>
    </ListBox>
  );
}

export default ContentItems;
