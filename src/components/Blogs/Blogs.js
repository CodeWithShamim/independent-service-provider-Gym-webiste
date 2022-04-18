import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div
      className="container bg-secondary text-light text-start p-5"
      style={{ minHeight: "calc(100vh - 90px)" }}
    >
      {/* --------------------question 1------------------------- */}
      <div>
        <h2>Difference between authorization and authentication??</h2>
        <p>
          Authentication and authorization are the two words used in the
          security world. They might sound similar but are completely different
          from each others. Authentication is used to authenticate someone's
          identity, whereas authorization is way to provide permission to
          someone to access a particular resource. Simply put, authentication is
          the process of verifying who someone is, whereas authorization is the
          process of verify what specific applications, files, and data a user
          has access to.
        </p>
      </div>

      {/* --------------------question 2------------------------- */}
      <div className="title-effect my-4"></div>
      <div>
        <h2>
          {" "}
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <p>
          The Firebase Realtime Database lets you build rich, collaborative
          applications by allowing secure access to the database directly from
          client-side code. Data is persisted locally, and even while offline,
          realtime events continue to fire, giving the end user a responsive
          experience.
        </p>
      </div>

      <div>
        <h3>Firebase alternative:</h3>
        1. NativeScript
        <br />
        2. Couchbase
        <br />
        3. Kuzzle
        <br />
        4. Parse <br />
        5. Back4app <br />
        6. AWS Amplify
      </div>

      {/* --------------------question 3------------------------- */}
      <div className="title-effect my-4"></div>
      <div>
        <h2>
          What other services does firebase provide other than authentication?
        </h2>
        <ul>
          <li>Google Analytics</li>
          <li>Cloud Storage</li>
          <li>Hoisting</li>
          <li>Authentication</li>
          <li>Cloud Functions</li>
          <li>Cloud Firestore</li>
          <li>Remote Config </li>
          <li>Dynamic Links </li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
