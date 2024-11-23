import { ReactElement, useReducer } from "react";
import styled, { ThemeProvider } from "styled-components";
import { getTheme, Theme } from "./theme";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

// components
import Clouds from "./components/Clouds";
import Fireworks from "./components/Fireworks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Stars from "./components/Stars";

// hooks
import { useInterval } from "./useInterval";

// styled components
const Sky = styled.div`
  background: ${props =>
    `linear-gradient(${props.theme.sky[0]}, ${props.theme.sky[1]})`};
  @media screen and (max-width: 100rem) {
    overflow: hidden;
  }
`;
const StyledStars = styled(Stars)`
  opacity: ${props => (props.theme.hasStars ? 1 : 0)};
  z-index: 0;
`;
const ContentContainer = styled.div`
  color: ${props => props.theme.text};
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  padding: 0 2rem;
  position: relative;
  z-index: 5;

  @media screen and (min-width: 1200px) {
    align-items: center;
    justify-content: stretch;
    padding: 0;
  }
`;
const StyledMain = styled(Main)`
  height: 60vh;

  @media screen and (min-width: 1200px) {
    flex: 1;
    height: auto;
  }
`;
const TravelingStuff = styled(Footer)`
  bottom: 0;
  position: fixed;
  z-index: 2;
`;

// reducer
const initialTheme = getTheme(new Date());
function reducer(state: Theme, action: { type: string; date?: Date }) {
  switch (action.type) {
    case "update-theme":
      return getTheme(action.date ?? new Date());
    default:
      return state;
  }
}

const App = (): ReactElement => {
  const [theme, dispatch] = useReducer(reducer, initialTheme);

  useInterval(() => {
    dispatch({ type: "update-theme" });
  }, 60 * 60 * 1000);

  const chooseDate = (newDate: Date) =>
    dispatch({ type: "update-theme", date: newDate });

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <Sky>
          <ContentContainer>
            <Header />
            <StyledMain chooseDate={chooseDate} />
          </ContentContainer>
          {theme.hasFireworks ? <Fireworks /> : null}
          <TravelingStuff />
          <Clouds />
          <StyledStars />
        </Sky>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
