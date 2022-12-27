import React from "react";
import {
  PostContainer,
  PostTopWrapper,
  PostWriterWrapper,
  PostPasswordWrapper,
  PostLabel,
  PostInput,
  PostTextarea,
  PostButton,
} from "../../styledComponenet/postStyled";
import { useState } from "react";
import axios from "axios";
import Select from "react-select";
import { v4 as uuidv4 } from "uuid";

const OPTIONS = [
  { value: "CSS", label: "CSS" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "React", label: "React" },
  { value: "Redux", label: "Redux" },
];

export default function Post() {
  const [id, setId] = useState(uuidv4());
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [category, setCategory] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (writer.length > 5)
      return alert("작성자 이름은 5글자 이내로 입력해주세요");
    //if (writer === '') return alert ('작성자 이름을 입력해 주세요');
    if (writer.length === 0) return alert("작성자 이름을 입력해 주세요");
    if (title.length > 50) return alert("제목은 50자 이내로 입력해주세요.");
    if (title.length === 0) return alert("제목을 입력해 주세요");
    if (contents.length > 200) return alert("내용은 200자 이내로 입력해주세요");
    if (contents.length === 0) return alert("내용을 입력해 주세요");

    const item = {
      id: id,
      writer: writer,
      password: password,
      title: password,
      contents: contents,
      category: category,
    };

    try {
      await axios.post("http://localhost:3001/item", item);
      alert("추가 성공");
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <>
      <PostContainer onSubmit={(e) => onSubmit(e)}>
        {/* 상단 wrapper */}
        <PostTopWrapper>
          <PostWriterWrapper>
            <PostLabel htmlFor="name">작성자</PostLabel>
            {/* 작성자 이름을 입력하는 Input */}
            <PostInput
              type="text"
              id="name"
              maxLength={6}
              value={writer}
              onChange={(e) => {
                setWriter(e.target.value);
              }}
              placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
            />
          </PostWriterWrapper>
          <PostPasswordWrapper>
            <PostLabel htmlFor="password">비밀번호</PostLabel>
            {/* 비밀번호를 입력하는 Input */}
            <PostInput
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="비밀번호"
            />
          </PostPasswordWrapper>
        </PostTopWrapper>
        {/* 하단 */}
        <div>
          <PostLabel htmlFor="title">제목</PostLabel>
          {/* 제목을 입력하는 Input */}
          <PostInput
            type="text"
            id="title"
            maxLength={51}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="제목을 입력해주세요.(50자 이내)"
          />
        </div>
        <div>
          <PostLabel htmlFor="category">카테고리</PostLabel>
          <Select
            id="category"
            options={OPTIONS}
            onChange={(e) => {
              setCategory(e.value);
            }}
          />
        </div>
        <div>
          <PostLabel htmlFor="content">내용</PostLabel>
          {/* 내용을 입력하는 Textarea */}
          <PostTextarea
            type="text"
            id="content"
            maxLength={201}
            value={contents}
            onChange={(e) => {
              setContents(e.target.value);
            }}
            placeholder="내용을 입력해주세요. (200자 이내)"
          />
        </div>
        {/* 작성한 글을 추가하는 버튼 */}
        <PostButton type="submit">추가하기</PostButton>
      </PostContainer>
    </>
  );
}
