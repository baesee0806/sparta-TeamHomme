import styled from 'styled-components';

// Header styled component

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
  padding: 10px;
`;

export const HeaderHomme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  font-size: 2rem;
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    color: #da3237;
  }
  &:focus {
    color: #da3237;
  }
`;

export const HeaderNavigateBTN = styled.button`
  background: inherit;
  border: none;
  cursor: pointer;
  width: 100px;
  font-weight: bolder;
  font-size: 1rem;
  margin-right: 15px;
  color: ${(props) => props.color};
  &:hover {
    color: #da3237;
  }
`;

// Navbar styled component

export const NavbarWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
  padding: 10px;
  border-bottom: 2px solid black;
`;
export const AllBox = styled.div`
  margin: 0 20px;
  cursor: pointer;
  color: ${(props) => props.color};
  &:hover {
    color: #da3237;
  }
`;
export const JavascriptBox = styled.div`
  margin-right: 20px;
  cursor: pointer;
  color: ${(props) => props.color};
  &:hover {
    color: #da3237;
  }
`;
export const CssBox = styled.div`
  margin-right: 20px;
  cursor: pointer;
  color: ${(props) => props.color};
  &:hover {
    color: #da3237;
  }
`;
export const ReactBox = styled.div`
  margin-right: 20px;
  cursor: pointer;
  color: ${(props) => props.color};
  &:hover {
    color: #da3237;
  }
`;
export const ReduxBox = styled.div`
  margin-right: 20px;
  cursor: pointer;
  color: ${(props) => props.color};
  &:hover {
    color: #da3237;
  }
`;

export const StBtn = styled.button`
  cursor: pointer;
  font-size: 1rem;
  width: 5rem;
  height: 3rem;
  border: 2px solid ${({ borderColor }) => borderColor};
  border-radius: 0.5rem;
  background: ${(x) => x.background};
  color: ${(x) => x.color};

  &:hover::before {
    background-color: black;
    border-radius: 0.5rem;
  }
  &:hover {
    box-shadow: 0 0 30px 2px #da3237;
    border-radius: 0.5rem;
    border: none;
  }
`;
