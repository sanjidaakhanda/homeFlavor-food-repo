import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
const Reviews = () => {
  const { name, _id, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phone = form.phone.value;
    const email = user?.email || "unregistered";
    const message = form.message.value;
    console.log(firstName, lastName, phone, email, message);

    const review = {
      itemId: _id,
      itemName: name,
      price,
      message,
      email,
    };
  };
  return (
    <div>
      <form onSubmit={handleReviewSubmit}>
        <h2 className="text-3xl font-bold">
          Add Review For this Item -
          <span className=" text-rose-500 font-bold text-3xl">{name}</span>
        </h2>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <input
            type="text"
            placeholder="First Name "
            name="firstName"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Your Phone"
            name="phone"
            className="input input-bordered w-full "
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            defaultValue={user?.email}
            className="input input-bordered w-full "
            readOnly
          />
        </div>
        <textarea
          className="textarea textarea-bordered w-full m-5"
          name="message"
          placeholder="your review"
        ></textarea>
        <input className="btn" type="submit" value="Add your review" />
      </form>
    </div>
  );
};

export default Reviews;
