import React, { useState } from "react";

import { RxCross2 } from "react-icons/rx";

function AddModal({ onClose, myAssessments, setMyAssessments }) {
  const [skills, setSkills] = useState([]);

  const [tempSkills, setTempSkills] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSkills((prev) => [...prev, tempSkills]);
      setTempSkills("");
    }
  };

  const removeSkills = (skill) => {
    let updatedSkills = skills.filter((item) => item !== skill);
    setSkills(updatedSkills);
  };

  const [minDate, setMinDate] = useState(() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    return currentDate.toISOString().split("T")[0];
  });

  const [tempAssessments, setTempAssessments] = useState({
    tempName: "",
    tempPurpose: "Job",
    tempDescription: "",
    tempSkills: [],
    tempDate: "",
  });

  const handleChange = (e) => {
    setTempAssessments({
      ...tempAssessments,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    if (tempAssessments.tempName === "" || tempAssessments.Date === "") {
      alert("Fill all the fields");
    } else {
      const newAssessments = [
        ...myAssessments,
        { ...tempAssessments, tempSkills: skills },
      ];
      setMyAssessments(newAssessments);

      setTempAssessments({
        tempName: "",
        tempPurpose: "Job",
        tempDescription: "",
        tempSkills: [],
        tempDate: "",
      });

      onClose();
    }
  };

  return (
    <div
      className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50  flex items-center justify-center z-20"
      onClick={() => onClose()}
    >
      <div
        className="    h-[40rem] w-full    sm:w-[35rem] sm:h-[47rem] mt-[9.5rem] sm:m-0  bg-white rounded-md flex flex-col items-center justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hidden sm:flex w-full items-center rounded-md justify-between border-b-2 bg-white p-4">
          <h2 className="text-[#1C4980] font-semibold text-xl ">
            Create new assessment
          </h2>
          <p className="" onClick={() => onClose()}>
            <RxCross2 />
          </p>
        </div>

        <div className="flex sm:hidden w-full items-center rounded-md justify-between border-b-2 bg-white p-4">
          <h2 className="text-[#1C4980] font-semibold text-xl ">
            Sub-Section Details
          </h2>
          <p
            className="bg-red-100 text-red-700 p-2 text-2xl rounded-full"
            onClick={() => onClose()}
          >
            <RxCross2 />
          </p>
        </div>

        <div className="bg-white w-full h-[38rem]  overflow-auto text-[#1C4980]">
          <div className="w-full p-4">
            <h2 className=" text-base font-medium w-full text-left">
              Name of Assessment
            </h2>
            <input
              className="w-full p-2 rounded-md border-2 font-medium text-base placeholder-[#1C4980]"
              placeholder="type here"
              name="tempName"
              type="text"
              onChange={handleChange}
            />
          </div>

          <div className="w-full p-4">
            <label className="text-base font-medium w-full text-left block">
              Purpose of the test is
            </label>
            <select
              className="bg-white border border-gray-300 text-[#1C4980] text-base font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="tempPurpose"
              onChange={handleChange}
            >
              <option value="Job">Job</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div className="w-full p-4">
            <label className="text-base font-medium w-full text-left block">
              Description
            </label>
            <select
              className="bg-white border border-gray-300 text-[#1C4980] text-base font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="tempDescription"
              onChange={handleChange}
            >
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
          </div>

          <div className="w-full p-4">
            <h2 className=" text-base font-medium w-full text-left">Skills</h2>
            <div className="border-2 border-b-0 rounded-t-md flex justify-start items-center flex-wrap gap-2 p-4">
              {skills.length ? (
                skills.map((item) => (
                  <div
                    key={item}
                    className="bg-[#DDEDFF] flex items-center justify-center p-2 rounded-full text-xs font-medium"
                  >
                    <p className="px-2">{item}</p>
                    <p
                      className="pr-2 font-extrabold cursor-pointer"
                      onClick={() => removeSkills(item)}
                    >
                      <RxCross2 />
                    </p>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
            <input
              className="w-full p-2 rounded-b-md border-2 font-medium text-base placeholder-[#1C4980]"
              placeholder="type here"
              type="text"
              value={tempSkills}
              onChange={(e) => setTempSkills(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <div className="w-full p-4">
            <h2 className=" text-base font-medium w-full text-left">
              Duration of assessment
            </h2>
            <input
              className="w-full p-2 rounded-md border-2 font-medium text-base placeholder-[#1C4980]"
              placeholder="here"
              type="date"
              min={minDate}
              name="tempDate"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex p-4 items-center justify-center border-t-2 w-full">
          <button
            className="bg-[#0073E6] text-white rounded-md h-10 w-[500px]"
            onClick={() => handleSubmit()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
