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
    // 박스를 클릭시 `/detail/해당 아이디` 주소로 이동해라
    // 즉 해당 아이디의 상세페이지로 이동하라는 뜻
    <ListBox onClick={() => navigate(`/detail/${item.id}`)}>
      {/* 자세히 보기를 만들기 위해서 figure로 한번 더 감싸준다. */}
      <figure>
        <PageText>{item.category}</PageText>
        <h2>{item.title}</h2>
        {/* 아이템의 내용이 100자 이상이면 0부터 100번째 글자까지 나타내고 그 뒤에 ... 을 붙인다.
        아니라면 그냥 내용을 전부 보여준다. */}
        <p>
          {item.contents.length > 100
            ? item.contents.slice(0, 100) + "..."
            : item.contents}
        </p>
        <ListFooterBox>
          <ItemWriter>{item.writer}</ItemWriter>
          <Time time={item.time} />
        </ListFooterBox>
        {/* 마우스를 올렸을 때 자세히 보기 창을 띄우는 컴포넌트 */}
        <Figcaption>자세히보기</Figcaption>
      </figure>
    </ListBox>
  );
}

export default ContentItems;
