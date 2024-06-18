import React, { useContext, useEffect } from "react";
import { Layout } from "../../components";
import { Grid } from "theme-ui";
import BookCard from "../../components/BookCard";
import { BooksContext } from "../../common/booksContext";
import Storage from "store2";
import { getBooks } from "../../axios/books";

const Books = () => {
  const { books, setBooks } = useContext(BooksContext);
  console.log("books", books);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!books) {
          const person = {
            gender: Storage.get("gender", null),
            age: Storage.get("age", null)
          };
          const params = Storage.has("gender") && Storage.has("age") ? person : {};
          const response = await getBooks(params);
          setBooks(response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {};
  }, []);

  return (
    <Layout>
      <Grid mx="5rem" sx={{ gridTemplateColumns: "repeat(5, 1fr)", mb: "3rem" }}>
        {books && books.map((book) => <BookCard key={book.id} book={book} />)}
      </Grid>
    </Layout>
  );
};

export default Books;
