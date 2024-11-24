import { ReactElement } from "react";
import styled from "styled-components";
import urls from "../data/insta-urls.json";
import { ErrorBoundary } from "react-error-boundary";
import { InstagramEmbed } from "react-social-media-embed";

// styled components
const Container = styled.div``;

const InstagramFeed = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<Container>Something went wrong.</Container>}>
      <div>
        {urls.map(u => (
          <InstagramEmbed key={u} url={u} captioned />
        ))}
      </div>
    </ErrorBoundary>
  );
};

export default InstagramFeed;
