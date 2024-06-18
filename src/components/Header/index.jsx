import React from "react";
import { Image } from "theme-ui";
import { Flex, NavLink } from "theme-ui";

const Header = () => {
  return (
    <Flex
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        px: 4,
        borderBottom: "1px solid #BEBEBE",
        mb: "2rem"
      }}>
      <NavLink href="/" sx={{ variant: "text.navlink", fontSize: 4 }}>
        <Image src="/logo.png" alt="Logo" style={{ maxWidth: "100px" }} />
      </NavLink>
      <Flex>
        <NavLink href="/" sx={{ variant: "text.navlink", fontSize: 3, ml: "1rem" }}>
          Home
        </NavLink>
        <NavLink href="/books" sx={{ variant: "text.navlink", fontSize: 3, mx: "2rem" }}>
          Books
        </NavLink>
        <NavLink href="/subscribe" sx={{ variant: "text.navlink", fontSize: 3, mr: "1rem" }}>
          Subscribe
        </NavLink>
        <NavLink href="/addBook" sx={{ variant: "text.navlink", fontSize: 3 }}>
          Add New Book
        </NavLink>
      </Flex>
    </Flex>
  );
};

export default Header;
