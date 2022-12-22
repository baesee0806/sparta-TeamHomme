import {NavbarWrap,AllBox,JavascriptBox,CssBox,ReactBox,ReduxBox} from '../../styledComponenet/styled'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    return(
        <NavbarWrap>
            {/* All area */}
        <AllBox onClick={()=>{
            navigate("/AllPage")
        }}>All</AllBox>

            {/* Javascript area */}
        <JavascriptBox onClick={()=>{
            navigate("/JavascriptPage")
        }}>Javascript</JavascriptBox>

            {/* Css area */}
        <CssBox onClick={()=>{
            navigate("/CssPage")
        }}>Css</CssBox>

            {/* React area */}
        <ReactBox onClick={()=>{
            navigate("/ReactPage")
        }}>React</ReactBox>

            {/* Redux area */}
        <ReduxBox onClick={()=>{
            navigate("/ReduxPage")
        }}>Redux</ReduxBox>
        </NavbarWrap>
    );
};

export default Navbar;