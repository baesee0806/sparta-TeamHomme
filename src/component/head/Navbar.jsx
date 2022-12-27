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
  // const [color, setColor] = useState("red");
  // const Box = ["All", JavaScript, Css, ReacT, Redux];
  // const onChangeColor = (e) => {
  //   Box.filter((item) =>
  //     item === e.target.id && color === "red"
  //       ? setColor("red")
  //       : setColor("black")
  //   );
  //   console.log(e.target);
  // };

  return (
    <NavbarWrap>
      {/* All area */}
      <AllBox
        onClick={() => {
          navigate(`/${All}`);
        }}
      >
        All
      </AllBox>

      {/* Javascript area */}
      <JavascriptBox
        onClick={() => {
          navigate("/" + JavaScript);
        }}
      >
        Javascript
      </JavascriptBox>

      {/* Css area */}
      <CssBox
        onClick={() => {
          navigate("/" + Css);
        }}
      >
        Css
      </CssBox>

      {/* React area */}
      <ReactBox
        onClick={() => {
          navigate("/" + ReacT);
        }}
      >
        React
      </ReactBox>

      {/* Redux area */}
      <ReduxBox
        onClick={() => {
          navigate("/" + Redux);
        }}
      >
        Redux
      </ReduxBox>
    </NavbarWrap>
  );
}

export default Navbar;
