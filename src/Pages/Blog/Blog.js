import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-rose-500 text-center mb-5">
        Blog Questions
      </h1>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <p className="text-xl text-rose-500 font-bold">
            Difference between SQL and NoSQL?
          </p>
        </div>
        <div className="collapse-content">
          <p>
            <span className="text-xl text-rose-500 font-bold"> SQL</span>--Is
            SQL better or NoSQL? SQL databases are efficient at processing
            queries and joining data across tables, making it easier to perform
            complex queries against structured data, including ad hoc requests.
          </p>
          <p>
            <span className="text-xl text-rose-500 font-bold">NoSQL</span>
            --databases lack consistency across products and typically require
            more work to query data, particular as query complexity increases.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <p className="text-xl text-rose-500 font-bold">
            What is JWT, and how does it work?
          </p>
        </div>
        <div className="collapse-content">
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
            compact and self-contained way for securely transmitting information
            between parties as a JSON object. This information can be verified
            and trusted because it is digitally signed.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <p className="text-xl text-rose-500 font-bold">
            What is the difference between javascript and NodeJS?
          </p>
        </div>
        <div className="collapse-content">
          <p>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <p className="text-xl text-rose-500 font-bold">
            How does NodeJS handle multiple requests at the same time?
          </p>
        </div>
        <div className="collapse-content">
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
