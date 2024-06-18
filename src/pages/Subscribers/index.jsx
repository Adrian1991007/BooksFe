import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Input, Text } from "theme-ui";
import { Layout } from "../../components";
import { addSubscriber, getSubscribers } from "../../axios/books";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [subscribers, setSubscribers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!subscribers) {
          console.log("aici");
          const response = await getSubscribers();
          setSubscribers(response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {};
  }, []);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setIsValid(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      setIsValid(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsValid(false);
      return;
    }

    addSubscriber(email);
    setEmail("");
    setIsValid(true);
  };

  return (
    <Layout>
      <Box sx={{ maxWidth: "800px", mx: "auto", my: 4, px: 4 }}>
        <Heading
          as="h1"
          variant="styles.h1"
          sx={{ textAlign: "center", mb: 4, fontSize: [28, 32, 36] }}>
          Welcome to Virtual Library - Stay Updated!
        </Heading>
        <Text
          variant="styles.body"
          sx={{ mb: 4, fontSize: [16, 18, 20], lineHeight: "1.6", textAlign: "justify" }}>
          Stay connected with us and be the first to know about new releases, author interviews,
          book reviews, and exciting literary news.
        </Text>

        <form onSubmit={handleSubmit}>
          <Flex sx={{ flexDirection: "column" }}>
            <Input
              placeholder="Enter your email address"
              value={email}
              onChange={handleInputChange}
              sx={{
                width: "100%",
                fontSize: [14, 16, 18],
                py: 2,
                mt: 3,
                border: isValid ? "1px solid #ccc" : "1px solid red"
              }}
            />
            {!isValid && (
              <Text sx={{ color: "red", fontSize: [12, 14, 16], mb: 3 }}>
                Please enter a valid email address.
              </Text>
            )}
            <Button type="submit" sx={{ fontSize: [14, 16, 18], py: 2, mt: 3 }}>
              Subscribe
            </Button>
          </Flex>
        </form>
      </Box>
    </Layout>
  );
};

export default Subscribe;
