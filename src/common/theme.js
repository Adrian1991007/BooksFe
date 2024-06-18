const theme = {
  colors: {
    primary: "#007bff",
    background: "#f8f9fa",
    text: "#333333",
    white: "#ffffff"
  },
  fonts: {
    body: "Arial, sans-serif",
    heading: "Arial, sans-serif"
  },
  fontSizes: [14, 16, 18, 20, 24, 32, 40, 48],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.2
  },
  text: {
    navlink: {
      color: "black",
      textDecoration: "none",
      "&:hover": {
        color: "text"
      }
    },
    footerText: {
      fontSize: [14, 16],
      fontWeight: "bold"
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background"
    },
    header: {
      bg: "primary",
      color: "white",
      py: 3
    }
  }
};

export default theme;
