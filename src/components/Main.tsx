import { ReactElement } from "react";
import styled from "styled-components";
import { hexToRGB } from "../utils/color";
import { DateTimePicker } from "@mui/x-date-pickers";
import { DateTime } from "luxon";
import { isNull } from "lodash";
import InstagramFeed from "./InstagramFeed";

// styled components
const Container = styled.main`
  background: ${props => hexToRGB(props.theme.sky[0], 0.5)};
  display: flex;
  flex-flow: column nowrap;
  font-size: 2rem;
  overflow: auto;

  @media screen and (min-width: 1200px) {
    background: none;
    flex-flow: row nowrap;
    max-height: 60vh;
    overflow-y: scroll;
    padding-bottom: 10rem;
    width: 120rem;
  }
`;
const Content = styled.div`
  order: 1;
  padding: 0;

  @media screen and (min-width: 1200px) {
    flex: 1;
    order: 2;
    margin-left: 3rem;
    padding: 0;
  }
`;
const ContentWrapper = styled.div`
  padding: 1rem;

  & p {
    margin: 0 0 1rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 0;
  }
`;
const FeedColumn = styled.div`
  flex: 2;
  order: 2;

  @media screen and (min-width: 1200px) {
    order: 1;
    overflow: auto;
  }
`;
const Header = styled.h2`
  margin: 0 0 1rem 1rem;

  @media screen and (min-width: 1200px) {
    margin: 0;
  }
`;

// typescript props
type Props = {
  className?: string;
  chooseDate: (newDate: Date) => void;
};

const Main = ({ chooseDate, className }: Props): ReactElement => (
  <Container className={className}>
    <FeedColumn>
      <Header>The Hotness from Instagram</Header>
      <InstagramFeed />
    </FeedColumn>
    <Content>
      <ContentWrapper>
        <p>
          Join us on our epic road trip as we explore the United States!
          We&rsquo;re looking forward to seeing lots of our country&rsquo;s
          highways and byways as we make our way from Pacific to Atlantic and
          back.
        </p>
        <p className="signature">The Binghams</p>
      </ContentWrapper>
      <Header>Choose a date!</Header>
      <p>
        Choose a date and time to see what this site looked like while we were
        on our trip!
      </p>
      <DateTimePicker
        defaultValue={DateTime.fromISO("2022-06-27T08:00")}
        onChange={updated => {
          if (!isNull(updated)) {
            chooseDate(updated.toJSDate());
          }
        }}
        label="Basic date time picker"
      />
    </Content>
  </Container>
);

export default Main;
