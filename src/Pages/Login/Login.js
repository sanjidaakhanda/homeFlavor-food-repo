import React from "react";

const Login = () => {
  const handleLogIn = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="hero w-full my-10">
        <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img
              src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-2242.jpg?w=740&t=st=1667945646~exp=1667946246~hmac=e4cc2acc6193a0ac1f88b4035992aff391d7820c903ca4d370a0272094f1bc10"
              alt=""
              srcset=""
            />
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold mb-10 text-center text-rose-500">
              Login now!
            </h1>

            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="login" className="btn btn-error" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
