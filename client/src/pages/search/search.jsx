import React from "react";
import Label from "../../components/label/label.component";

function Search() {
    return (
        <div className='text-center'>
            <h2>Пошук бізнесу</h2>
            <form action="" method="POST" className='text-left'>
                <Label className="mt-6"
                       title="Введіть назву міста"
                       required
                       name="city"
                       id="city"
                       placeholder="Місто"/>
                <div className='mt-6'>
                    <p>Виберіть тип бізнесу</p>
                    <select
                        size="1"
                        name="type"
                        id="type"
                        className="input"
                        defaultValue="none"
                    >
                        <option value="cafe">Кафе</option>
                        <option value="cafe">Міні-маркет
                        </option>
                    </select>
                </div>
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
