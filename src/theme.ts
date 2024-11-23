import { BaseTheme } from "styled-components";
import { DateTime } from "luxon";

// colors
const black = "#000000";
const blue = "#85e0ff";
const brown = "#9a6324";
const cream = "#fff9d6";
const darkblue = "#011728";
const darkbrown = "#5b2d00";
const green = "#59981a";
const grey = "#555555";
const indigo = "#033d63";
const lightblue = "#c2f0ff";
const lime = "#81b622";
const olive = "#3d550c";
const orange = "#ff661f";
const purple = "#420039";
const yellow = "#ecf87f";
const white = "#ffffff";

// and extend them!
declare module "styled-components" {
  export interface BaseTheme {
    colors: {
      [key: string]: string;
    };
    opacities: {
      [key: string]: string;
    };
  }
}

export interface Theme extends BaseTheme, TimeTheme, DateTheme {
  hasFireworks: boolean;
}
export interface TimeTheme {
  cloud: string;
  divider: string;
  hasStars: boolean;
  header: string;
  text: string;
  sky: Array<string>;
}

export interface DateTheme {
  ground: string;
  terrain: string | null;
  landmark: string | null;
  fgTerrain: Array<string>;
  date: string;
}

// base theme
export const baseTheme: BaseTheme = {
  colors: {
    black,
    blue,
    brown,
    cream,
    darkblue,
    darkbrown,
    green,
    grey,
    indigo,
    lime,
    olive,
    orange,
    purple,
    yellow,
    white
  },
  opacities: {
    p0: "00",
    p10: "1a",
    p25: "40",
    p50: "7f",
    p75: "bf",
    p100: "ff"
  }
};

export const earlysunrise: TimeTheme = {
  cloud: cream,
  divider: darkbrown,
  hasStars: false,
  header: olive,
  text: darkbrown,
  sky: [orange, yellow]
};

export const sunrise: TimeTheme = {
  cloud: cream,
  divider: darkbrown,
  hasStars: false,
  header: olive,
  text: darkbrown,
  sky: [blue, yellow]
};

export const day: TimeTheme = {
  cloud: white,
  divider: darkbrown,
  hasStars: false,
  header: olive,
  text: darkbrown,
  sky: [blue, lightblue]
};

export const sunset: TimeTheme = {
  cloud: cream,
  divider: darkbrown,
  hasStars: false,
  header: olive,
  text: darkbrown,
  sky: [blue, yellow]
};

export const latesunset: TimeTheme = {
  cloud: cream,
  divider: darkbrown,
  hasStars: false,
  header: olive,
  text: darkbrown,
  sky: [orange, yellow]
};

export const bluehour: TimeTheme = {
  cloud: orange,
  divider: purple,
  hasStars: true,
  header: white,
  text: white,
  sky: [purple, orange]
};

export const night: TimeTheme = {
  cloud: indigo,
  divider: blue,
  hasStars: true,
  header: blue,
  text: white,
  sky: [darkblue, indigo]
};

