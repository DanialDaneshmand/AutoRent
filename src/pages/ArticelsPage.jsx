import React from "react";
import Layout from "../features/Layout/Layout";
import Header from "../features/Header/Header";
import { HiChevronLeft } from "react-icons/hi2";
import ArticelsList from "../features/ArticelsComponents/ArticelsList";

function ArticelsPage() {
  return (
    <Layout>
      <Header>
      <img
            src="./images/header.jpg"
            alt="auto-rent"
            className=" block sm:hidden w-screen h-full "
          />
          <img
            src="./images/header5.jpg"
            alt="auto-rent"
            className=" hidden sm:block w-screen h-[800px] "
          />
        <div className=" absolute z-30 top-0  w-full bg-black opacity-70 h-full rounded-b-xl"></div>
        <div className=" z-30 absolute   bottom-64  flex justify-center w-full">
          <div className=" flex flex-col gap-y-2">
            <p className="  text-4xl text-[rgb(253,183,19)]"> مقالات </p>
            <p className=" text-gray-400 flex items-center">
              <span>اتو رنت </span>
              <span>
                <HiChevronLeft />
              </span>
              <span>مقالات</span>
            </p>
          </div>
        </div>
      </Header>
      <div className=" flex flex-col items-center px-4 my-16">
        <ArticelsList/>
      </div>
    </Layout>
  );
}

export default ArticelsPage;
