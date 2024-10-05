import React from "react";
import Image from "next/image";

const List = ({ title, textArray, src }) => {
  return (
    <div className="relative flex-col bg-black lg:h-[50vh] md:h-[45vh] h-[75vh] flex items-center justify-center md:mb-20">
      <Image src={src} alt="Background Image" fill className="object-cover" />
      <div className="relative flex flex-col p-4 h-full w-full items-center justify-center">
        <div className="flex items-center justify-center w-full">
          <div className="bg-neon neon-button font-yeseva font-bold p-6 h-auto sm:h-[100px] sm:w-[800px] lg:text-3xl md:text-3xl text-lg text-center flex items-center justify-center relative top-4 md:top- rounded-sm">
            <h2 className="title text-black">{title}</h2>
          </div>
        </div>

        <div
          id="sub-container"
          className="flex flex-col md:flex w-full h-full md:items-center relative mx-auto gap-y-4"
        >
          <div
            id="row1"
            className="flex flex-col gap-x-4 md:flex-row justify-center items-center h-auto gap-y-4"
          >
            <a
              href="#title-text-and-image-container1"
              className="bg-white opacity-90 cursor-pointer flex w-[75vw] md:w-[45%] sm:w-[60vw] rounded-sm md:h-[12vh] md:min-w-[19rem] items-center justify-center p-2 mx-auto shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:bg-black hover:text-white hover:opacity-100"
            >
              <div className="text-2xl font-thin flex items-center justify-center w-12 h-12">
                1
              </div>
              <div className="flex justify-center items-center font-extralight text-[12px] p-4 min-w-[15rem]  sm:min-w-[15rem] md:min-w-[10rem]  max-w-[15rem]  lg:text-start">
                <p className="text flex justify-center">{textArray[0]}</p>
              </div>
            </a>
            <a
              href="#title-text-and-image-container2"
              className="bg-white opacity-90 flex w-[75vw] md:w-[35%] sm:w-[60vw]  rounded-sm md:h-[12vh] md:min-w-[19rem] items-center justify-center p-2 mx-auto shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:opacity-100 hover:bg-black hover:text-white"
            >
              <div className="text-2xl font-thin flex items-center justify-center w-12 h-12">
                2
              </div>
              <div className="flex justify-center items-center font-extralight text-[12px] p-4 min-w-[15rem]  sm:min-w-[15rem] md:min-w-[10rem]  max-w-[15rem] ">
                <p className="text flex justify-center">{textArray[1]}</p>
              </div>
            </a>
          </div>

          <div
            id="row2"
            className="flex flex-col gap-x-4 md:flex-row justify-center items-center gap-y-4 h-auto"
          >
            <a
              href="#title-text-and-image-container3"
              className="bg-white opacity-90 flex w-[75vw] md:w-[35%] sm:w-[60vw]   rounded-sm md:h-[12vh] md:min-w-[19rem] items-center justify-center p-2 mx-auto shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:bg-black hover:text-white hover:opacity-100"
            >
              <div className="text-2xl font-thin flex items-center justify-center w-12 h-12">
                3
              </div>
              <div className="flex justify-center items-center font-extralight text-[12px] p-4 min-w-[15rem]  sm:min-w-[15rem] md:min-w-[10rem]  max-w-[15rem]  opacity-100">
                <p className="text flex justify-center">{textArray[2]}</p>
              </div>
            </a>
            <a
              href="#title-text-and-image-container1"
              className="bg-white opacity-90 flex w-[75vw] md:w-[35%] sm:w-[60vw] rounded-sm  md:h-[12vh] md:min-w-[19rem] items-center justify-center p-2 mx-auto shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:bg-black hover:text-white hover:opacity-100"
            >
              <div className="text-2xl font-thin flex items-center justify-center w-12 h-12">
                4
              </div>
              <div className="flex justify-center items-center font-extralight text-[12px] min-w-[15rem]  sm:min-w-[15rem] md:min-w-[10rem]  max-w-[15rem]  p-4">
                <p className="text flex justify-center">{textArray[3]}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;