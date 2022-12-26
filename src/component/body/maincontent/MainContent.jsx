import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  MainContentWrap,
  PageTitle,
} from "../../../styledComponenet/mainContent";
import axios from "axios";

import ContentItems from "./ContentItems";
import TopButton from "./TopButton";

function MainContent() {
  const [lists, setLists] = useState([]);
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

  const list = lists.filter((item) => item.category === category);

  console.log(category);
  return (
    <>
      <MainContentWrap>
        {/* <PageTitle>{category === "All" ? "All" : category}</PageTitle> */}
        {category === "All"
          ? lists.map((item) => <ContentItems key={item.id} item={item} />)
          : list.map((item) => <ContentItems key={item.id} item={item} />)}
        <TopButton />
      </MainContentWrap>
    </>
  );
}

export default MainContent;
