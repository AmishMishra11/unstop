import React, { useState } from "react";
import Nav from "../Components/Nav";
import Menu from "../Components/Menu";
import Overview from "../Components/Overview";
import CreateButton from "../Components/CreateButton";
import AssessmentCard from "../Components/AssessmentCard";
import AddModal from "../Components/AddModal";

import { IoIosStats } from "react-icons/io";
import { AiOutlineSearch, AiTwotoneFilter } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";

function Assessment() {
  const [showModal, setShowModal] = useState(false);
  const [showOverView, setShowOverView] = useState(true);

  const [myAssessments, setMyAssessments] = useState([]);

  return (
    <div className="flex bg-[#DADCE0] w-full">
      <div className="hidden sm:block">
        <Menu />
      </div>

      <div className="flex flex-col w-full px-2">
        <Nav />

        <div className="bg-white w-full h-[calc(100vh-5rem)] overflow-y-auto ">
          {showOverView && (
            <div className="delay-200 ease-in-out">
              <Overview />
            </div>
          )}
          <main className="flex flex-col items-center justify-center m-2">
            <div className="flex items-center justify-between w-full">
              <h1 className="text-[#1C4980] font-medium text-lg text-left w-full">
                My Assessment
              </h1>

              <div className="flex items-center justify-center text-xl gap-5 sm:hidden">
                <AiOutlineSearch />
                <AiTwotoneFilter />
                <IoIosStats
                  className="cursor-pointer"
                  onClick={() => setShowOverView((prev) => !prev)}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-start justify-center ">
              <CreateButton onClick={() => setShowModal(true)} />

              {myAssessments.length ? (
                myAssessments.map((item) => <AssessmentCard item={item} />)
              ) : (
                <></>
              )}
            </div>
          </main>
        </div>
      </div>

      {showModal && (
        <AddModal
          onClose={() => setShowModal(false)}
          setMyAssessments={setMyAssessments}
          myAssessments={myAssessments}
        />
      )}

      <div
        className="fixed h-12 w-12 bg-[#0073E6] text-white rounded-full bottom-5 right-5 text-2xl flex items-center justify-center  sm:hidden cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <IoAddOutline />
      </div>
    </div>
  );
}

export default Assessment;
