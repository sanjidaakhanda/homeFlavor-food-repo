import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
const MenuDetail = () => {
  const menu = useLoaderData();
  const { name, image, description, _id } = menu;
  return (
    <div>
      <h2 className=" text-center text-rose-500 text-4xl font-bold mb-5">
        {name}
      </h2>
      <div className="card w-90 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/reviews/${_id}`}>
              <button className="btn btn-error">Buy Now</button>
            </Link>
          </div>
        </div>
        <p>{menu.reviews?.customer}</p>
      </div>
    </div>
  );
};

export default MenuDetail;
