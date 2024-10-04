import { HiOutlineX } from "react-icons/hi";

function GeneralModal({ onClose, open, title, children }) {

  return (
    open && (
      <div className=" backdrop-blur-sm flex justify-center bg-opacity-30 fixed top-0 left-0 w-screen  h-screen bg-gray-500 z-50 ">
        <div className="w-full   transition-all duration-500    max-w-screen-sm min-w-[320px] mx-auto  sm:rounded-xl shadow-lg  bg-white ">
          <div>
            <div className="text-slate-900 flex justify-between border-b-2 p-4">
              <p className=" text-xl mr-4 md:mr-0">{title}</p>
              <button className=" text-xl" onClick={onClose}>
                <HiOutlineX />
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    )
  );
}

export default GeneralModal;
