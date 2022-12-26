// import Body from '../component/body/Body';
// import Header from '../component/head/Header'
// import Navbar from '../component/head/Navbar'
import styled from 'styled-components';
// import {
//   DetailWrap,
//   DetailTitle,
//   DetailBtnWrap,
//   DetailBtn,
//   DetailContentWrap,
//   DetailContent,
// } from '../styledComponenet/styled';
const Lists = {
  id: 1,
  title: '리엑트는 어려워',
  content: '진심 이해가 하나도 안되는거 같은데 어떡하죠..',
};
function HomePage() {
  return (
    <>
      {/* <Header/>
        <Navbar/>
        <Body/> */}

      {/* 상세페이지 작성 */}
      <DetailWrap>
        <DetailTitle>{Lists.title}</DetailTitle>
        <DetailBtnWrap>
          <DetailBtn>수정</DetailBtn>
          <DetailBtn>삭제</DetailBtn>
        </DetailBtnWrap>
      </DetailWrap>
      <DetailContentWrap>
        <DetailContent>{Lists.content}</DetailContent>
      </DetailContentWrap>
    </>
  );
}

export default HomePage;

//  1. html css
//  2. live share
//  3. redux

// styled component
const DetailWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

const DetailTitle = styled.div`
  margin-left: 18px;

  font-size: 2rem;
  font-weight: bold;
`;

const DetailBtnWrap = styled.div``;
const DetailBtn = styled.button`
  margin-right: 18px;
  background: inherit;
  border: none;
  cursor: pointer;
`;

const DetailContentWrap = styled.div`
  margin: 20px 20px 20px 20px;
  max-height: 1500px;
  min-height: 800px;
`;

const DetailContent =styled.div`
  font-size: 1.5rem;

`;