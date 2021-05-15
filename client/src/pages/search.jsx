import React from "react";
import "./search.css";

function Search() {
  return (
    <>
      <h2 className="text-center">Пошук</h2>
      <form action="" method="POST">
        <label>
          <p>
            Введіть назву міста<span className="required">*</span>
          </p>
          <input name="city" id="city" required placeholder="Місто" />
        </label>
        <select size="1" name="type" id="type">
          <option value="none" selected>
            Виберіть тип
          </option>
          <option value="cafe">Кафе</option>
        </select>
      </form>
    </>
  );
}

export default Search;
