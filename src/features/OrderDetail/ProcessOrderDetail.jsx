import React from "react";
import { HiOutlineIdentification } from "react-icons/hi2";
import { HiOutlineCheck } from "react-icons/hi2";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { FaCarRear } from "react-icons/fa6";
import ProccesItem from "../UserInfo/ProccesItem";

function ProcessOrderDetail() {
  return (
    <div className=" bg-white border flex justify-around p-4 w-full max-w-screen-xl my-4 rounded-xl">
      <ProccesItem
        checked={true}
        icon={<HiOutlineCheck />}
        title="انتخاب خودرو"
      />
      <ProccesItem
        checked={true}
        icon={<HiOutlineIdentification />}
        title="مشخصات"
      />
      <ProccesItem
        icon={<HiOutlineDocumentText />}
        checked={true}
        title="تایید اطلاعات"
      />
      <ProccesItem
        icon={<HiOutlineCreditCard />}
        title="پرداخت"
        checked={true}
      />
      <ProccesItem active={true} icon={<FaCarRear />} title="تحویل خودرو" />
    </div>
  );
}

export default ProcessOrderDetail;
