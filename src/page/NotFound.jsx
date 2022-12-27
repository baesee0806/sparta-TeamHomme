import { useNavigate } from "react-router-dom";
import {
  NotFoundWrap,
  ImgWrap,
  ErrorImg,
  Title,
  Text,
  BackToHomeBtn,
} from "../styledComponenet/notFound";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundWrap>
      <ImgWrap>
        <ErrorImg
          src="https://img.freepik.com/premium-vector/404-error-icon-with-alien-spaceship-page-lost-and-message-not-found-ufo-vector-flat-illustration_501813-1945.jpg?w=1060"
          alt="error"
        />
      </ImgWrap>
      <div>
        <Title>
          OOPS! PAGE
          <br />
          NOT FOUND.
        </Title>
        <Text>
          you must have picked the wrong door because I<br /> haven't been able
          to lay my eye on the page <br />
          you've been searching for.
        </Text>
        <BackToHomeBtn onClick={() => navigate("/")}>
          Back To Home
        </BackToHomeBtn>
      </div>
    </NotFoundWrap>
  );
};

export default NotFound;
