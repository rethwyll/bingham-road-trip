import { sample } from "lodash";
import { ReactElement } from "react";
import styled, { withTheme } from "styled-components";
import { Theme } from "../theme";

// styled components
const Container = styled.div`
  color: ${props => props.theme.colors.olive};
  display: block;
  filter: blur(0.5rem);
  line-height: 1;
  z-index: 1;

  & + & {
    margin-left: -0.3em;
  }
`;
const Cactus = styled.div`
  font-size: 1em;
  position: absolute;
  bottom: 0;
`;
const Bush = styled.div`
  font-size: 1em;
  position: absolute;
  bottom: -0.5em;
`;
const Rock = styled.div`
  font-size: 0.5em;
  position: absolute;
  bottom: -0.25em;
`;

// typescript props
type Props = {
  className?: string;
  theme: Theme;
  type?: string;
};

const FgTerrain = ({ className, theme }: Props): ReactElement => {
  const contentType = sample(theme.fgTerrain);
  let content;
  switch (contentType) {
    case "cactus":
      content = <Cactus>🌵</Cactus>;
      break;
    case "tree":
      content = "🌲";
      break;
    case "bush":
      content = <Bush>☁</Bush>;
      break;
    case "rock":
      content = <Rock>🪨</Rock>;
      break;
  }

  return <Container className={className}>{content}</Container>;
};

export default withTheme(FgTerrain);
