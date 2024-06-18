import React from "react";
import { Box, Text } from "theme-ui";

const Footer = () => {
  return (
    <Box
      as="footer"
      sx={{
        bg: "primary",
        color: "white",
        py: 3,
        textAlign: "center",
        mt: "auto"
      }}>
      <Text variant="styles.footerText">
        © {new Date().getFullYear()} Virtual Library. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
