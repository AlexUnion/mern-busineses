import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import List from "./components/list/list.component";
import MainLayout from "./layout/mainLayout";
import Search from "./pages/search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Switch>
          <Route path="/about">
            <h2>About</h2>
          </Route>
          <Route path="/add">
            <h2>add</h2>
          </Route>
          <Route exact path="/search" component={Search} />
          <Route path="/" component={List} />
        </Switch>
      </MainLayout>
      <footer className="text-center">
        All rights reserved © Teterev Vitaliy 2021
      </footer>
    </BrowserRouter>
  );
}

export default App;
