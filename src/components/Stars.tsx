import { ReactElement, useMemo } from "react";
import { times, random } from "lodash";

// components
import Star from "./Star";

// typescript props
type Props = {
  className?: string;
};

const Stars = ({ className }: Props): ReactElement => {
  const stars = useMemo(
    () =>
      times(random(20, 200), index => (
        <Star
          top={random(500)}
          left={random(100)}
          key={`star-${index}`}
          opacity={random(5, 100)}
        />
      )),
    []
  );

  return <div className={className}>{stars}</div>;
};

export default Stars;
