import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import MainLayout from "./layout/mainLayout";
import Search from "./pages/search/search";
import Add from "./pages/add/add";
import Main from "./pages/main/main";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <MainLayout>
                <Switch>
                    <Route path="/about">
                        <h2>About</h2>
                    </Route>
                    <Route path="/add" render={() => <Add/>}/>
                    <Route path="/search"
                           render={() => <Search/>}/>
                    <Route path='/business/:id'/>
                    <Route exact path="/" render={() => <Main/>}/>
                </Switch>
            </MainLayout>
            <footer className="text-center">
                All rights reserved © Teterev Vitaliy 2021
            </footer>
        </BrowserRouter>
    );
}

export default App;
