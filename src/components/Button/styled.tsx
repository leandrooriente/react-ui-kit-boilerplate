import styled from "../../utils/styled-components";

const StyledButton = styled<{ disabled: boolean }, "button">("button")`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: ${({ disabled, theme }) => disabled ?
    theme.colors.disabledColor :
    theme.colors.primaryColor
  };
  border: 2px solid ${({ disabled, theme }) => disabled ?
    theme.colors.disabledColor :
    theme.colors.primaryColor
  };
`;

export default StyledButton;
