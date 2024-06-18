import React from "react";
import { Box, Text, Image, Flex } from "theme-ui";

const BookCard = ({ book }) => {
  const { title, authors, imageUrl } = book;
  console.log("book", book);

  return (
    <Box
      sx={{
        maxWidth: "300px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
        mb: 3
      }}>
      <Flex sx={{ width: "100%", justifyContent: "center", height: "15rem" }}>
        <Image src={imageUrl} alt={title} />
      </Flex>

      <Flex sx={{ height: "5rem", pt: "0.5rem" }}>
        <Text as="h3" sx={{ fontSize: 3, my: 2 }}>
          {title}
        </Text>
      </Flex>

      <Text sx={{ fontSize: 2, color: "textSecondary", mb: 2 }}>{authors}</Text>
    </Box>
  );
};

export default BookCard;
