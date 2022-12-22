import {
  NavbarWrap,
  AllBox,
  JavascriptBox,
  CssBox,
  ReactBox,
  ReduxBox,
} from "../../styledComponenet/styled";
import { useNavigate, useParams } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  return (
    <NavbarWrap>
      {/* All area */}
      <AllBox
        onClick={() => {
          navigate("/All");
        }}
      >
        All
      </AllBox>

      {/* Javascript area */}
      <JavascriptBox
        onClick={() => {
          navigate("/JavaScript");
        }}
      >
        Javascript
      </JavascriptBox>

      {/* Css area */}
      <CssBox
        onClick={() => {
          navigate("/Css");
        }}
      >
        Css
      </CssBox>

      {/* React area */}
      <ReactBox
        onClick={() => {
          navigate("/React");
        }}
      >
        React
      </ReactBox>

      {/* Redux area */}
      <ReduxBox
        onClick={() => {
          navigate("/Redux");
        }}
      >
        Redux
      </ReduxBox>
    </NavbarWrap>
  );
}

export default Navbar;
