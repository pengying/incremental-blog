import { styled } from "@mui/material/styles";

const h1 = styled("h1")(({ theme }) =>
  theme.unstable_sx({
    wordBreak: "keep-all",
    fontSize: {
      sm: 32,
      md: 38,
      lg: 52,
    },
    lineHeight: [null, null, 1.3, 1.2, 1.15],
    fontWeight: "bold",
    fontFamily: theme.fonts.merriweather,
    color: theme.palette.primary.light,
  })
);

const h2 = styled("h2")(({ theme }) =>
  theme.unstable_sx({
    wordBreak: "keep-all",
    fontSize: {
      sm: 24,
      md: 21,
      lg: 32,
    },
    lineHeight: [null, 1.45, 1.333],
    fontWeight: "bold",
    fontFamily: theme.fonts.merriweather,
    color: theme.palette.primary.light,
  })
);

const h3 = styled("h3")(({ theme }) =>
  theme.unstable_sx({
    wordBreak: "keep-all",
    fontSize: {
      sm: 20,
      md: 22,
      lg: 24,
    },
    lineHeight: 1.45,
    fontFamily: theme.fonts.merriweather,
    color: theme.palette.primary.light,
  })
);

const h4 = styled("h4")(({ theme }) =>
  theme.unstable_sx({
    wordBreak: "keep-all",
    fontSize: {
      sm: 15,
      md: 18,
    },
    lineHeight: 1.45,
    fontFamily: theme.fonts.merriweather,
    color: theme.palette.primary.light,
  })
);

const h5 = styled("h5")(({ theme }) =>
  theme.unstable_sx({
    wordBreak: "keep-all",
    fontSize: {
      md: 16,
      lg: 18,
    },
    lineHeight: 1.45,
    fontFamily: theme.fonts.merriweather,
    color: theme.palette.primary.light,
  })
);

const h6 = styled("h6")(({ theme }) =>
  theme.unstable_sx({
    wordBreak: "keep-all",
    fontSize: {
      md: 16,
      lg: 18,
    },
    lineHeight: 1.45,
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
