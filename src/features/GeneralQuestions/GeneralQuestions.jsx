import React, { useState } from "react";
import { generalQuestions } from "../../../data/data";

import GeneralQuestionsItem from "./GeneralQuestionsItem";

function GeneralQuestions() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className=" w-full max-w-screen-xl mb-16">
      <div className=" w-full text-center my-16 ">
        <p className=" text-gray-500 text-lg">
          پر تکرار ترین سوالاتی که پرسیدید
        </p>
        <p className=" text-3xl font-bold text-gray-800 mt-2">
          سوالات <span className=" text-[rgb(253,183,19)]">متداول</span>
        </p>
      </div>
      <div className=" grid grid-cols-12  ">
        <div className=" col-span-12 md:col-span-8 px-4">
          {generalQuestions.map((item) => (
            <GeneralQuestionsItem
              key={item.id}
              item={item}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          ))}
        </div>
        <div className=" flex justify-center  p-4 md:col-span-4 col-span-12">
          <img
            src="./images/man.jpg"
            alt=""
            className=" rounded-lg w-full md:w-auto md:h-[300px]"
          />
        </div>
      </div>
    </div>
  );
}

export default GeneralQuestions;
