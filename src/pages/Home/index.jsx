/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Box, Button, Flex, Heading, Text } from "theme-ui";
import { Layout } from "../../components";
import RecommendationModal from "../../components/RecommendationModal";

const Home = () => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <Layout>
      <Box sx={{ maxWidth: "55rem", mx: "auto", my: 4, px: 4 }}>
        <Heading
          as="h1"
          variant="styles.h1"
          sx={{ textAlign: "center", mb: 4, fontSize: [28, 32, 36] }}>
          Welcome to the fascinating world of books!
        </Heading>
        <Text
          variant="styles.body"
          sx={{ mb: 4, fontSize: [16, 18, 20], lineHeight: "1.6", textAlign: "justify" }}>
          Surround yourself with wisdom and imagination in our vast universe of reading. Whether
          you're an adventurer, a seeker of knowledge, or a traveler in fantastical worlds, we
          invite you to discover our captivating stories and immerse yourself in the magic of books.
        </Text>
        <Text
          variant="styles.body"
          sx={{ mb: 4, fontSize: [16, 18, 20], lineHeight: "1.6", textAlign: "justify" }}>
          Here, at our virtual library, we strive to offer you a unique and personalized reading
          experience. Through an innovative feature, you can receive reading recommendations
          tailored to your needs, based on genre and age.
        </Text>
        <Text
          variant="styles.body"
          sx={{ mb: 4, fontSize: [16, 18, 20], lineHeight: "1.6", textAlign: "justify" }}>
          To begin your personalized literary adventure, please press the 'Receive recommendations'
          button. We will ensure that each recommendation is specially chosen for you.
        </Text>
        <Flex sx={{ justifyContent: "center" }}>
          <Button
            onClick={() => setDisplayModal(true)}
            sx={{ fontSize: [14, 16, 18], py: 2, mt: 4 }}>
            Receive recommendations
          </Button>
        </Flex>
      </Box>

      <RecommendationModal isOpen={displayModal} onClose={() => setDisplayModal(false)} />
    </Layout>
  );
};

export default Home;
