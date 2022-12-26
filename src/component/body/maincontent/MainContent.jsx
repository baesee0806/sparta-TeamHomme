import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import {
  MainContentWrap,
  // PageTitle,
} from "../../../styledComponenet/mainContent";
import { All, JavaScript, Css, ReacT, Redux } from "../../../share/constant";
import ContentItems from "./ContentItems";
import TopButton from "./TopButton";

function MainContent() {
  const [lists, setLists] = useState([]);
  const navigate = useNavigate();
  const { category } = useParams();

  // 데이터를 가져와서 lists에 넣어 준다.
  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3010/Item/");
    setLists(data);
  };

  // 마운트 시 한번만 데이터 가져옴
  useEffect(() => {
    fetchTodos();
  }, []);

  // 전체 get해서 가져온 데이터의 각각의 아이템 카테고리와 useParams() 로 가져온 category의 값이 같은 것만 filter 해줘라.
  const list = lists.filter((item) => item.category === category);

  console.log(category);
  return (
    <>
      <MainContentWrap>
        {/* <PageTitle>{category === "All" ? "All" : category}</PageTitle> */}
        {/* 1. useParams() 를 사용해서 받아온 category 가 All 이거나 undefined 라면
        전체 리스트를 맵으로 뿌려줘라 */}
        {/* 2. 그게 아니라 JavaScript or Css or ReacT or Redux 라면 각 아이템의 카테고리와
        useParams() 로 가져온 카테고리의 이름이 같은 것만 filter 한 list를 맵으로 뿌려줘라 */}
        {/* 3. 그것도 아니라면 /NotFound 페이지로 이동해라 */}
        {category === All || category === undefined
          ? lists.map((item) => <ContentItems key={item.id} item={item} />)
          : category === JavaScript ||
            category === Css ||
            category === ReacT ||
            category === Redux
          ? list.map((item) => <ContentItems key={item.id} item={item} />)
          : navigate("/notFound")}
        <TopButton />
      </MainContentWrap>
    </>
  );
}

export default MainContent;
