import * as React from "react";
import StyledButton from "./styled";
export interface ButtonProps {
  /** Callback function to be called when user clicks on button */
  onClick: () => void;
  children: React.ReactNode;
}

class Button extends React.Component<ButtonProps> {
  public render() {
    return (
      <StyledButton onClick={this.props.onClick}>
        {this.props.children}
      </StyledButton>
    );
  }
}

export default Button;
