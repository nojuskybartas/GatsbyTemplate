export type Colors = keyof typeof colors;

const colors = {
  primary: "#7F9CBC",
  secondary: "#E6B8DC",
  accent: "#f75a39",
  neutral: "#FED5D9",
  white: "#ffffff",
  blue: "#e7fafe",
  green: "#129c4a",
  clear: "rgba(0,0,0,0)",
};

export const theme = {
  colors,
  fontFamily: { primary: "Red Hat Display" },
  fontSizes: {
    fs16: "1rem",
    fs32: "2rem",
    fs64: "4rem",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    lh: "1rem",
  },
  padding: {
    p1: "5rem",
  },
  breakpoints: ["24rem", "48rem", "80rem"] as unknown as Breakpoints,
  space: {
    auto: "auto",
    s0: "0",
    s4: "0.25rem",
    s6: "0.375rem",
    s8: "0.5rem",
    s10: "0.625rem",
    s12: "0.75rem",
    s16: "1rem",
    s32: "2rem",
    s48: "3rem",
  },
  radii: {
    br0: "0",
    br4: "0.25rem",
    br6: "0.375rem",
    br8: "0.5rem",
    br10: "0.625rem",
    br12: "0.75rem",
    br16: "1rem",
    br32: "2rem",
    br48: "3rem",
  },
  typography: {
    h1: {
      fontSize: "5rem",
      fontSizeMobile: "4rem",
      lineHeight: "6.5rem",
      lineHeightMobile: "5.25rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "4.5rem",
      fontSizeMobile: "3.5rem",
      lineHeight: "5.875rem",
      lineHeightMobile: "4.5625rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "3.5rem",
      fontSizeMobile: "2.5rem",
      lineHeight: "4.5625rem",
      lineHeightMobile: "3.25rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "3rem",
      fontSizeMobile: "2rem",
      lineHeight: "3.9375rem",
      lineHeightMobile: "2.625rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "2.5rem",
      fontSizeMobile: "1.625rem",
      lineHeight: "3.25rem",
      lineHeightMobile: "2.125rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "2rem",
      fontSizeMobile: "1.5rem",
      lineHeight: "2.625rem",
      lineHeightMobile: "2rem",
      fontWeight: 400,
    },
    body16: {
      fontSize: "1rem",
      fontSizeMobile: "1rem",
      lineHeight: "1.25rem",
      lineHeightMobile: "1rem",
      fontWeight: 400,
    },
    body22: {
      fontSize: "1.375rem",
      fontSizeMobile: "1.25rem",
      lineHeight: "1.25rem",
      lineHeightMobile: "1rem",
      fontWeight: 400,
    },
  },
  zIndex: {
    base: 0,
    upperElement: 1,
    modal: 10,
    loader: 11,
  },
} as const;

export type Theme = typeof theme;

const Breakpoints = theme.breakpoints as any;
Breakpoints.lmobile = Breakpoints[0];
Breakpoints.ltablet = Breakpoints[1];
Breakpoints.desktop = Breakpoints[2];

type Breakpoints<T = string> = {
  _: T;
  lmobile: T;
  ltablet: T;
  desktop: T;
};
