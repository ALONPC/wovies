import React from "react";

export const Card = ({ thumbnail }) => {
  return <img className="card" src={thumbnail.url} alt={thumbnail.title}></img>;
};
