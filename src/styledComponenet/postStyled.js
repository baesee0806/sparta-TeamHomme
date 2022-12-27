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
  border-radius: 5px;
  padding: 20px;
  border: 1px solid rgba(153, 153, 153, 0.4);
  font-size: 24px;
  width: 100%;

  &::placeholder {
    color: black;
    opacity: 0.5;
  }
`;

export const PostTextarea = styled.textarea`
  border-radius: 5px;
  padding: 20px;
  border: 1px solid rgba(153, 153, 153, 0.4);
  font-size: 24px;
  width: 100%;
  height: 300px;

  &::placeholder {
    color: black;
    opacity: 0.5;
  }
`;

export const PostButton = styled.button`
  width: 100%;
  background-color: white;
  font-weight: bold;
  border-radius: 5px;
  font-size: 24px;
  padding: 24px;
  opacity: 0.5;
  border: 1px solid rgba(153, 153, 153, 0.4);
  cursor: pointer;
`;
