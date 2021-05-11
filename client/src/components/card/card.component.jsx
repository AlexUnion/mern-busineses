import React from "react";
import "./card.css";

function Card(props) {
  const { name, url, description, type } = props;
  return (
    <article className="card-container rounded-xl flex justify-between">
      <img src={url} alt="" className="rounded-xl inline-block" />
      <div className="inline-block py-4 px-8 card-info relative">
        <h2>{`${type}: ${name}`}</h2>
        <p>{description}</p>
        <div className="card-btn-wrapper flex justify-between pt-2">
          <div className="card-type">{type}</div>
          <button className="btn" type="button">
            Читати далі
          </button>
        </div>
      </div>
    </article>
  );
}

export default Card;
