import React from "react";
import "./search.css";
import List from "../components/list/list.component";

function Search() {
  return (
    <>
      <h2 className="text-center">Пошук бізнесу</h2>
      <form action="" method="POST">
        <div className="form-item">
          <label className="label">
            <p>
              Введіть назву міста<span className="required">*</span>
            </p>
            <input
              name="city"
              id="city"
              required
              placeholder="Місто"
              className="input"
            />
          </label>
        </div>
        <div className="form-item">
          <p>Виберіть тип бізнесу</p>
          <select size="1" name="type" id="type" className="input">
            <option value="none" selected disabled>
              Тип
            </option>
            <option value="cafe">Кафе</option>
          </select>
        </div>
        <div className="form-submit">
          <button type="submit" className="btn">
            Пошук
          </button>
        </div>
      </form>
    </>
  );
}

export default Search;
