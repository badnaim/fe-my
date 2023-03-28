import React from "react";

export default function Product({ data }) {
  return (
    <div className="card">
      <img src={data.image} />
      <p>{data.name}</p>
    </div>
  );
}
