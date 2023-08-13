import React from "react";

import { TbBriefcase } from "react-icons/tb";
import { BiDotsVerticalRounded, BiLinkAlt } from "react-icons/bi";
import { MdCalendarMonth } from "react-icons/md";

function AssessmentCard({ item }) {
  const { tempDate, tempName, tempPurpose } = item;

  const inputDate = tempDate;
  const date = new Date(inputDate);

  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="border-2 m-2 border-[#DADCE0] rounded-xl h-52 w-96 flex flex-col justify-around items-center">
      <div className="flex w-full justify-between items-center text-4xl p-4">
        <TbBriefcase className="bg-[#EBE8FD] text-[#6548EE] rounded-lg p-1 " />
        <BiDotsVerticalRounded className="text-2xl" />
      </div>

      <div className="flex items-start justify-between flex-col w-full px-4">
        <div className="text-[#1C4980] font-medium text-lg">{tempName}</div>
        <div className="flex justify-between items-center gap-2">
          <p className="font-semibold text-sm text-[#1C4980] pr-2 border-r-2 ">
            {tempPurpose}
          </p>
          <MdCalendarMonth className="text-[#1C4980]" />
          <span className="text-[#8DA4BF] font-medium text-xs">
            {formattedDate}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center w-full p-4 border-t-2 border-dashed m-2">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start justify-center text-[#1C4980] font-semibold text-sm p-2">
            <p>00</p>
            <p>Duration</p>
          </div>

          <div className="flex flex-col items-start justify-center text-[#1C4980] font-semibold text-sm p-2">
            <p>00</p>
            <p>Questions</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="rounded-2xl border-[#1C4980] border-2 bordre-[#1C4980] text-[#1C4980] px-2 flex items-center justify-center">
            <BiLinkAlt />
            <p>Share</p>
          </div>

          <div>
            <div className="bg-purple-400 text-white flex items-center justify-center h-7 w-7 rounded-full">
              JP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssessmentCard;
