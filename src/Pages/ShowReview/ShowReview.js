import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

import ShowReviewRow from "./ShowReviewRow";

const ShowReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
      });
  }, [user?.email]);
  return (
    <div className=" w-full">
      <table className="table w-full">
        <thead className="text-center">
          <tr className="text-center">
            <th className="">Name</th>
            <th>Review</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {reviews?.map((review) => (
            <ShowReviewRow key={review._id} review={review}></ShowReviewRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowReview;
