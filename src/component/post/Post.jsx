import React from 'react';
import {
  PostContainer,
  PostTopWrapper,
  PostWriterWrapper,
  PostPasswordWrapper,
  PostLabel,
  PostInput,
  PostTextarea,
  PostButton,
} from '../../styledComponenet/postStyled';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default function Post() {
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [item, setItem] = useState({
    id: uuidv4(),
    title: '',
    content: '',
    category: '',
    writer: '',
    password: '',
  });

  const [items, setItems] = useState(null);

  const fetchItems = async () => {
    const { data } = await axios.get('http://localhost:3001/item');
    setItems(data);
  };

  const onSubmit = async (e, item) => {
    e.preventDefault();
    if (writer.length > 5)
      return alert('작성자 이름은 5글자 이내로 입력해주세요');
    // if (writer === '') return alert('작성자 이름을 입력해 주세요');
    if (writer.length === 0) return alert('작성자 이름을 입력해 주세요');
    if (title.length > 50) return alert('제목은 50자 이내로 입력해주세요.');
    if (title.length === 0) return alert('제목을 입력해 주세요');
    if (contents.length > 200) return alert('내용은 200자 이내로 입력해주세요');
    if (contents.length === 0) return alert('내용을 입력해 주세요');
    alert('추가되었습니다.');

    await axios.post('http://localhost:3001/item', item);

    // fetchItems() -> 아이탬을 다시 불러온다 ... 데이터에 있는걸 다시 가져온다 하지만 포스트만 하면 ok이기 때문에 다시 가져올 필요가없다.
    // setItems([...items, item]); -- 이녀석이 fetch랑 똑같은 기능이기때문에 필요없다 .

    setItem({
      writer: '',
      password: '',
      title: '',
      content: '',
      category: '',
    });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <PostContainer onSubmit={(e) => onSubmit(e, item)}>
        {/* 상단 wrapper */}
        <PostTopWrapper>
          <PostWriterWrapper>
            <PostLabel htmlFor='name'>작성자</PostLabel>
            {/* 작성자 이름을 입력하는 Input */}
            <PostInput
              type='text'
              id='name'
              maxLength={6}
              value={writer}
              onChange={(e) => {
                setWriter(e.target.value);
                setItem({ ...item, writer: e.target.value });
              }}
              placeholder='작성자의 이름을 입력해주세요. (5자 이내)'
            />
          </PostWriterWrapper>
          <PostPasswordWrapper>
            <PostLabel htmlFor='password'>비밀번호</PostLabel>
            {/* 비밀번호를 입력하는 Input */}
            <PostInput
              type='password'
              id='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setItem({ ...item, password: e.target.value });
              }}
              placeholder='비밀번호'
            />
          </PostPasswordWrapper>
        </PostTopWrapper>
        {/* 하단 */}
        <div>
          <PostLabel htmlFor='title'>제목</PostLabel>
          {/* 제목을 입력하는 Input */}
          <PostInput
            type='text'
            id='title'
            maxLength={51}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setItem({ ...item, title: e.target.value });
            }}
            placeholder='제목을 입력해주세요.(50자 이내)'
          />
        </div>
        <div>
          <PostLabel htmlFor='title'>카테고리</PostLabel>
          <select
            onChange={(e) => {
              setItem({ ...item, category: e.target.value });
            }}
          >
            <option value='CSS'>CSS</option>
            <option value='JavaScript'>JavaScript</option>
            <option value='React'>React</option>
            <option value='Redux'>Redux</option>
          </select>
        </div>
        <div>
          <PostLabel htmlFor='content'>내용</PostLabel>
          {/* 내용을 입력하는 Textarea */}
          <PostTextarea
            type='text'
            id='content'
            maxLength={201}
            value={contents}
            onChange={(e) => {
              setContents(e.target.value);
              setItem({ ...item, content: e.target.value });
            }}
            placeholder='내용을 입력해주세요. (200자 이내)'
          />
        </div>
        {/* 작성한 글을 추가하는 버튼 */}
        <PostButton type='submit'>추가하기</PostButton>
      </PostContainer>
    </>
  );
}
