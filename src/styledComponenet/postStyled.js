// post Styled Components
import styled from 'styled-components';
export const PostContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 900px;
  margin: 0 auto;
  padding-top: 150px;

  & * {
    box-sizing: border-box;
  }
`;

export const PostTopWrapper = styled.div`
  display: flex;
  width: 100%;
  column-gap: 30px;
`;

export const PostWriterWrapper = styled.div`
  flex: 1;
`;

export const PostPasswordWrapper = styled.div`
  width: 300px;
`;

export const PostLabel = styled.label`
  display: block;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 28px;
`;

export const PostInput = styled.input`
  border-radius: 20px;
  padding: 20px;
  border: 2px solid #999999;
  font-size: 24px;
  width: 100%;

  &::placeholder {
    color: black;
  }
`;

export const PostTextarea = styled.textarea`
  border-radius: 20px;
  padding: 20px;
  border: 2px solid #999999;
  font-size: 24px;
  width: 100%;
  height: 300px;

  &::placeholder {
    color: black;
  }
`;

export const PostButton = styled.button`
  width: 100%;
  background-color: white;
  font-weight: bold;
  border-radius: 20px;
  font-size: 24px;
  padding: 24px;
  border: 2px solid #999999;
  cursor: pointer;
`;
