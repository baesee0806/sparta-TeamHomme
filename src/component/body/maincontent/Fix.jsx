import React from "react";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
import {
  PostContainer,
  PostTopWrapper,
  PostInput,
  PostTextarea,
  PostButton,
  PostWriterWrapper,
  // PostPasswordWrapper,
  PostLabel,
} from "../../../styledComponenet/postStyled";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Detail... 으로 된 부분은 수정해야된다.
// Detail Page가 만들어지고 Detail에서 받아온 props나 useSelector을 이용해 받아온 값을 이용한다.
export default function Fix() {
  const navigate = useNavigate();
  const param = useParams();
  const [data, setData] = useState([]);

  // async await 코드가 실행되고 다음 코드를 실행해줘
  // fetchTodos 함수에서만 적용된다.
  // 따라서 처음 렌더링할 때 get 요청을 보냈지만 그 전에 밑에 다른 코드들이 실행되고, 데이터를 가져온 다음 state가 변경되서 다시 렌더링된다.
  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3010/Item/");
    const detail = data.find((item) => item.id.toString() === param.id);
    setData(detail);
  };

  // 렌더링하기 전에 실행되어야 하는 부분
  // useEffect 부분이 실행되고 그 다음 return문 컴포넌트 부분이 실행된다.
  useEffect(() => {
    fetchTodos();
  }, []);

  //   undefined 라서 처음에 렌더링이 안되고 에러가 뜬다.
  //     const detail = data.find((item) => item.id.toString() === param.id);

  const onSubmit = async (e, edit) => {
    e.preventDefault();
    if (edit.writer.length > 5)
      return alert("작성자 이름은 5글자 이내로 입력해주세요");
    // if (writer.length === 0) return alert("작성자 이름을 입력해 주세요");
    if (edit.title.length > 50)
      return alert("제목은 50자 이내로 입력해주세요.");
    if (edit.title.length === 0) return alert("제목을 입력해 주세요");
    if (edit.contents.length > 200)
      return alert("내용은 200자 이내로 입력해주세요");
    if (edit.contents.length === 0) return alert("내용을 입력해 주세요");

    alert("추가되었습니다.");
    await axios.patch(`http://localhost:3010/item/${data.id}`, data);

    // fetchItems() -> 아이탬을 다시 불러온다 ... 데이터에 있는걸 다시 가져온다 하지만 포스트만 하면 ok이기 때문에 다시 가져올 필요가없다.
    // setItems([...items, item]); -- 이녀석이 fetch랑 똑같은 기능이기 때문에 필요없다.

    // value 의 값들이 item.xxx 이기 때문에 각 아이템들의 value 값들을 빈 값으로 만들어 준다는 코드
    navigate(`/detail/${data.id}`);
  };

  return (
    <>
      <PostContainer onSubmit={(e) => onSubmit(e, data)}>
        {/* 상단 wrapper */}
        <PostTopWrapper>
          <PostWriterWrapper>
            <PostLabel htmlFor="name">작성자</PostLabel>
            {/* 작성자 이름을 입력하는 Input */}
            <PostInput
              type="text"
              id="name"
              maxLength={6}
              value={data.writer || ""}
              onChange={(e) => {
                setData({ ...data, writer: e.target.value });
              }}
            />
          </PostWriterWrapper>
        </PostTopWrapper>
        {/* 하단 */}
        <div>
          <PostLabel htmlFor="title">제목</PostLabel>
          {/* 제목을 입력하는 Input */}
          <PostInput
            type="text"
            id="title"
            maxLength={51}
            value={data.title || ""}
            onChange={(e) => {
              // item.title 에 입력한 값을 주기 때문에 value를 item.title 로 해준다.
              setData({ ...data, title: e.target.value });
            }}
          />
        </div>
        <div>
          <PostLabel htmlFor="title">카테고리</PostLabel>
          <select
            value={data.category}
            onChange={(e) => {
              setData({ ...data, category: e.target.value });
            }}
          >
            <option value="choice">--선택--</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="Redux">Redux</option>
          </select>
        </div>
        <div>
          <PostLabel htmlFor="contents">내용</PostLabel>
          {/* 내용을 입력하는 Textarea */}
          <PostTextarea
            type="text"
            id="contents"
            maxLength={201}
            value={data.contents || ""}
            onChange={(e) => {
              setData({ ...data, contents: e.target.value });
            }}
          />
        </div>
        {/* 작성한 글을 추가하는 버튼 */}
        <PostButton type="submit">수정하기</PostButton>
      </PostContainer>
    </>
  );
}
