import { ReactElement, useState } from "react";
import styled from "styled-components";
import { random } from "lodash";
import { useInterval } from "../useInterval";

// styled components
const Container = styled.div<{
  location: number;
  size: number;
  burstColor: number;
}>`
  align-items: center;
  border-color: ${props => `hsl(${props.burstColor}, 100%, 50%)`};
  border-radius: 50% 50%;
  border-style: dotted;
  border-width: 3px;
  display: ${props => (props.theme.hasFireworks ? "flex" : "none")};
  height: ${props => `${props.size}px`};
  justify-content: center;
  left: ${props => `${props.location}vw`};
  position: absolute;
  top: 0;
  transform-origin: center;
  width: ${props => `${props.size}px`};

  @keyframes burst {
    from {
      opacity: 0;
      transform: scale(0.1);
    }
    50% {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: scale(1);
    }
  }
  animation: burst 2s linear infinite;
`;
const Ring = styled.div`
  align-items: center;
  border-color: inherit;
  border-radius: 50% 50%;
  border-style: dotted;
  border-width: 3px;
  display: flex;
  height: 30%;
  justify-content: center;
  width: 30%;

  &::before {
    border-color: inherit;
    border-radius: 50% 50%;
    border-style: dotted;
    border-width: 3px;
    content: "";
    height: 50%;
    width: 50%;
  }
`;

// typescript props
type Props = {
  className?: string;
};

const Fireworks = ({ className }: Props): ReactElement => {
  const [size, setSize] = useState(random(200, 1000));
  const [location, setLocation] = useState(random(100));
  const [color, setColor] = useState(random(360));
  useInterval(() => {
    setSize(random(200, 1000));
    setLocation(random(100));
    setColor(random(360));
  }, 2000);

  return (
    <Container
      size={size}
      location={location}
      burstColor={color}
      className={className}
    >
      <Ring />
    </Container>
  );
};

export default Fireworks;
