import React, { useEffect, useState } from "react";
import axios from "axios";
import { StBtn } from "../../styledComponenet/styled";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../modal/modal";
import ModifyModal from "../modal/ModifyModal";
import { showDeleteModal } from "../../redux/modules/modal";
import { showModifyModal } from "../../redux/modules/modifymodal";
import { useParams } from "react-router";
import {
  StBtnBox,
  StCmtCard,
  StAddPassword,
  StAddInput,
  StFormLabel,
  StInputForm,
  StCmtForm,
} from "../../styledComponenet/comment";

const CommentForm = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const modifymodal = useSelector((state) => state.modifymodal);
  const param = useParams();

  //commet의 기본 form
  const [comment, setComment] = useState({
    contents: "",
    password: "",
    id: "",
    Postid: param.id,
  });

  // server에서 가져온 data들을 저장.
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    //server에서 data들을 axios를 활용하여 가져옴
    const { data } = await axios.get(
      "https://melodious-lunar-fibre.glitch.me/comments"
    );
    const detail = data.filter((item) => item.Postid === param.id);
    setComments(detail);
    console.log(detail);
  };
  console.log(comments);

  // 추가하기 버튼 눌렀을 때 발생하는 event handler
  const onSubmitHandler = async (comment) => {
    await axios.post(
      "https://melodious-lunar-fibre.glitch.me/comments",
      comment
    );
    fetchComments();
    // input에 입력되어 있는 값들을 onSubmitHandler가 실행된 후 비워주는 역할.
    setComment({
      contents: "",
      password: "",
      id: "",
      Postid: param.id,
    });
  };

  const showDeleteModalHandler = (id) => {
    dispatch(showDeleteModal(id));
  };

  const showModifyModalHandler = (id) => {
    dispatch(showModifyModal(id));
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <StCmtForm>
        <StFormLabel htmlFor="comment">댓글</StFormLabel>
        <StInputForm
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitHandler(comment);
          }}
        >
          <StAddInput
            id="comment"
            type="text"
            onChange={(ev) => {
              const { value } = ev.target;
              setComment({
                ...comment,
                contents: value,
              });
            }}
            value={comment.contents}
            placeholder="댓글을 입력해주세요"
          />
          <StAddPassword
            type="password"
            onChange={(ev) => {
              const { value } = ev.target;
              setComment({
                ...comment,
                password: value,
              });
            }}
            value={comment.password}
            placeholder="비밀번호"
          />
          <StBtn style={{ height: 60 }} background="#4cb050" color="white">
            추가
          </StBtn>
        </StInputForm>
        {comments
          ?.map((comment) => (
            <StCmtCard key={comment.id}>
              <div>{comment.contents}</div>
              <StBtnBox>
                <StBtn
                  background="#1785f2"
                  color="white"
                  onClick={() => {
                    return showModifyModalHandler(comment.id);
                  }}
                >
                  수정
                </StBtn>
                <StBtn
                  background="transparent"
                  color="#e5092f"
                  onClick={() => {
                    return showDeleteModalHandler(comment.id);
                  }}
                >
                  삭제
                </StBtn>
              </StBtnBox>
            </StCmtCard>
          ))
          // 가장 최근에 달린 comment를 위에 보여주기 위해 reverse사용
          .reverse()}
      </StCmtForm>
      {modal.show && (
        <Modal fetchComments={fetchComments} comments={comments} />
      )}
      {modifymodal.show && (
        <ModifyModal
          fetchComments={fetchComments}
          comments={comments}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default CommentForm;
