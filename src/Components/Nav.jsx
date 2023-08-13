import React, { useState } from "react";
import { IoMdPhonePortrait, IoMdLaptop } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import Menu from "./Menu";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <section className="flex  justify-between items-center h-[70px] bg-white border-b-2 px-2">
      {showMenu && (
        <div className="fixed top-0 left-0">
          <Menu setShowMenu={setShowMenu} />
        </div>
      )}

      <div className="flex items-center justify-center ">
        <BiMenuAltLeft
          className="block sm:hidden text-2xl cursor-pointer"
          onClick={() => setShowMenu(true)}
        />
        <h1 className="text-xl font-semibold text-[#1C4980] pr-4 sm:border-r-2">
          Assessment
        </h1>
        <div className=" hidden sm:block text-base font-semibold border-b-[3px] border-[#0073E6]  py-5 ml-4 text-[#0073E6]">
          My Assignments
        </div>
      </div>

      <div className="text-2xl p-2 ">
        <IoMdPhonePortrait className="hidden sm:block" />

        <IoMdLaptop className="sm:hidden block" />
      </div>
    </section>
  );
}

export default Nav;
