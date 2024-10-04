import { HiOutlineX } from "react-icons/hi";
import { HiX } from "react-icons/hi";

function SearchModal({ onClose, open, title, children, searchItems ,handleRemove}) {
  return (
    open && (
      <div className="flex  px-4 justify-center pb-8 backdrop-blur-sm bg-opacity-30 fixed top-0 left-0 w-screen  h-screen bg-gray-500 z-50 ">
        <div className="mr-4 md:mr-0 py-8 mt-16  transition-all duration-500 w-10/12 md:w-8/12  max-w-screen-lg  min-w-[320px]   rounded-xl shadow-lg fixed  z-50   bg-white ">
          <div>
            <div className="text-slate-900 flex justify-between border-b-2 p-4">
              <p className=" text-xl ">{title}</p>
              <button className=" text-xl" onClick={onClose}>
                <HiOutlineX />
              </button>
            </div>
            {children}
            <div>
              {searchItems && searchItems.length ? (
                <div className="overflow-y-scroll h-64 flex flex-col items-center">
                  {searchItems.map((item) => (
                    <div key={item.id}>
                      <div className=" border rounded-lg px-4 my-2 w-[300px] flex justify-between items-center">
                        <div className=" flex gap-x-4 items-center">
                        <img
                          src={item.imageSrc}
                          alt=""
                          className="w-16 h-16 "
                        />
                        <div className=" text-sm">
                          <p>{item.title}</p>
                          <p>{item.type}</p>
                        </div>
                        </div>
                        <div >
                          <button onClick={()=>handleRemove(item.id) }>
                            <HiX />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className=" w-full flex justify-center">
                  <p>هیچ ایتمی پیدا نشد!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default SearchModal;
