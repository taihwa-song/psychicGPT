import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  styles: {
    global: () => ({
      head: {
        fontFamily: "cursive",
      },
      body: {
        fontFamily: "cursive",
        bg: "#FCF2E1",
        textColor: "white",
      },
    }),
  },
});

export default theme;
