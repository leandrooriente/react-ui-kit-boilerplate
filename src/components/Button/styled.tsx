import styled from "../../utils/styled-components";

const StyledButton = styled<{}, "button">("button")`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: ${({ theme }) => theme.colors.primaryColor};
  border: 2px solid ${({ theme }) => theme.colors.primaryColor};
`;

export default StyledButton;
