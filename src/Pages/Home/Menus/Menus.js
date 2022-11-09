import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { Link } from "react-router-dom";
const Menus = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/menus")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  return (
    <div>
      <p className="text-4xl text-rose-500 text-center mt-5 font-bold">
        Our Menus
      </p>
      <p className=" font-semibold text-center mb-5">
        Unfussy halal eatery specializing in fried chicken, plus subs,
        gyros,seafood, burgers <br /> & salads. pick your favorite item from
        here.
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {menus.map((menu) => (
          <MenuCard key={menu.menu_id} menu={menu}></MenuCard>
        ))}
      </div>
      <div className="text-center m-5">
        <Link to={"/menus"}>
          <button className="btn btn-outline btn-error text-xl font-bold">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Menus;
