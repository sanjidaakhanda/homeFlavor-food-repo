import React from "react";
import { Link } from "react-router-dom";
const AllMenusCard = ({ allMenu }) => {
  const { name, image, description, price, _id } = allMenu;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-rose-500 font-bold">{name}</h2>
          <p>{description.slice(0, 70)}</p>
          <p className="text-black-500 font-semibold text-xl"> Price:{price}</p>
          <div className="card-actions justify-end">
            <Link to={`/reviews/${_id}`}>
              <button className="btn btn-error">Write Review</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMenusCard;
