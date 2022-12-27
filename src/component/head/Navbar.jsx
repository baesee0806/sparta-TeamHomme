import {
  NavbarWrap,
  AllBox,
  JavascriptBox,
  CssBox,
  ReactBox,
  ReduxBox,
} from "../../styledComponenet/styled";
import { All, JavaScript, CSS, ReacT, Redux } from "../../share/constant.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [btn, setBtn] = useState(null);

  // btn의 값을 클릭한 타겟의 아이디 값으로 바꿔줘라
  const onChangeColor = (e) => {
    setBtn(e.target.id);
  };

  useEffect(() => {
    // 모든 버튼의 아이디
    const allBtnArr = [All, JavaScript, CSS, ReacT, Redux];
    // 클릭한 버튼의 아이디와 다른 값을 필터로 걸러준다.
    const nonTargetedBtnArr = allBtnArr.filter((item) => item !== btn);
    // 만약에 btn의 값이 널이라면 리턴해준다.
    // 맨 처음에 아무 값도 선택이 안 되어야 하는데 null을 btn의 초기값으로 주면 에러가 뜸. 그것을 고치기 위한 코드
    if (document.getElementById(btn) === null) return;
    // id가 btn인 box의 style.color = 붉은색
    document.getElementById(btn).style.color = "#da3237";
    // btn이 아닌 id의 값을 맵으로 돌려서 btn의 아이디와 다른 아이디의 박스 색은 black로 만든다.
    nonTargetedBtnArr.map((item) => {
      return (document.getElementById(item).style.color = "black");
    });
  }, [btn]);

  return (
    <NavbarWrap>
      {/* All area */}
      <AllBox
        id={All}
        // color="black"
        onClick={(e) => {
          navigate(`/${All}`);
          onChangeColor(e);
        }}
      >
        All
      </AllBox>

      {/* Javascript area */}
      <JavascriptBox
        id={JavaScript}
        onClick={(e) => {
          navigate(`/${JavaScript}`);
          onChangeColor(e);
        }}
      >
        Javascript
      </JavascriptBox>

      {/* Css area */}
      <CssBox
        id={CSS}
        onClick={(e) => {
          navigate(`/${CSS}`);
          onChangeColor(e);
        }}
      >
        Css
      </CssBox>

      {/* React area */}
      <ReactBox
        id={ReacT}
        onClick={(e) => {
          navigate(`/${ReacT}`);
          onChangeColor(e);
        }}
      >
        React
      </ReactBox>

      {/* Redux area */}
      <ReduxBox
        id={Redux}
        onClick={(e) => {
          navigate(`/${Redux}`);
          onChangeColor(e);
        }}
      >
        Redux
      </ReduxBox>
    </NavbarWrap>
  );
}

export default Navbar;
