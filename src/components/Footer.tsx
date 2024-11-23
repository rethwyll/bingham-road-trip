import { ReactElement } from "react";
import styled, { css, keyframes } from "styled-components";
import { random, times } from "lodash";

// components
import FgTerrain from "./FgTerrain";
import Car from "./Car";

// images
import cedarpoint from "../assets/cedarpoint.svg";
import dc from "../assets/dc.svg";
import desert from "../assets/desert.svg";
import farm from "../assets/farm.svg";
import hotairballoon from "../assets/hotairballoon.svg";
import hills from "../assets/hills.svg";
import lasvegas from "../assets/lasvegas.svg";
import mountains from "../assets/mountains.svg";
import nyc from "../assets/nyc.svg";
import seattle from "../assets/seattle.svg";
import sf from "../assets/sf.svg";
import stlouis from "../assets/stlouis.svg";
import transparent from "../assets/transparent.gif";

const imageMap: { [key: string]: string } = {
  cedarpoint,
  dc,
  desert,
  farm,
  hotairballoon,
  hills,
  lasvegas,
  mountains,
  nyc,
  seattle,
  sf,
  stlouis
};

// styled components
const scroll = keyframes`
  from {
    background-position: 100vw;
  }

  to {
    background-position: -2225px;
  }
`;
const terrainScroll = keyframes`
  from {
    left: 100vw;
  }

  to {
    left: -2225px;
  }
`;
const Container = styled.footer`
  @media screen and (min-width: 1200px) {
    ${props => {
      if (props.theme.date !== "2022-05-28") {
        return css`
          animation: ${scroll} 30s linear infinite;
        `;
      }
    }};
  }
  background-repeat: repeat-x, no-repeat, no-repeat;
  background-image: linear-gradient(
      transparent,
      transparent 42rem,
      ${props => props.theme.colors.grey} 42rem,
      ${props => props.theme.colors.grey} 43rem,
      ${props => props.theme.ground} 43rem
    ),
    ${props => `url(${imageMap[props.theme.landmark] || transparent})`},
    ${props => `url(${imageMap[props.theme.terrain]})`};
  background-size: cover, cover, cover;
  display: flex;
  height: 44.5rem;
  justify-content: center;
  padding-bottom: 5rem;
  width: 100vw;
`;
const FgTerrainWrapper = styled.div`
  align-items: baseline;
  bottom: -0.1em;
  display: flex;
  font-size: 20rem;
  opacity: 0;
  position: absolute;
  z-index: 3;

  @media screen and (min-width: 1200px) {
    ${props => {
      if (props.theme.date !== "2022-05-28") {
        return css`
          animation: ${terrainScroll} 10s linear infinite;
          opacity: 1;
        `;
      }
    }};
  }
`;
const Kia = styled(Car)`
  bottom: 2rem;
  /* transform: scaleX(-1); */
`;

// typescript props
type Props = {
  className?: string;
};

const Footer = ({ className }: Props): ReactElement => (
  <Container className={className}>
    <Kia />
    <FgTerrainWrapper>
      {times(random(0, 4), index => (
        <FgTerrain key={`fg-terrain-1-${index}`} />
      ))}
      {times(random(0, 2), index => (
        <FgTerrain key={`fg-terrain-2-${index}`} />
      ))}
    </FgTerrainWrapper>
  </Container>
);

export default Footer;
