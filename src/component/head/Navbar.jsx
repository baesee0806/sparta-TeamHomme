import {
  NavbarWrap,
  AllBox,
  JavascriptBox,
  CssBox,
  ReactBox,
  ReduxBox,
} from "../../styledComponenet/styled";
import { All, JavaScript, Css, ReacT, Redux } from "../../share/constant.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [color, setColor] = useState("red");
  const Box = ["All", JavaScript, Css, ReacT, Redux];
  const onChangeColor = (e) => {
    Box.filter((item) =>
      item === e.target.id && color === "red"
        ? setColor("red")
        : setColor("black")
    );
    console.log(e.target);
  };

  return (
    <NavbarWrap>
      {/* All area */}
      <AllBox
        id="All"
        color={color}
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
        color={color}
        onClick={(e) => {
          navigate("/" + JavaScript);
          onChangeColor(e);
        }}
      >
        Javascript
      </JavascriptBox>

      {/* Css area */}
      <CssBox
        id={Css}
        color={color}
        onClick={(e) => {
          navigate("/" + Css);
          onChangeColor(e);
        }}
      >
        Css
      </CssBox>

      {/* React area */}
      <ReactBox
        id={ReacT}
        color={color}
        onClick={(e) => {
          navigate("/" + ReacT);
          onChangeColor(e);
        }}
      >
        React
      </ReactBox>

      {/* Redux area */}
      <ReduxBox
        id={Redux}
        color={color}
        onClick={(e) => {
          navigate("/" + Redux);
          onChangeColor(e);
        }}
      >
        Redux
      </ReduxBox>
    </NavbarWrap>
  );
}

export default Navbar;
