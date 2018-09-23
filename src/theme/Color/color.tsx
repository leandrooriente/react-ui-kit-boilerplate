import * as React from "react";
import styled from "../../utils/styled-components";

export interface ColorProps {
  color: string;
  name: string;
}

const ColorBox = styled<{ color: string }, "div">("div")`
  width: 200px;
  height: 200px;
  background: ${({ color }) => color};
`;

const ColorName = styled<{}, "div">("div")`
  background: #FFF;
  height: 50px;
  color: #999;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #EEE;
  border-top: 0;
`;

const Wrapper = styled<{}, "div">("div")`
  margin: 15px;
  display: inline-block;
  width: 200px;
  height: 250px;
  background: #FFF;
`;

const Color: React.SFC<ColorProps> = ({
  color,
  name,
}) => (
  <Wrapper>
    <ColorBox color={color} />
    <ColorName>
      {name}
    </ColorName>
  </Wrapper>
);

export default Color;
