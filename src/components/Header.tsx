import { ReactElement } from "react";
import styled from "styled-components";

// components
import Divider from "./Divider";

// styled components
const Container = styled.header`
  font-size: 2.4rem;
  margin: 3rem 0;
  position: relative;
  text-align: center;

  @media screen and (min-width: 1200px) {
    font-size: 7.5rem;
    width: 120rem;
  }
`;
const Title = styled.h1`
  color: ${props => props.theme.header};
  font-size: 2.4rem;
  margin: 0 0 1rem;

  & b {
    display: block;
  }

  @media screen and (min-width: 1200px) {
    & b {
      font-size: 7.5rem;
      line-height: 1.4;
    }
  }
`;

const Header = (): ReactElement => {
  return (
    <Container>
      <Title>
        The 2022 Bingham <b>Great American Road Trip</b>
      </Title>
      <Divider />
    </Container>
  );
};

export default Header;