export const dateThemes: Array<DateTheme> = [
  {
    ground: lime,
    terrain: "hills",
    landmark: null,
    fgTerrain: ["tree", "rock", "bush"],
    date: "2022-06-27"
  },
  {
    ground: lime,
    terrain: "hills",
    landmark: "sf",
    fgTerrain: ["tree", "rock", "bush"],
    date: "2022-06-28"
  },
  {
    ground: lime,
    terrain: "hills",
    landmark: "sf",
    fgTerrain: ["tree", "rock", "bush"],
    date: "2022-06-29"
  },
  {
    ground: lime,
    terrain: "hills",
    landmark: null,
    fgTerrain: ["tree", "rock", "bush"],
    date: "2022-06-30"
  },
  {
    ground: orange,
    terrain: "desert",
    landmark: "lasvegas",
    fgTerrain: ["cactus", "rock"],
    date: "2022-07-01"
  },
  {
    ground: orange,
    terrain: "desert",
    landmark: "lasvegas",
    fgTerrain: ["cactus", "rock"],
    date: "2022-07-02"
  },
  {
    ground: orange,
    terrain: "desert",
    landmark: null,
    fgTerrain: ["cactus", "rock"],
    date: "2022-07-03"
  },
  {
    ground: orange,
    // TODO: fireworks
    terrain: "desert",
    landmark: null,
    fgTerrain: ["cactus", "rock"],
    date: "2022-07-04"
  },
  {
    ground: orange,
    terrain: "desert",
    landmark: null,
    fgTerrain: ["cactus", "rock"],
    date: "2022-07-05"
  },
  {
    ground: orange,
    terrain: "desert",
    landmark: null,
    fgTerrain: ["cactus", "rock"],
    date: "2022-07-06"
  },
  {
    ground: orange,
    terrain: "hotairballoon",
    landmark: null,
    fgTerrain: ["cactus", "rock"],
    date: "2022-07-07"
  },
  {
    ground: green,
    terrain: "mountains",
    landmark: null,
    fgTerrain: ["tree", "rock", "bush"],
    date: "2022-07-08"
  },
  {
    ground: lime,
    terrain: "farm",
    landmark: null,
    fgTerrain: ["bush"],
    date: "2022-07-09"
  },
  {
    ground: olive,
    terrain: null,
    landmark: "stlouis",
    fgTerrain: ["bush"],
    date: "2022-07-10"
  },
  {
    ground: olive,
    terrain: null,
    landmark: "stlouis",
    fgTerrain: ["bush"],
    date: "2022-07-11"
  },
  {
    ground: green,
    terrain: "hills",
    landmark: null,
    fgTerrain: ["bush", "rock"],
    date: "2022-07-12"
  },
  {
    ground: green,
    terrain: "hills",
    landmark: null,
    fgTerrain: ["bush", "rock"],
    date: "2022-07-13"
  },
  {
    ground: green,
    terrain: "hills",
    landmark: null,
    fgTerrain: ["bush", "rock"],
    date: "2022-07-14"
  },
  {
    ground: green,
    terrain: null,
    landmark: "dc",
    fgTerrain: ["bush"],
    date: "2022-07-15"
  },
  {
    ground: green,
    terrain: null,
    landmark: "dc",
    fgTerrain: ["bush"],
    date: "2022-07-16"
  },
  {
    ground: green,
    terrain: "hills",
    landmark: null,
    fgTerrain: ["bush"],
    date: "2022-07-17"
  },
  {
    ground: green,
    terrain: null,
    landmark: "nyc",
    fgTerrain: ["bush"],
    date: "2022-07-18"
  },
  {
    ground: green,
    terrain: null,
    landmark: "nyc",
    fgTerrain: ["bush"],
    date: "2022-07-19"
  },
  {
    ground: green,
    terrain: "hills",
    landmark: null,
    fgTerrain: ["bush", "tree", "rock"],
    date: "2022-07-20"
  },
  {
    ground: green,
    terrain: "hills",
    landmark: null,
    fgTerrain: ["bush", "tree", "rock"],
    date: "2022-07-21"
  },
  {
    ground: green,
    terrain: "hills",
    landmark: null,
    fgTerrain: ["bush", "tree", "rock"],
    date: "2022-07-22"
  },
  {
    ground: green,
    terrain: "hills",
    landmark: null,
    fgTerrain: ["bush", "tree", "rock"],
    date: "2022-07-23"
  },
  {
    ground: green,
    terrain: "hills",
    landmark: null,
    fgTerrain: ["bush", "rock"],
    date: "2022-07-24"
  },
  {
    ground: green,
    terrain: "hills",
    landmark: null,
    fgTerrain: ["bush", "rock"],
    date: "2022-07-25"
  },
  {
    ground: lime,
    terrain: "farm",
    landmark: null,
    fgTerrain: ["bush"],
    date: "2022-07-26"
  },
  {
    ground: green,
    terrain: "cedarpoint",
    landmark: null,
    fgTerrain: ["bush"],
    date: "2022-07-27"
  },
  {
    ground: lime,
    terrain: "farm",
    landmark: null,
    fgTerrain: ["bush"],
    date: "2022-07-28"
  },
  {
    ground: lime,
    terrain: "farm",
    landmark: null,
    fgTerrain: ["bush"],
    date: "2022-07-29"
  },
  {
    ground: green,
    // TODO: MACKINAC BRIDGE
    terrain: null,
    landmark: null,
    fgTerrain: ["bush", "tree", "rock"],
    date: "2022-07-30"
  },
  {
    ground: green,
    terrain: null,
    landmark: null,
    fgTerrain: ["bush", "tree", "rock"],
    date: "2022-07-31"
  },
  {
    ground: green,
    terrain: "hills",
    landmark: null,
    fgTerrain: ["bush", "tree", "rock"],
    date: "2022-08-01"
  },
  {
    ground: lime,
    terrain: "farm",
    landmark: null,
    fgTerrain: ["bush"],
    date: "2022-08-02"
  },
  {
    ground: green,
    terrain: "hills",
    landmark: null,
    fgTerrain: ["bush"],
    date: "2022-08-03"
  },
  {
    ground: lime,
    terrain: "farm",
    landmark: null,
    fgTerrain: ["bush"],
    date: "2022-08-04"
  },
  {
    ground: lime,
    terrain: "farm",
    landmark: null,
    fgTerrain: ["bush"],
    date: "2022-08-05"
  },
  {
    ground: lime,
    terrain: "farm",
    landmark: null,
    fgTerrain: ["bush"],
    date: "2022-08-06"
  },
  {
    ground: olive,
    terrain: "mountains",
    landmark: null,
    fgTerrain: ["bush", "tree", "rock"],
    date: "2022-08-07"
  },
  {
    ground: olive,
    terrain: "mountains",
    landmark: null,
    fgTerrain: ["bush", "tree", "rock"],
    date: "2022-08-08"
  },
  {
    ground: olive,
    terrain: "mountains",
    landmark: null,
    fgTerrain: ["bush", "tree", "rock"],
    date: "2022-08-09"
  },
  {
    ground: olive,
    terrain: "mountains",
    landmark: null,
    fgTerrain: ["bush", "tree", "rock"],
    date: "2022-08-10"
  }
];

// utils
export const getTheme = (time: Date): Theme => {
  const localeTime = DateTime.fromJSDate(time);
  const hour = localeTime.hour;
  const date = localeTime.toISODate();

  let timeTheme;
  if (hour > 21) {
    timeTheme = night;
  } else if (hour > 20) {
    timeTheme = bluehour;
  } else if (hour > 19) {
    timeTheme = latesunset;
  } else if (hour > 17) {
    timeTheme = sunset;
  } else if (hour < 5) {
    timeTheme = bluehour;
  } else if (hour < 6) {
    timeTheme = earlysunrise;
  } else if (hour < 7) {
    timeTheme = sunrise;
  } else {
    timeTheme = day;
  }

  const dateTheme = dateThemes.find(d => d.date === date) || {
    ground: lime,
    terrain: "hills",
    landmark: "seattle",
    fgTerrain: ["tree", "bush", "rock"],
    date: "2022-05-28"
  };
  return {
    ...baseTheme,
    ...timeTheme,
    ...dateTheme,
    hasFireworks: date === "2022-07-04" && hour > 21
  };
};
