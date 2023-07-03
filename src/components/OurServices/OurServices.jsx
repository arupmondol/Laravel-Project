import React from "react";

const OurServices = () => {
  return (
    <div className="mt-32 mb-32">
      <div className="h-[592px] flex flex-col items-center justify-start gap-[40px] text-21xl text-white">
        <b className="relative tracking-[0.02em] leading-[150%] capitalize">
          Our Services
        </b>
        <div className="flex flex-col items-center justify-start gap-[40px] text-center text-5xl">
          <div className="w-[1200px] flex flex-row items-start justify-start gap-[40px]">
            <div className="rounded-194xl bg-slategray-100 shadow-[0px_100px_200px_rgba(1,_23,_54,_0.1)] box-border w-[282.5px] h-[416px] flex flex-row pt-0 px-0 pb-10 items-start justify-start border-[20px] border-solid border-gray-400">
              <div className="flex flex-col items-center justify-end gap-[23px]">
                <img
                  className="relative rounded-t-194xl rounded-b-none w-[262.5px] h-[265px] object-cover"
                  alt=""
                  src="/frame-12611545391@2x.png"
                />
                <div className="relative leading-[150%] font-semibold inline-block w-[148px]">
                  Appliance Repair
                </div>
              </div>
            </div>
            <div className="rounded-194xl bg-slategray-100 shadow-[0px_100px_200px_rgba(1,_23,_54,_0.1)] box-border w-[282.5px] h-[416px] flex flex-row pt-0 px-0 pb-10 items-start justify-start border-[20px] border-solid border-gray-400">
              <div className="flex flex-col items-center justify-end gap-[23px]">
                <img
                  className="relative rounded-t-194xl rounded-b-none w-[262.5px] h-[265px] object-cover"
                  alt=""
                  src="/frame-12611545392@2x.png"
                />
                <div className="relative leading-[150%] font-semibold inline-block w-[197px]">{`Trips & Travels`}</div>
              </div>
            </div>
            <div className="rounded-194xl bg-slategray-100 shadow-[0px_100px_200px_rgba(1,_23,_54,_0.1)] box-border w-[282.5px] h-[416px] flex flex-row pt-0 px-0 pb-10 items-start justify-start border-[20px] border-solid border-gray-400">
              <div className="flex flex-col items-center justify-end gap-[23px]">
                <img
                  className="relative rounded-t-194xl rounded-b-none w-[262.5px] h-[265px] object-cover"
                  alt=""
                  src="/frame-12611545393@2x.png"
                />
                <div className="relative leading-[150%] font-semibold">{`Shifting `}</div>
              </div>
            </div>
            <div className="rounded-194xl bg-slategray-100 shadow-[0px_100px_200px_rgba(1,_23,_54,_0.1)] box-border w-[282.5px] h-[416px] flex flex-row pt-0 px-0 pb-10 items-start justify-start border-[20px] border-solid border-gray-400">
              <div className="flex flex-col items-center justify-end gap-[23px]">
                <img
                  className="relative rounded-t-194xl rounded-b-none w-[262.5px] h-[265px] object-cover"
                  alt=""
                  src="/frame-12611545394@2x.png"
                />
                <div className="relative leading-[150%] font-semibold">
                  Car Care Services
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-37xl bg-mediumseagreen shadow-[0px_10px_14px_rgba(0,_0,_0,_0.25)] w-[200px] flex flex-row py-3.5 px-[45px] box-border items-center justify-between text-base">
            <div className="relative leading-[28px] font-semibold">
              All Services
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
