import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark radius-0">
        <img
          src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"
          className="card-img"
          alt="hero"
          height="450px"
        />
        <div className="card-img-overlay d-flex flex-column text-center justify-content-around">
          <div className="container">
            <h5 className="card-title fs-1">Card title</h5>
            <p className="card-text fs-1">
              <small>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
