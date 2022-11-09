import React from "react";
import { Link } from "react-router-dom";
const AllMenusCard = ({ allMenu }) => {
  const { name, image, description, price } = allMenu;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMenusCard;
