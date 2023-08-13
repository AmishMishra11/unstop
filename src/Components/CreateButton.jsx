import React from "react";
import { IoAddOutline } from "react-icons/io5";
function CreateButton({ onClick }) {
  return (
    <div
      className="cursor-pointer border-dashed  border-2 border-[#DADCE0] bg-[#F6F8FA] h-52 w-96 rounded-xl p-8 m-2 flex flex-col items-center justify-center text-[#1C4980]"
      onClick={onClick}
    >
      <div>
        <IoAddOutline className="w-12 h-12 p-2 rounded-full bg-white text-[#0073E6]" />
      </div>
      <div className="font-medium text-lg">New Assessment</div>
      <p className="font-medium text-xs">
        From here you can add questions of multiple types like MCQs, subjective
        (text or paragraph)!
      </p>
    </div>
  );
}

export default CreateButton;
