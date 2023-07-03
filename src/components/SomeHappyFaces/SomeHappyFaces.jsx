import React from "react";

import { BsFillCaretRightFill } from "react-icons/bs";

const SomeHappyFaces = () => {
  return (
    <div className="mt-32">
      <div className="flex flex-col items-center justify-start gap-[40px] text-center">
        <div className="flex flex-col items-center justify-center gap-[8px]">
          <div className="relative leading-[24px] font-semibold">
            SOME HAPPY FACES
          </div>
          <b className="relative text-21xl tracking-[0.02em] leading-[150%] capitalize text-white">
            Real Happy Customers, Real Stories
          </b>
        </div>
        <div className="flex flex-row items-center justify-start gap-[21px] text-left text-gray-200">
          <img
            className="relative w-[678.83px] h-80"
            alt=""
            src="/group-1261152727.svg"
          />
          <div className="flex flex-col items-center justify-start gap-[32px]">
            <div className="rounded-[20px] bg-white shadow-[0px_100px_200px_rgba(1,_23,_54,_0.1)] w-[500px] flex flex-col py-[30px] px-[21px] box-border items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                    <div className="self-stretch relative leading-[24px] font-semibold opacity-[0.9]">
                      Jaylon Vaccaro
                    </div>
                  </div>
                </div>
                <div className="relative bg-[#012C3B] w-[458px] h-[220px]">
                  <div className="w-[100px] h-[100px] p-auto mt-[35px] bg-white mx-auto rounded-full  ">
                    <div className="pl-[25px] pt-[25px] ">
                      <BsFillCaretRightFill color="#18C15C" fontSize="50px" />
                    </div>
                  </div>
                </div>
                <i className="self-stretch relative text-[18px] leading-[34px] font-medium text-gray-100">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don
                </i>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px]">
            <button  className="btn btn-outline btn-circle btn-success rounded-full">❮</button>
            <a href="#slide2" className="btn btn-circle btn-success">❯</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomeHappyFaces;
