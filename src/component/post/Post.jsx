import React from 'react';
import './App.css';
import {
  PostContainer,
  PostTopWrapper,
  PostWriterWrapper,
  PostPasswordWrapper,
  PostLabel,
  PostInput,
  PostTextarea,
  PostButton,
} from 'styled-components';
import { useState, useEffect } from 'react';

export default function App() {
  const [writer, setWriter] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (writer.length > 5) return alert('작성자 이름은 5글자 이내');
    // if (writer === '') return alert('작성자 이름을 입력해 주세요');
    if (writer.length === 0) return alert('작성자 이름을 입력해 주세요');
    if (title.length > 50) return alert('제목은 50자 이내로 입력해주세요.');
    if (title.length === 0) return alert('제목을 입력해 주세요');
    if (contents.length > 200) return alert('내용은 200자 이내로 입력해주세요');
    if (contents.length === 0) return alert('내용을 입력해 주세요');

    alert('추가되었습니다.');

    return (
      <>
        <PostContainer onSubmit={onSubmit}>
          {/* 상단 wrapper */}
          <PostTopWrapper>
            <PostWriterWrapper>
              <PostLabel htmlFor='name'>작성자</PostLabel>
              {/* 작성자 이름을 입력하는 Input */}
              <PostInput
                type='text'
                id='name'
                value={writer}
                onChange={(e) => setWriter(e.target.value)}
                placeholder='작성자의 이름을 입력해주세요. (5자 이내)'
              />
            </PostWriterWrapper>
            <PostPasswordWrapper>
              <PostLabel htmlFor='password'>비밀번호</PostLabel>
              {/* 비밀번호를 입력하는 Input */}
              <PostInput type='password' id='password' placeholder='비밀번호' />
            </PostPasswordWrapper>
          </PostTopWrapper>
          {/* 하단 */}
          <div>
            <PostLabel htmlFor='title'>제목</PostLabel>
            {/* 제목을 입력하는 Input */}
            <PostInput
              type='text'
              id='title'
              placeholder='제목을 입력해주세요.(50자 이내)'
            />
          </div>
          <div>
            <PostLabel htmlFor='content'>내용</PostLabel>
            {/* 내용을 입력하는 Textarea */}
            <PostTextarea
              type='text'
              id='content'
              placeholder='내용을 입력해주세요. (200자 이내)'
            />
          </div>
          {/* 작성한 글을 추가하는 버튼 */}
          <PostButton type='submit'>추가하기</PostButton>
        </PostContainer>
      </>
    );
  };
}

//axios , jsonServer 실습한 파일 완벽히 동작 하는것. - 내 깃에 올려서 레포지 주소를 성완님께 드린다.
