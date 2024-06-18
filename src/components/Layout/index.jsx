import React from "react";
import { Flex } from "theme-ui";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <Flex sx={{ flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Flex sx={{ flex: "1 0 auto", flexDirection: "column" }}>{children}</Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;
