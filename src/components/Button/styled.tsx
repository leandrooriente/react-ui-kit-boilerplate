import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: ${({ theme }) => theme.primaryColor};
  border: 2px solid ${({ theme }) => theme.primaryColor};
`;

export default StyledButton;
