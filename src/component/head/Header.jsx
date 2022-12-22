import {HeaderWrap,HeaderHomme,HeaderNavigateBTN} from '../../styledComponenet/styled'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <HeaderWrap>
        {/* Header area */}
            <HeaderHomme onClick={()=>{
                navigate("/")
            }}>Homme</HeaderHomme>
            <HeaderNavigateBTN onClick={()=>{
                navigate("/")
            }}>글쓰기</HeaderNavigateBTN>
        </HeaderWrap>
    )
}





export default Header;