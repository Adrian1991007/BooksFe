import React, { useState, useRef } from "react";
import { Box, Button, Flex, Heading, Input, Label, Select, Text, Card } from "theme-ui";
import { Layout } from "../../components";
import { addBook } from "../../axios/books";
import BooksToast from "../../components/Toast";

const AddBook = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState("(0-2)");
  const [isValid, setIsValid] = useState(true);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const fileInputRef = useRef(null);

  const ageList = [
    "(0-2)",
    "(4-6)",
    "(8-12)",
    "(15-20)",
    "(25-32)",
    "(38-43)",
    "(48-53)",
    "(60-100)"
  ];
  const genderList = ["Male", "Female"];

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !author || !image) {
      setIsValid(false);
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("author", author);
    formData.append("gender", gender);
    formData.append("age", age);

    try {
      await addBook(formData);
      setIsToastVisible(true);
      // Reset form
      setImage(null);
      setTitle("");
      setAuthor("");
      setGender("Male");
      setAge("(0-2)");
      setIsValid(true);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <Layout>
      <Box sx={{ maxWidth: "600px", mx: "auto", px: 4 }}>
        <Heading
          as="h1"
          variant="styles.h1"
          sx={{ textAlign: "center", mb: 3, fontSize: [28, 32, 36] }}>
          Add New Book
        </Heading>

        <Card
          sx={{
            p: 4,
            bg: "background",
            borderRadius: "8px",
            boxShadow: "0 0 16px rgba(0, 0, 0, 0.25)"
          }}>
          <form onSubmit={handleSubmit}>
            <Flex sx={{ flexDirection: "column", gap: 3 }}>
              <Box>
                <Label htmlFor="image" sx={{ fontSize: 2, mb: 1 }}>
                  Book Image
                </Label>
                <Input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={(e) => setImage(e.target.files[0])}
                  sx={{
                    py: 2,
                    px: 3,
                    borderColor: "primary",
                    borderRadius: "4px",
                    borderWidth: "2px"
                  }}
                />
              </Box>

              <Box>
                <Label htmlFor="title" sx={{ fontSize: 2, mb: 1 }}>
                  Book Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  sx={{
                    py: 2,
                    px: 3,
                    borderColor: "primary",
                    borderRadius: "4px",
                    borderWidth: "2px"
                  }}
                />
              </Box>

              <Box>
                <Label htmlFor="author" sx={{ fontSize: 2, mb: 1 }}>
                  Author
                </Label>
                <Input
                  id="author"
                  name="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  sx={{
                    py: 2,
                    px: 3,
                    borderColor: "primary",
                    borderRadius: "4px",
                    borderWidth: "2px"
                  }}
                />
              </Box>
              <Box>
                <Label htmlFor="gender" sx={{ fontSize: 2, mb: 1 }}>
                  Gender
                </Label>
                <Select
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  sx={{
                    py: 2,
                    px: 3,
                    borderColor: "primary",
                    borderRadius: "4px",
                    borderWidth: "2px"
                  }}>
                  {genderList.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </Select>
              </Box>

              <Box>
                <Label htmlFor="age" sx={{ fontSize: 2, mb: 1 }}>
                  Age
                </Label>
                <Select
                  id="age"
                  name="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  sx={{
                    py: 2,
                    px: 3,
                    borderColor: "primary",
                    borderRadius: "4px",
                    borderWidth: "2px"
                  }}>
                  {ageList.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </Select>
              </Box>

              {!isValid && (
                <Text sx={{ color: "red", fontSize: [12, 14, 16], mb: 3 }}>
                  Please fill in all the fields and upload an image.
                </Text>
              )}

              <Button
                type="submit"
                sx={{
                  fontSize: [14, 16, 18],
                  py: 2,
                  mt: 3,
                  bg: "primary",
                  color: "background",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                  "&:hover": { bg: "highlight" }
                }}>
                Add Book
              </Button>
            </Flex>
          </form>
        </Card>
        <BooksToast
          isOpen={isToastVisible}
          message={"Book added successfully"}
          onClose={() => setIsToastVisible(false)}
        />
      </Box>
    </Layout>
  );
};

export default AddBook;
