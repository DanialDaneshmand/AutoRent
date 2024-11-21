import React, { useState } from "react";
import { generalQuestions } from "../../data/data";
import GeneralQuestionsItem from "../features/GeneralQuestions/GeneralQuestionsItem";
import Layout from "../features/Layout/Layout";
import { HiChevronLeft } from "react-icons/hi2";
import Header from "../features/Header/Header"

function GeneralQuestionsPage() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Layout>
      <Header>
        <img
          src="./images/header.jpg"
          alt="auto-rent"
          className=" block sm:hidden w-screen h-[600px] "
        />
        <img
          src="./images/header5.jpg"
          alt="auto-rent"
          className=" hidden sm:block w-screen h-[500px] "
        />
        <div className=" absolute z-30 top-0  w-full bg-black opacity-70 h-full rounded-b-xl"></div>
        <div className=" z-30 absolute   bottom-32 sm:bottom-24  flex justify-center w-full">
          <div className=" flex flex-col gap-y-2">
            <p className="  text-4xl text-[rgb(253,183,19)]">مقالات </p>
            <p className=" text-gray-400 flex items-center">
              <span>اتو رنت </span>
              <span>
                <HiChevronLeft />
              </span>
              <span> سوالات متداول</span>
            </p>
          </div>
        </div>
      </Header>
      <div className=" flex justify-center my-16">
        <div className=" grid grid-cols-12 w-full max-w-screen-xl">
          <div className=" col-span-12 md:col-span-8  px-4 xl:px-0 pl-4">
            {generalQuestions.map((item) => (
              <GeneralQuestionsItem
                key={item.id}
                item={item}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
              />
            ))}
          </div>
          <div className=" flex justify-center  py-4 px-4 xl:px-0 md:col-span-4 col-span-12">
            <img
              src="./images/man.jpg"
              alt=""
              className=" rounded-lg w-full md:w-auto md:h-[300px]"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GeneralQuestionsPage;
