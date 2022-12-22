import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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

function MainContent() {
  const [lists, setLists] = useState([]);
  const { category } = useParams();

  // 데이터를 가져와서 lists에 넣어 준다.
  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3004/Item/");
    setLists(data);
  };

  // 마운트 시 한번만 데이터 가져옴
  useEffect(() => {
    fetchTodos();
  }, []);

  const list = lists.filter((item) => item.category === category);

  return (
    <>
      <Wrap>
        <Page>{category === undefined ? "All" : category}</Page>
        {category === undefined
          ? lists.map((item) => <ContentItems key={item.id} item={item} />)
          : list.map((item) => <ContentItems key={item.id} item={item} />)}
        <TopButton />
      </Wrap>
    </>
  );
}

export default MainContent;
