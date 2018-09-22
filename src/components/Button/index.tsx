import * as React from 'react';

export interface ButtonProps {
  /** Callback function to be called when user clicks on button */
  onClick: () => void;
}

class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Test
      </button>
    );
  }
}

export default Button;
