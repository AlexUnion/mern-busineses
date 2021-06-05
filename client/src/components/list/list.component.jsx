import React from "react";

import Card from "../card/card.component";

function List(props) {
    const { cards } = props;
    return (
        <div className="py-4">
            {cards.map(({
                            _id,
                            title,
                            city,
                            shortDescription,
                            img,
                            type
                        }) => (
                <Card
                    key={_id}
                    id={_id}
                    name={title}
                    url={img}
                    description={shortDescription}
                    type={type}
                    city={city}
                />
            ))
            }
        </div>
    );
}

export default List;
