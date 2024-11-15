import React from "react";
import Contaxt from "../features/ContactUs/Contaxt";
import Layout from "../features/Layout/Layout";
import Header from "../features/Header/Header";
import { HiChevronLeft } from "react-icons/hi2";
import SendMessage from "../features/ContactUs/SendMessage";

function ContactUs() {
  return (
    <Layout>
      <Header>
        <img
          src="./images/header.jpg"
          alt="auto-rent"
          className=" block sm:hidden w-screen h-full "
        />
        <img
            src="./images/header3.jpg"
            alt="auto-rent"
            className=" hidden sm:block w-screen h-[800px] "
          />
        <div className=" absolute z-30 top-0  w-full bg-black opacity-70 h-full rounded-b-xl"></div>
        <div className=" z-30 absolute   bottom-64  flex justify-center w-full">
          <div className=" flex flex-col gap-y-2">
            <p className="  text-4xl text-[rgb(253,183,19)]"> تماس با ما </p>
            <p className=" text-gray-400 flex items-center">
              <span>اتو رنت </span>
              <span>
                <HiChevronLeft />
              </span>
              <span>تماس با ما</span>
            </p>
          </div>
        </div>
      </Header>
      <div className=" w-full items-center flex  px-4 flex-col">
        <Contaxt />
        <SendMessage />
      </div>
    </Layout>
  );
}

export default ContactUs;
