
import {
  DetailWrap,
  DetailTitle,
  DetailBtnWrap,
  DetailBtn,
  DetailContentWrap,
  DetailContent,
} from '../../styledComponenet/detailContent';
import axios from "axios";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";

const Lists = {
  id: 1,
  title: '리엑트는 어려워',
  content: '진심 이해가 하나도 안되는거 같은데 어떡하죠..여자친구의 전화를 받으면서 코딩 하는거는 정말 어려운일이죠 멀티 태스킹을 잘했으면 좋겠어요 다들 잘할수 있나요 아무말이나 끄적여 보는데진심 이해가 하나도 안되는거 같은데 어떡하죠..여자친구의 전화를 받으면서 코딩 하는거는 정말 어려운일이죠 멀티 태스킹을 잘했으면 좋겠어요 다들 잘할수 있나요 아무말이나 끄적여 보는데진심 이해가 하나도 안되는거 같은데 어떡하죠..여자친구의 전화를 받으면서 코딩 하는거는 정말 어려운일이죠 멀티 태스킹을 잘했으면 좋겠어요 다들 잘할수 있나요 아무말이나 끄적여 보는데진심 이해가 하나도 안되는거 같은데 어떡하죠..여자친구의 전화를 받으면서 코딩 하는거는 정말 어려운일이죠 멀티 태스킹을 잘했으면 좋겠어요 다들 잘할수 있나요 아무말이나 끄적여 보는데진심 이해가 하나도 안되는거 같은데 어떡하죠..여자친구의 전화를 받으면서 코딩 하는거는 정말 어려운일이죠 멀티 태스킹을 잘했으면 좋겠어요 다들 잘할수 있나요 아무말이나 끄적여 보는데진심 이해가 하나도 안되는거 같은데 어떡하죠..여자친구의 전화를 받으면서 코딩 하는거는 정말 어려운일이죠 멀티 태스킹을 잘했으면 좋겠어요 다들 잘할수 있나요 아무말이나 끄적여 보는데진심 이해가 하나도 안되는거 같은데 어떡하죠..여자친구의 전화를 받으면서 코딩 하는거는 정말 어려운일이죠 멀티 태스킹을 잘했으면 좋겠어요 다들 잘할수 있나요 아무말이나 끄적여 보는데진심 이해가 하나도 안되는거 같은데 어떡하죠..여자친구의 전화를 받으면서 코딩 하는거는 정말 어려운일이죠 멀티 태스킹을 잘했으면 좋겠어요 다들 잘할수 있나요 아무말이나 끄적여 보는데진심 이해가 하나도 안되는거 같은데 어떡하죠..여자친구의 전화를 받으면서 코딩 하는거는 정말 어려운일이죠 멀티 태스킹을 잘했으면 좋겠어요 다들 잘할수 있나요 아무말이나 끄적여 보는데진심 이해가 하나도 안되는거 같은데 어떡하죠..여자친구의 전화를 받으면서 코딩 하는거는 정말 어려운일이죠 멀티 태스킹을 잘했으면 좋겠어요 다들 잘할수 있나요 아무말이나 끄적여 보는데진심 이해가 하나도 안되는거 같은데 어떡하죠..여자친구의 전화를 받으면서 코딩 하는거는 정말 어려운일이죠 멀티 태스킹을 잘했으면 좋겠어요 다들 잘할수 있나요 아무말이나 끄적여 보는데 ',
};

function DetailContents() {
    const navigate = useNavigate();
    const { id } = useParams();
 


  return (
    <>
      <DetailWrap>
        <DetailTitle>{Lists.title}</DetailTitle>
        <DetailBtnWrap>
          <DetailBtn onClick={() => navigate(`/update/${id}`)}>수정</DetailBtn>
          <DetailBtn  onClick={() => { }} >삭제</DetailBtn>
        </DetailBtnWrap>
      </DetailWrap>
      <DetailContentWrap>
        <DetailContent>{Lists.content}</DetailContent>
      </DetailContentWrap>
    </>
  );
}

export default DetailContents;

