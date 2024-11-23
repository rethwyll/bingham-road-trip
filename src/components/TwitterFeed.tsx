import { ReactElement } from "react";
import styled from "styled-components";
import { TwitterTimelineEmbed } from "react-twitter-embed";

// styled components
const Container = styled.div``;
const Header = styled.h2`
  color: ${props => props.theme.header};
  font-size: 2em;
`;

const TwitterFeed = (): ReactElement => {
  return (
    <Container>
      <Header>Twitter</Header>
      {/* <TwitterTimelineEmbed
        noBorders={true}
        noHeader={true}
        noFooter={true}
        sourceType="profile"
        screenName="bingham_family"
        options={{ height: 400 }}
      /> */}
    </Container>
  );
};

export default TwitterFeed;
