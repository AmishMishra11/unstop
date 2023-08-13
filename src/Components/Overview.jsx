import React from "react";

import { PiSquareSplitVerticalFill } from "react-icons/pi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";
import { FiLink2 } from "react-icons/fi";

function Overview() {
  return (
    <div className="flex flex-col items-center justify-center m-2">
      <h1 className=" hidden sm:block text-[#1C4980] font-medium text-lg text-left w-full">
        Assessment Overview
      </h1>

      <div className="flex flex-col xl:flex-row justify-around items-center w-fit xl:w-full m-2 border-2 rounded-lg">
        <div className="flex items-center justify-center w-full">
          <div className="flex basis-1/2 flex-col items-start justify-center h-full w-full  px-2 border-r-2">
            <h3 className="text-[#1C4980] text-sm font-semibold p-2">
              Total Assessment
            </h3>
            <div className="flex items-center justify-center gap-1 p-2">
              <PiSquareSplitVerticalFill className="bg-[#EBE8FD] text-[#6548EE] rounded-lg h-7 w-7 p-1 mr-2" />
              <p className="text-[#1C4980] font-bold text-xl">34</p>
            </div>
          </div>

          <div className=" none xl:flex basis-1/2 flex-col items-start justify-center  w-full h-full px-2  ">
            <h3 className="text-[#1C4980] text-sm font-semibold p-2">
              Total Purpose
            </h3>
            <div className="flex items-center justify-center gap-1 p-2">
              <FiLink2 className="bg-[#EBE8FD] text-[#6548EE] rounded-lg h-7 w-7 p-1 mr-2" />
              <p className="text-[#1C4980] font-bold text-xl">34</p>
            </div>
          </div>
        </div>
        <div className="flex basis-full flex-col items-start justify-center border-y-2 xl:border-0 xl:border-r-2 w-full  px-2 h-full ">
          <h3 className="text-[#1C4980] text-sm font-semibold">Candidates</h3>
          <div className="flex items-center justify-center gap-1 p-2">
            <MdOutlinePeopleAlt className="bg-[#EBE8FD] text-[#6548EE] rounded-lg h-7 w-7 p-1 mr-2 " />

            <div className="px-3 flex flex-col items-start justify-center border-r-2">
              <p className="text-[#1C4980] font-bold text-xl flex items-center">
                11,145
                <span className="text-[#05C165] text-xs font-medium">+89</span>
              </p>
              <p className="text-[#1C4980] text-xs font-medium">
                Total Candidate
              </p>
            </div>
            <div className="px-3 flex flex-col items-start justify-center">
              <p className="text-[#1C4980] font-bold text-xl flex items-center">
                1,13
                <span className="text-[#05C165] text-xs font-medium">+89</span>
              </p>
              <p className="text-[#1C4980] text-xs font-medium">Who Attamped</p>
            </div>
          </div>
        </div>
        <div className="flexbasis-full flex-col items-start justify-center h-full w-full px-2 xl:border-r-2 ">
          <h3 className="text-[#1C4980] text-sm font-semibold text-left w-full">
            Candidates Score
          </h3>
          <div className="flex items-center justify-center gap-1 p-2">
            <SlGlobe className="bg-[#FCE8EF] text-[#E9407A] rounded-lg h-7 w-7 p-1 mr-2" />

            <div className="px-3 flex flex-col items-start justify-center border-r-2">
              <p className="text-[#1C4980] font-bold text-xl flex items-center">
                11,000
                <span className="text-[#05C165] text-xs font-medium">+89</span>
              </p>
              <p className="text-[#1C4980] text-xs font-medium">E-mail</p>
            </div>
            <div className="px-3 flex flex-col items-start justify-center border-r-2">
              <p className="text-[#1C4980] font-bold text-xl flex items-center ">
                145
                <span className="text-[#05C165] text-xs font-medium">+89</span>
              </p>
              <p className="text-[#1C4980] text-xs font-medium">Social Share</p>
            </div>

            <div className="px-3 flex flex-col items-start justify-center">
              <p className="text-[#1C4980] font-bold text-xl flex items-center">
                145
                <span className="text-[#05C165] text-xs font-medium">+89</span>
              </p>
              <p className="text-[#1C4980] text-xs font-medium">Unique Link</p>
            </div>
          </div>
        </div>

        <div className=" hidden xl:flex basis-1/2 flex-col items-start justify-center h-full px-2 w-1/6 ">
          <h3 className="text-[#1C4980] text-sm font-semibold p-2">
            Total Purpose
          </h3>
          <div className="flex items-center justify-center gap-1 p-2">
            <FiLink2 className="bg-[#EBE8FD] text-[#6548EE] rounded-lg h-7 w-7 p-1 mr-2" />
            <p className="text-[#1C4980] font-bold text-xl">34</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
