import { ReactElement } from "react";
import styled from "styled-components";
import { ceil } from "lodash";

// styled components
const Container = styled.div<{
  top: number;
  left: number;
  opacity: number;
}>`
  color: ${props => props.theme.colors.white};
  display: block;
  filter: blur(0.1rem);
  font-size: 0.5em;
  left: ${props => `${props.left}%`};
  opacity: ${props => ceil(props.opacity / 100)};
  position: absolute;
  top: ${props => `${props.top / 10}rem`};
  z-index: 0;
`;

// typescript props
type Props = {
  className?: string;
  top: number;
  left: number;
  opacity: number;
};

const Divider = ({ className, top, left, opacity }: Props): ReactElement => {
  return (
    <Container opacity={opacity} top={top} left={left} className={className}>
      ★
    </Container>
  );
};

export default Divider;
