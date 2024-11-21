import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi2";
import TextFeildInfo from "./TextFeildInfo";
import GeneralModal from "../../ui/GeneralModal";
import { Link, useNavigate } from "react-router-dom";
import { HiMiniPhone } from "react-icons/hi2";
import { HiOutlineMapPin } from "react-icons/hi2";
import { HiEnvelope } from "react-icons/hi2";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

function UserInformationBox() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const schema = yup
    .object({
      code: yup.string().required("کد ملی  الزامی است"),
      email: yup.string().required(" ایمیل  الزامی است"),
      address: yup.string().required(" ادرس  الزامی است"),
      lastName: yup.string().required("نام خانوادگی الزامی است"),
      name: yup.string().required("نام الزامی است"),
      phone: yup
        .string()
        .min(10, "   شماره موبایل نامعتبر است.")
        .max(30)
        .required("   شماره موبایل الزامی است ."),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const submitHandler = (data) => {
    navigate("/");
  };
  return (
    <div className="bg-white rounded-xl p-8 mb-16 border w-full max-w-screen-xl">
      <div>
        <p className=" text-lg sm:text-xl mb-2 text-gray-600">مشخصات کاربر</p>
        <hr />
      </div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="  grid grid-cols-1 sm:grid-cols-2 gap-8 py-8">
          <TextFeildInfo
            icon={<HiOutlineUser />}
            title="نام"
            errors={errors}
            register={register}
            name="name"
          />
          <TextFeildInfo
            icon={<HiOutlineUser />}
            title="نام خانوادگی"
            errors={errors}
            register={register}
            name="lastName"
          />
          <TextFeildInfo
            icon={<HiOutlineUser />}
            title="کد ملی"
            errors={errors}
            register={register}
            name="code"
          />
          <TextFeildInfo
            icon={<HiMiniPhone />}
            title="شماره موبایل"
            errors={errors}
            register={register}
            name="phone"
          />
          <TextFeildInfo
            icon={<HiEnvelope />}
            title="ایمیل"
            errors={errors}
            register={register}
            name="email"
          />
          <TextFeildInfo
            icon={<HiOutlineMapPin />}
            title="ادرس"
            errors={errors}
            register={register}
            name="address"
          />
        </div>
        <div className=" w-full flex justify-center">
          <button
            onClick={() => setOpen(true)}
            className="py-2 px-2 items-center w-full sm:w-64 rounded-lg bg-blue-600 text-white"
          >
            ادامه رزرو{" "}
          </button>
        </div>
      </form>
      <GeneralModal
        open={open}
        onClose={() => setOpen(false)}
        title="شروط و تعهدات طرفین قرارداد"
      >
        <div className="p-8 overflow-y-scroll sm:overflow-y-auto h-[500px]">
          <p className=" text-center">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم
            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
            از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
            می طلبد،
          </p>
          <div className=" w-full flex justify-center mt-4">
            <Link to="/payment">
              <button className=" py-2 px-8 rounded-lg bg-blue-600 text-white">
                تایید و ادامه
              </button>
            </Link>
          </div>
        </div>
      </GeneralModal>
    </div>
  );
}

export default UserInformationBox;
