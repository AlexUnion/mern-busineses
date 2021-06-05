import React, { useEffect, useState } from "react";

import Loader
    from "../../components/loader/loader.component";

import { SERVER_URI } from "../../utils/constants";

let card = {};

const Business = ({ id }) => {
    const [ isLoading, setLoading ] = useState(true);
    const uri = `${SERVER_URI}/business/${id}`;

    useEffect(() => {
        fetch(uri)
            .then((data) => data.json())
            .then((item) => {
                card = item;
                setLoading(false);
            });
    }, []);

    return (
        <>
            {
                isLoading ?
                    <Loader/> :
                    <div className='max-w-3xl mx-auto mb-8'>
                        <h2 className='text-center text-gray-900 mt-0 text-3xl'>
                            {card.title}
                        </h2>
                        <img className='h-80 mx-auto mt-6'
                             src={card.img} alt=''/>
                        <div
                            className='max-w-xl mx-auto mt-6'>
                            <p className='text-gray-700'>
                                Ми команда:
                                <span
                                    className='bg-gray-800 text-white py-1 px-2 rounded ml-1'>
                                    {card.title}
                                </span>
                            </p>
                            <p className='mt-2 text-gray-700'>
                                Тип нашого бізнесу:
                                <span
                                    className='bg-gray-800 text-white py-1 px-2 rounded ml-1'>
                                    {card.type}
                                </span>
                            </p>
                            <p className='mt-2 text-gray-700'>
                                Ми знаходимось в
                                місті:
                                <span
                                    className='bg-gray-800 text-white py-1 px-2 rounded ml-1'>
                                    {card.city}
                                </span>
                            </p>
                        </div>
                        <h3 className='text-center mt-4 text-gray-900 text-2xl'>Про
                            нас</h3>
                        <p className='text-lg mt-4 text-justify text-gray-700 indent'>
                            {card.description}
                        </p>
                    </div>
            }
        </>
    );
};
;

export default Business;