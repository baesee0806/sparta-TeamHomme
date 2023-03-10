import {
  HeaderWrap,
  HeaderHomme,
  HeaderNavigateBTN,
} from "../../styledComponenet/styled";
import { useNavigate, useParams } from "react-router-dom";
import { StBtn } from "../../styledComponenet/styled";

function Header() {
  const PortAdress = window.location.pathname;
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <HeaderWrap>
      {/* Header area */}
      <HeaderHomme
        onClick={() => {
          navigate("/");
        }}
      >
        Code Blind
      </HeaderHomme>
      {PortAdress.toString() == "/post" ||
      PortAdress.toString() == `/update/${id}` ||
      PortAdress.toString() == `/detail/${id}` ? (
        <StBtn
          boxShadow="0 0 30px 2px #da3237"
          hoverBoxShadow="0.5rem"
          border="none"
          background="#da3237"
          color="white"
          onClick={() => {
            navigate(-1);
          }}
        >
          이전화면
        </StBtn>
      ) : (
        <StBtn
          boxShadow="0 0 30px 2px #da3237"
          hoverBoxShadow="0.5rem"
          border="none"
          background="#da3237"
          color="white"
          onClick={() => {
            navigate("/post");
          }}
        >
          글쓰기
        </StBtn>
      )}
    </HeaderWrap>
  );
}

export default Header;
