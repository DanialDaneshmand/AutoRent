import React from "react";
import { HiOutlineIdentification } from "react-icons/hi2";
import { HiOutlineCheck } from "react-icons/hi2";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { FaCarRear } from "react-icons/fa6";
import ProccesItem from "./ProccesItem";

function Process() {
  return (
    <div className=" bg-white border flex justify-around p-4 w-full max-w-screen-xl my-16 rounded-xl">
      <ProccesItem
        checked={true}
        icon={<HiOutlineCheck />}
        title="انتخاب خودرو"
      />
      <ProccesItem
        active={true}
        icon={<HiOutlineIdentification />}
        title="مشخصات"
      />
      <ProccesItem icon={<HiOutlineDocumentText />} title="تایید اطلاعات" />
      <ProccesItem icon={<HiOutlineCreditCard />} title="پرداخت" />
      <ProccesItem icon={<FaCarRear />} title="تحویل خودرو" />
    </div>
  );
}

export default Process;
