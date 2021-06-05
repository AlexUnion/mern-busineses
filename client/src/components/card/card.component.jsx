import React from "react";

import { useHistory } from 'react-router-dom'

import "./card.css";

function Card(props) {
  const { id, name, url, description, type, city } = props;
  const history = useHistory()

  const handleClick = () => history.push(`/business/${id}`)

  return (
    <article className="card-container rounded-xl flex justify-between">
      <img src={url} alt="" className="rounded-xl inline-block" />
      <div className="inline-block py-4 px-8 card-info relative">
        <h2>{`${type}: ${name}`}</h2>
        <p>{description}</p>
        <div className="card-btn-wrapper flex justify-between pt-2">
          <div className="card-type">{city}</div>
          <button className="btn" type="button" onClick={handleClick}>
            Читати далі
          </button>
        </div>
      </div>
    </article>
  );
}

export default Card;
