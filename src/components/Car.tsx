import { ReactElement } from "react";
import styled, { css, keyframes } from "styled-components";
import car from "../assets/car.svg";
import wheel from "../assets/wheel.svg";

// styled components
const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
const puttputt = keyframes`
  from {
    margin-bottom: 0;
  }

  to {
    margin-bottom: .2rem;
  }
`;
const Container = styled.div`
  @media screen and (min-width: 1200px) {
    ${props => {
      if (props.theme.date !== "2022-05-28") {
        return css`
          animation: ${puttputt} 0.25s linear infinite alternate;
        `;
      }
    }};
  }
  height: 4.2rem;
  position: absolute;
`;
const Wheel = styled.img`
  @media screen and (min-width: 1200px) {
    ${props => {
      if (props.theme.date !== "2022-05-28") {
        return css`
          animation: ${spin} 1s linear infinite;
        `;
      }
    }};
  }
`;
const BackWheel = styled(Wheel)`
  position: absolute;
  bottom: 0;
  left: 0.85rem;
`;
const FrontWheel = styled(Wheel)`
  position: absolute;
  bottom: 0;
  right: 0.85rem;
`;

// typescript props
type Props = {
  className?: string;
};

const Car = ({ className }: Props): ReactElement => {
  return (
    <Container className={className}>
      <img src={car} alt="car" width="100" />
      <BackWheel src={wheel} alt="front wheel" width="20" />
      <FrontWheel src={wheel} alt="back wheel" width="20" />
    </Container>
  );
};

export default Car;
