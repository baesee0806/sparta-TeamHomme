import {
  HeaderWrap,
  HeaderHomme,
  HeaderNavigateBTN,
} from '../../styledComponenet/styled';
import { useNavigate } from 'react-router-dom';

function Header() {
  const PortAdress = window.location.pathname;
  const navigate = useNavigate();

  return (
    <HeaderWrap>
      {/* Header area */}
      <HeaderHomme
        onClick={() => {
          navigate('/');
        }}
      >
        Homme
      </HeaderHomme>
      {PortAdress.toString() == '/post' ? (
        <HeaderNavigateBTN
          onClick={() => {
            navigate(-1);
          }}
        >
          이전화면
        </HeaderNavigateBTN>
      ) : PortAdress.toString() == '/' ? (
        <HeaderNavigateBTN
          onClick={() => {
            navigate('/post');
          }}
        >
          글쓰기
        </HeaderNavigateBTN>
      ) : null}
    </HeaderWrap>
  );
}

export default Header;
