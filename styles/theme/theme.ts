import merge from 'lodash.merge';
import type { Theme } from 'theme-ui';

import prism from './prism';

export const breakpoints = [
  ['phone_small', 320],
  ['phone', 376],
  ['phablet', 540],
  ['tablet', 735],
  ['desktop', 1070],
  ['desktop_medium', 1280],
  ['desktop_large', 1440],
];

const fonts = {
  serif: "'Merriweather', Georgia, Serif",
  sansSerif:
    "'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif",
  monospace: `"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
};

const tags = {
  pre: {
    variant: `prism`,
    fontFamily: `"Operator Mono", monospace`,
    tabSize: 4,
    hyphens: `none`,
    color: `white`,
    bg: `prism.background`,
    overflow: `auto`,
    borderRadius: 10,
    p: 3,
  },
  code: {
    fontFamily: `"Operator Mono", monospace`,
    fontSize: `inherit`,
  },
  inlineCode: {
    borderRadius: `0.3em`,
    color: `secondary`,
    bg: `rgba(233, 218, 172, 0.3)`,
    paddingTop: `0.15em`,
    paddingBottom: `0.05em`,
    paddingX: `0.2em`,
  },
};

const colors = {
  prism,

  primary: "#000",
  secondary: "#73737D",
  grey: "#73737D",
  background: "#fafafa",
  accent: "#6166DC",
  hover: "rgba(0, 0, 0, 0.07)",
  gradient: "linear-gradient(180deg, rgba(217, 219, 224, 0) 0%, #D9DBE0 100%)",
  articleText: "#08080B",
  track: "rgba(8, 8, 11, 0.3)",
  progress: "#000",
  card: "#fff",
  error: "#EE565B",
  success: "#46B17B",
  errorBackground: "rgba(238, 86, 91, 0.1)",
  horizontalRule: "rgba(8, 8, 11, 0.15)",
  inputBackground: "rgba(0, 0, 0, 0.05)",
  modes: {
    dark: {
      grey: "#73737D",
      primary: "#fff",
      secondary: "#fff",
      accent: "#E9DAAC",
      background: "#111216",
      hover: "rgba(255, 255, 255, 0.07)",
      gradient:
        "linear-gradient(180deg, #111216 0%, rgba(66, 81, 98, 0.36) 100%)",
      articleText: "#fff",
      track: "rgba(255, 255, 255, 0.3)",
      progress: "#fff",
      card: "#1D2128",
      error: "#EE565B",
      success: "#46B17B",
      errorBackground: "rgba(238, 86, 91, 0.1)",
      horizontalRule: "rgba(255, 255, 255, 0.15)",
      inputBackground: "rgba(255, 255, 255, 0.07)",
    },
  },
};

const theme: Theme = merge({
  initialColorMode: 'light',
  useCustomProperties: true,
  colors,
  fonts,
  breakpoints,
  tags,
});

export default theme;
