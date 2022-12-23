import styled from "styled-components";

export const StBtn = styled.button`
  cursor: pointer;
  font-size: 1rem;
  width: 5rem;
  height: 3.5rem;
  border: 2px solid ${({ borderColor }) => borderColor};
  border-radius: 1rem;
  background: ${(x) => x.background};
  color: ${(x) => x.color};
`;
