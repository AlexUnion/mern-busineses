import React from "react";
import Label from "../../components/label/label.component";
import Selector from "../../components/selector/selector";

function Search() {
    return (
        <div className='text-center'>
            <h2>Пошук бізнесу</h2>
            <form action="" method="POST"
                  className='text-left'>
                <Label className="mt-6"
                       title="Введіть назву міста"
                       required
                       name="city"
                       id="city"
                       placeholder="Місто"/>
                <Selector className="mt-6"
                          title="Виберіть тип бізнесу"
                          name="type"
                          id="type"/>
                <div className="mt-6 text-right">
                    <button type="submit" className="btn">
                        Пошук
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Search;
