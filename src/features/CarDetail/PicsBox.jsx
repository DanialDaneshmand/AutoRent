import React from "react";
import { cars } from "../../../data/data";

function PicsBox({ state }) {
  return (
    <div className=" w-full my-4 bg-white rounded-xl border p-4">
      <img src={cars[state.id - 1].imageSrc} alt="auto-rent" />
    </div>
  );
}

export default PicsBox;
