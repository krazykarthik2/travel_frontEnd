import React from "react";

function Card({ title, bullets, className, style }) {
  return (
    <div className={className}>
      <div className="card p-3" style={style}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {bullets.map((bullet,index) => (
            <p className="card-text" key={index}>{bullet}</p>
          ))}
          <a href="#" className="btn btn-primary">
            Buy
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
