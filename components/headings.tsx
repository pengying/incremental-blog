import { styled } from "@mui/material/styles";

const h1 = styled("h1")(({ theme }) =>
  theme.unstable_sx({
    wordBreak: "keep-all",
    fontSize: {
      xs: 34,
      sm: 36,
      md: 42,
      lg: 52,
    },
    lineHeight: {
      xs: 1.18,
      sm: 1.2,
      md: 1.18,
      lg: 1.15,
    },
    fontWeight: "bold",
    fontFamily: theme.fonts.merriweather,
    color: theme.palette.primary.light,
  })
);

const h2 = styled("h2")(({ theme }) =>
  theme.unstable_sx({
    wordBreak: "keep-all",
    fontSize: {
      xs: 28,
      sm: 28,
      md: 30,
      lg: 34,
    },
    lineHeight: 1.25,
    fontWeight: "bold",
    fontFamily: theme.fonts.merriweather,
    color: theme.palette.primary.light,
  })
);

const h3 = styled("h3")(({ theme }) =>
  theme.unstable_sx({
    wordBreak: "keep-all",
    fontSize: {
      xs: 22,
      sm: 22,
      md: 24,
      lg: 26,
    },
    lineHeight: 1.32,
    fontWeight: 700,
    fontFamily: theme.fonts.merriweather,
    color: theme.palette.primary.light,
  })
);

const h4 = styled("h4")(({ theme }) =>
  theme.unstable_sx({
    wordBreak: "keep-all",
    fontSize: {
      xs: 20,
      sm: 20,
      md: 21,
      lg: 22,
    },
    lineHeight: 1.35,
    fontWeight: 700,
    fontFamily: theme.fonts.merriweather,
    color: theme.palette.primary.light,
  })
);

const h5 = styled("h5")(({ theme }) =>
  theme.unstable_sx({
    wordBreak: "keep-all",
    fontSize: {
      xs: 19,
      sm: 19,
      md: 20,
      lg: 21,
    },
    lineHeight: 1.35,
    fontWeight: 700,
    fontFamily: theme.fonts.merriweather,
    color: theme.palette.primary.light,
  })
);

const h6 = styled("h6")(({ theme }) =>
  theme.unstable_sx({
    wordBreak: "keep-all",
    fontSize: {
      xs: 19,
      sm: 19,
      md: 20,
      lg: 21,
    },
    lineHeight: 1.35,
    fontWeight: 700,
    fontFamily: theme.fonts.merriweather,
    color: theme.palette.primary.light,
  })
);
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
};
