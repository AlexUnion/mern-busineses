import React, { useEffect, useState } from "react";
import { SERVER_URI } from "../../utils/constants";
import Loader
    from "../../components/loader/loader.component";

const cards = [];

const Business = ({ id }) => {
    const [ isLoading, setLoading ] = useState(true);
    const uri = `${SERVER_URI}/business/${id}`;

    useEffect(() => {
        cards.length = 0;
        fetch(uri)
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
                    {id}
            }
        </>
    );
};

export default Business;