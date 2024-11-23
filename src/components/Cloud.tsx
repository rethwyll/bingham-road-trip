import { ReactElement } from "react";
import styled, { css, keyframes } from "styled-components";
import { ceil } from "lodash";

// styled components
const cloudKeyframes = keyframes`
  from {
    left: 150%;
  }

  to {
    left: -25%;
  }
`;
const Container = styled.div<{
  top: number;
  speed: number;
  size: number;
  opacity: number;
}>`
  @media screen and (min-width: 1200px) {
    animation: ${props => {
      return css`
        ${cloudKeyframes} ${props.speed}s linear infinite
      `;
    }};
  }
  color: ${props => props.theme.cloud};
  display: block;
  filter: blur(0.3rem);
  font-size: ${props => `${props.size / 10}rem`};
  line-height: 1;
  opacity: ${props => ceil(props.opacity / 100)};
  position: absolute;
  text-shadow: 0 0 3rem
    ${props => `${props.theme.colors.black}${props.theme.opacities.p25}`};
  top: ${props => `${props.top / 10}rem`};
  z-index: 1;
`;

// typescript props
type Props = {
  className?: string;
  speed: number;
  top: number;
  size: number;
  opacity: number;
};

const Cloud = ({
  className,
  speed,
  top,
  size,
  opacity
}: Props): ReactElement => {
  return (
    <Container
      opacity={opacity}
      speed={speed}
      top={top}
      size={size}
      className={className}
    >
      ☁
    </Container>
  );
};

export default Cloud;
