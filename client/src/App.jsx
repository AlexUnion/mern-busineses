import React from "react";
import "./App.css";
import Header from "./components/header/header.component";

function App() {
  return (
    <React.Fragment>
      <Header active={"home"} />
      <main className="container mx-auto max-w-screen-lg pt-6">
        <h1>Hello</h1>
      </main>
      <footer className="container mx-auto max-w-screen-lg">Alex 2021</footer>
    </React.Fragment>
  );
}

export default App;
