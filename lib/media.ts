import { css } from "@emotion/css";

import theme from "../styles/theme/theme";

const toEm = (size: number) => size / 16 + "em";

/**
 * All breakpoints can be found inside of theme.breakpoints.
 * Each is turned in to a min + 1 and max-width version.
 *
 * There are also break points to cover coarse and fine pointer devices
 *
 * @example
 *
 *    ${mediaqueries.phone` width: 100px; `};
 *    ${mediaqueries.tablet_up` width: 200px; `};
 */
// TODO(peng): fix the types here

const mediaqueries = theme.breakpoints.reduce(
  (acc: any, [label, size]: any, i: number) => ({
    ...acc,
    // max-width media query e.g. mediaqueries.desktop
    [label]: (...args: any) => css`
      @media (max-width: ${toEm(size)}) {
        ${css(...args)};
      }
    `,
    // min-width media query e.g. mediaqueries.desktop_up
    // This is the breakpoint prior's size +1
    [`${label}_up`]: (...args: any) => css`
      @media (min-width: ${toEm(theme.breakpoints[i - 1][1] + 1)}) {
        ${css(...args)};
      }
    `,
  }),
  {},
);

export const media = mediaqueries;

export default mediaqueries;
