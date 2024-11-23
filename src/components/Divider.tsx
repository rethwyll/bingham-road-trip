import { ReactElement } from "react";
import styled from "styled-components";

// styled components
const Container = styled.div`
  align-items: center;
  display: flex;
`;
const Icon = styled.span`
  padding: 0 2rem;
`;
const Rule = styled.hr`
  border: 0;
  border-top: 0.1rem dashed ${props => props.theme.divider};
  height: 0;
  width: 100%;
`;

// typescript props
type Props = {
  className?: string;
};

const Divider = ({ className }: Props): ReactElement => {
  return (
    <Container className={className}>
      <Rule />
      <Icon>🗺</Icon>
      <Rule />
    </Container>
  );
};

export default Divider;
