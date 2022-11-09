import React from "react";

const MenuCard = ({ menu }) => {
  const { image, name, price } = menu;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-rose-500">{name}</h2>
          <p className="text-black-500 font-semibold text-xl">Price: {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-error">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
