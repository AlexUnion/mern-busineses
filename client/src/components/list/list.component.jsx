import React, { useState, useEffect } from "react";
import Card from "../card/card.component";
import Loader from "../loader/loader.component";
import { SERVER_URI } from "../../utils/constants";

const cards = [];

function List() {
    const [ isLoading, setLoading ] = useState(true);
    useEffect(() => {
        cards.length = 0;
        fetch(SERVER_URI)
            .then((data) => data.json())
            .then((list) => {
                console.log(list);
                list.forEach((item) => cards.push(item));
                setLoading(false);
            });
    }, []);

    return (
        <div className="py-4">
            {
                isLoading ?
                    <Loader/> :
                    cards.map(({
                                   _id,
                                   title,
                                   city,
                                   shortDescription,
                                   img,
                                   type
                               }) => (
                        <Card
                            key={_id}
                            name={title}
                            url={
                                img
                            }
                            description={
                                shortDescription
                            }
                            type={type}
                            city={city}
                        />
                    ))
            }

        </div>
    );
}

export default List;
