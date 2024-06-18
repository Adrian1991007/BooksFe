import { createContext, useState } from "react";

const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(null);

  return <BooksContext.Provider value={{ books, setBooks }}>{children}</BooksContext.Provider>;
};

export { BooksProvider, BooksContext };
