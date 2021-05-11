import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import List from "./components/list/list.component";

function App() {
  return (
    <React.Fragment>
      <Header active={"home"} />
      <main className="container mx-auto max-w-screen-lg pt-6">
        <List />
      </main>
      <footer className="text-center">All rights reserved © Alex 2021</footer>
    </React.Fragment>
  );
}

export default App;
