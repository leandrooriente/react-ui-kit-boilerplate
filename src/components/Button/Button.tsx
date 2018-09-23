import * as React from "react";
import StyledButton from "./styled";

export interface ButtonProps {
  /** Callback function to be called when user clicks on button */
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.SFC<ButtonProps> = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
