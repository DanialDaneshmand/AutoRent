import React from "react";
import Header from "../features/Header/Header";

function Home() {
  return (
    <div>
      <Header>
        <img
          src="./images/bg2.jpg"
          alt="auto-rent"
          className="w-full h-screen"
        />
        <div className="fixed z-30 top-0  w-full bg-black opacity-50 h-screen"></div>
        <div className=" z-30 absolute right-5 bottom-10 text-white">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
            ea?
          </p>
          <div>
            <button>danial</button>
            <button>danial</button>
          </div>
        </div>
      </Header>
    </div>
  );
}

export default Home;
