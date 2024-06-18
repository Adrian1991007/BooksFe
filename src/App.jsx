import React from "react";
import { AddBook, Books, Home, Subscribe } from "./pages";
import { Route, Switch } from "wouter";
import theme from "./common/theme";
import { ThemeUIProvider } from "theme-ui";
import { BooksProvider } from "./common/booksContext";

const App = () => {
  return (
    <BooksProvider>
      <ThemeUIProvider theme={theme}>
        <Switch>
          <Route path="/books" component={Books} />
          <Route path="/subscribe" component={Subscribe} />
          <Route path="/addBook" component={AddBook} />

          <Route>
            <Home />
          </Route>
        </Switch>
      </ThemeUIProvider>
    </BooksProvider>
  );
};

export default App;
