import React, { useState } from "react";
import Label from "../../components/label/label.component";
import Selector from "../../components/selector/selector";

import { SERVER_URI } from "../../utils/constants";
import List from "../../components/list/list.component";

function Search() {
    const [ state, setState ] = useState({});
    const [ resultList, setResultList ] = useState([]);

    const handleInput = (e) => setState((prev) => ({
        ...prev,
        city: e.target.value
    }));
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!state.city) return;

        const uri = `${SERVER_URI}/search?city=${state.city}`;
        fetch(uri)
            .then((data) => data.json())
            .then((result) => setResultList(result));
    };

    return (
        <div className='text-center'>
            <h2>Пошук бізнесу</h2>
            <form action="" method="POST"
                  className='text-left'
                  onSubmit={handleSubmit}>
                <Label className="mt-6"
                       title="Введіть назву міста"
                       required
                       name="city"
                       placeholder="Місто"
                       onChange={handleInput}/>
                <Selector className="mt-6"
                          title="Виберіть тип бізнесу"
                          name="type"/>
                <div className="mt-6 text-right">
                    <button type="submit" className="btn">
                        Пошук
                    </button>
                </div>
            </form>
            {
                resultList.length ? (
                    <div className='border-t border-blue-900 mt-4'>
                        <h3 className='text-xl mt-4'>Результат пошуку</h3>
                        <List cards={resultList}/>
                    </div>
                ) : null
            }
        </div>
    );
}

export default Search;
