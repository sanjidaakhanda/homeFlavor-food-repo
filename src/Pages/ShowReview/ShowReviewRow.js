import React from "react";

const ShowReviewRow = ({ review }) => {
  const { itemName, message, price, email } = review;
  console.log(review);
  return (
    <div>
      <tr>
        <th className="w-full">
          <label>
            <button className="btn btn-circle btn-outline"></button>
          </label>
        </th>
        <td>
          <div className="">
            <div>
              <div className="font-bold">{itemName}</div>
              <div className="text-sm opacity-50">{price}</div>
            </div>
          </div>
        </td>
        <td>
          <br />
          <span className="badge badge-ghost badge-lg">{message}</span>
        </td>
        <td>{email}</td>
        <th>
          <button className="btn btn-ghost btn-xs"></button>
        </th>
      </tr>
    </div>
  );
};

export default ShowReviewRow;
