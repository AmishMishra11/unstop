import React from "react";

import { MdOutlineDashboard, MdOutlineLibraryBooks } from "react-icons/md";
import { LuClipboardSignature } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { BsClipboardPulse } from "react-icons/bs";
function Menu({ setShowMenu }) {
  return (
    <div className="h-screen ease-in duration-200 bg-[#F2F8FE] sm:bg-white flex flex-col items-center justify-start p-4 w-[calc(100vw-5rem)]  sm:w-36   ">
      <div className=" flex justify-between items-center w-full sm:hidden">
        <h1>Menu</h1>
        <button className="text-xl" onClick={() => setShowMenu(false)}>
          <RxCross2 />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center text-[#1C4980] w-full sm:w-24 pb-2 border-b-2 border-dashed">
        <div className="flex  sm:flex-col items-center justify-start w-full sm:justify-center p-2 h-[70px] cursor-pointer m-2 ">
          <MdOutlineDashboard className="h-5 w-5" />
          <p className="text-sm font-medium  px-2 sm:p-0">Dashboard</p>
        </div>

        <div className="flex  sm:flex-col items-center justify-start w-full sm:justify-center p-2 h-[70px] cursor-pointer m-2  border-2 border-[#0073E6] text-[#0073E6] bg-[#E5F1FC] rounded-md">
          <LuClipboardSignature className="h-5 w-5" />
          <p className="text-sm font-medium  px-2 sm:p-0">Assignments</p>
        </div>
        <div className="flex  sm:flex-col items-center justify-start w-full sm:justify-center p-2 h-[70px] cursor-pointer m-2 ">
          <MdOutlineLibraryBooks className="h-5 w-5" />
          <p className="text-sm font-medium  px-2 sm:p-0">Library</p>
        </div>
      </div>

      <div className="flex flex-row-reverse sm:flex-col w-full items-center justify-between sm:justify-center p-2 ">
        <p className="text-[#D63500] border-2 border-[#D63500] bg-[#FBEBEA] rounded-full m-2 px-2 w-fit">
          Admin
        </p>

        <div className="flex sm:flex-col items-center justify-center p-2 h-[80px] w-fit sm:w-[90px] text-[#1C4980]  cursor-pointer">
          <BsClipboardPulse className="h-5 w-5" />
          <p className="text-sm font-medium p-2 sm:p-0">Round Status</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
