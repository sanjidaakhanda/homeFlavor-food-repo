import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";

const Menus = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("Menus.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  return (
    <div>
      <p className="text-4xl text-rose-500 text-center mt-5 font-semibold">
        Our Menus
      </p>
      <p className=" font-semibold text-center mb-5">
        Unfussy halal eatery specializing in fried chicken, plus subs,
        gyros,seafood, burgers <br /> & salads. pick your favorite item from
        here.
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {menus.map((menu) => (
          <MenuCard key={menu.id} menu={menu}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default Menus;
