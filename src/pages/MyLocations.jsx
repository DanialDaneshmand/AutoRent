import React, { useState } from "react";
import { HiOutlineMapPin, HiOutlineTrash } from "react-icons/hi2";
import GeneralModal from "../ui/GeneralModal";

function MyLocations() {
  const [open, setOpen] = useState(false);
  const [locations, setLocations] = useState([
    {
      id: 1,
      location: "تهران-نیاوران-مژده",
      postCode: "7453145598",
      phone: "09392923907",
      name: "دانیال دانشمند",
    },
  ]);
  const [values, setValues] = useState({
    location: "",
    postCode: "",
    phone: "",
    name: "",
  });
  const handleDelete = (id) => {
    setLocations(locations.filter((item) => item.id !== id));
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    setLocations([...locations, {id:locations.length+1,...values}]);
    setOpen(false);
    
  };
  return (
    <div>
      <div className=" flex justify-between border-b pb-4">
        <span className=" text-lg text-gray-600">ادرس های من</span>
        <button
          onClick={() => setOpen(true)}
          className=" flex gap-x-2 items-center text-blue-600"
        >
          <span>
            <HiOutlineMapPin />
          </span>
          <span>افزودن ادرس جدید</span>
        </button>
        <GeneralModal
          open={open}
          onClose={() => setOpen(false)}
          title="افزودن ادرس جدید"
        >
          <form onSubmit={HandleSubmit}>
            <div className=" p-8">
              <div className=" my-10 relative">
                <label
                  htmlFor=""
                  className="block py-1 px-2 text-gray-400 z-50 absolute bg-white -top-8  "
                >
                  ادرس
                </label>
                <input
                autoComplete={false}
                  name="location"
                  onChange={handleChange}
                  value={values.location}
                  type="text"
                  className="   py-3 w-full px-2 border outline-none rounded-lg"
                />
              </div>
              <div className=" my-10 relative">
                <label
                  htmlFor=""
                  className="block py-1 px-2 text-gray-400 z-50 absolute -top-8 bg-white "
                >
                  کد پستی
                </label>
                <input
                  name="postCode"
                  onChange={handleChange}
                  value={values.postCode}
                  type="text"
                  className=" w-full py-3 px-2 border outline-none rounded-lg"
                />
              </div>
              <div className=" my-10 relative">
                <label
                  htmlFor=""
                  className="block py-1 px-2 text-gray-400 z-50 absolute -top-8 bg-white "
                >
                  شماره تماس
                </label>
                <input
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                  type="text"
                  className=" w-full py-3 px-2 border outline-none rounded-lg"
                />
              </div>
              <div className=" my-10 relative">
                <label
                  htmlFor=""
                  className="block py-1 px-2 text-gray-400 z-50 absolute -top-8 bg-white "
                >
                  نام گیرنده
                </label>
                <input
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  type="text"
                  className=" w-full py-3 px-2 border outline-none rounded-lg"
                />
              </div>
              <div className=" my-4 w-full flex justify-center">
                <button
                  type="submit"
                  className=" w-64 py-2 rounded-lg bg-blue-600 text-white"
                >
                  افزودن ادرس جدید
                </button>
              </div>
            </div>
          </form>
        </GeneralModal>
      </div>
      {locations.length===0 ? (
        <div className=" w-full my-4 text-center text-lg text-gray-500">
          <p>هیچ ادرسی یافت نشد !</p>
        </div>
      ) : (
        locations.map((item) => (
          <div
            key={item.id}
            className=" flex my-4 border rounded-lg p-4 justify-between items-center"
          >
            <div className=" flex flex-col text-gray-400">
              <span>{item.location}</span>
              <span>کد پستی :{item.postCode}</span>
              <span>موبایل :{item.phone}</span>
              <span>نام گیرنده :{item.name}</span>
            </div>
            <div>
              <button
                onClick={() => handleDelete(item.id)}
                className=" text-2xl text-red-600"
              >
                <HiOutlineTrash />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MyLocations;
