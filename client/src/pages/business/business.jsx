import React, { useEffect, useState } from "react";

import Loader
    from "../../components/loader/loader.component";

import "./business.css";

import { SERVER_URI } from "../../utils/constants";
import { getLabel } from "../../data/business.type";

let card = {};

const Business = ({ id }) => {
    const [ isLoading, setLoading ] = useState(true);

    useEffect(() => {
        const uri = `${SERVER_URI}/business/${id}`;
        fetch(uri)
            .then((data) => data.json())
            .then((item) => {
                card = item;
                setLoading(false);
            });
    }, [id]);

    const typeLabel = card.type && getLabel(card.type);

    return (
        <>
            {
                isLoading ?
                    <Loader/> :
                    <div className='business-container'>
                        <h2 className='text-center text-gray-900 text-3xl'>
                            {card.title}
                        </h2>
                        <img className='h-80 mx-auto'
                             src={card.img} alt=''/>
                        <div>
                            <p className='table-item'>
                                Ми команда:
                                <span>
                                    {card.title}
                                </span>
                            </p>
                            <p className='table-item'>
                                Тип нашого бізнесу:
                                <span>
                                    {typeLabel}
                                </span>
                            </p>
                            <p className='table-item'>
                                Ми знаходимось у
                                місті:
                                <span>
                                    {card.city}
                                </span>
                            </p>
                        </div>
                        <div className='description-container'>
                            <h3 className='text-center text-gray-900 text-2xl'>
                                Про нас
                            </h3>
                            <p className='text-lg text-justify text-gray-700 indent'>
                                {card.description}
                            </p>
                            <div className='link-container'>
                                <span>Наш веб сайт:</span>
                                <a href='/'>Перейти</a>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Business;