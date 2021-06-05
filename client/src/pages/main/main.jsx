import React, { useState, useEffect } from "react";

import Loader
    from "../../components/loader/loader.component";
import List from "../../components/list/list.component";

import { SERVER_URI } from "../../utils/constants";

const cards = [];

const Main = () => {
    const [ isLoading, setLoading ] = useState(true);

    useEffect(() => {
        cards.length = 0;
        fetch(SERVER_URI)
            .then((data) => data.json())
            .then((list) => {
                list.forEach((item) => cards.push(item));
                setLoading(false);
            });
    }, []);

    return (
        <>
            {
                isLoading ?
                    <Loader/> :
                    <List cards={cards}/>
            }
        </>
    );
};

export default Main;