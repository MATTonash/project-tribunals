import { extendTheme } from "@chakra-ui/react";
import Input from "./components/Input";
import Button from "./components/Button";

const theme = extendTheme({
  breakpoints: {
    "3xl": "114em",
    "4xl": "160em",
  },
  colors: {
    salmon: {
      900: "#FF8267",
      800: "#FF8D74",
      700: "#FF9882",
      600: "#FFA38F",
      500: "#FFAE9C",
      400: "#FFB9A9",
      300: "#FFC4B7",
      200: "#FFCFC4",
      100: "#FFDAD1",
    },
    stoneGray: {
      900: "#131522",
      800: "#2B2D39",
      700: "#44454F",
      600: "#5C5D66",
      500: "#5D5A65",
      400: "#8D8E93",
      300: "#A5A6A9",
      200: "#BEBEC0",
      100: "#D6D6D6",
      50: "#F3F3F3",
    },
    stormGray: {
      900: "#000000",
      800: "#0d0d0d",
      700: "#1a1a1a",
      600: "#333333",
      500: "#3B3B3B",
    },
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Space Grotesk, sans-serif",
  },
  components: {
    Button,
    Input,
  },
});

export default theme;
