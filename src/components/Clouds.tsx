import { ReactElement, useMemo } from "react";
import { times, random } from "lodash";

// components
import Cloud from "./Cloud";

// typescript props
type Props = {
  className?: string;
};

const Clouds = ({ className }: Props): ReactElement => {
  const clouds = useMemo(
    () =>
      times(random(5, 12), index => (
        <Cloud
          size={random(50, 300)}
          top={random(500)}
          speed={random(20, 120)}
          key={`cloud-${index}`}
          opacity={random(5, 100)}
        />
      )),
    []
  );

  return <>{clouds}</>;
};

export default Clouds;
