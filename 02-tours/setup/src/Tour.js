import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [read, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name}></img>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {read ? info : `${info.substring(0, 220)}... `}{" "}
          <button onClick={() => setReadMore(!read)}>
            {" "}
            {read ? "show less" : "read more"}{" "}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
