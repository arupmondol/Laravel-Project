import React from 'react'
import Vector67 from '../../assets/Vector 67.png'
import { BiPolygon } from 'react-icons/bi'
import { BsFillCaretRightFill } from 'react-icons/bs';

const HowItWorks = () => {
  return (
    <div>
       <div className="flex flex-col items-center justify-start gap-[60px]">
          <div className="w-[1440px] h-[85px] flex flex-col items-center justify-between">
            <div className="relative leading-[24px] font-semibold">
              HOW IT WORKS
            </div>
            <b className="relative text-21xl capitalize text-white">
              Easiest way to get a service
            </b>
          </div>
          <div className="flex flex-col items-start justify-start gap-[30px] text-base text-black">
            <div className="flex flex-row items-start justify-center gap-[40px]">
              <div className="h-[159px] flex flex-col items-center justify-between">
                <div className="relative w-[50px] h-[50px]">
                  <img
                    className="w-[827px] h-[60px]"
                    alt=""
                    src={Vector67}
                  />
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-[50px] h-[50px]" />
                  <b className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_4px)] leading-[28px]">
                    1
                  </b>
                </div>
                <div className="flex flex-col items-center justify-center gap-[10px] text-center text-5xl text-white">
                  <div className="relative leading-[28px] font-semibold">
                    Select the Service
                  </div>
                  <div className="relative text-base leading-[28px] font-medium inline-block w-[373px]">
                    Pick the service you are looking for- from the website or
                    the app.
                  </div>
                </div>
              </div>
              <div className="h-[215px] flex flex-col items-center justify-start gap-[15px]">
                <div className="relative w-[50px] h-[50px]">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-[50px] h-[50px]" />
                  <b className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_5px)] leading-[28px]">
                    2
                  </b>
                </div>
                <div className="flex flex-col items-center justify-center gap-[10px] text-center text-5xl text-white">
                  <div className="relative leading-[28px] font-semibold">
                    Pick your schedule
                  </div>
                  <div className="relative text-base leading-[28px] font-medium inline-block w-[373px]">
                    Pick your convenient date and time to avail the service.
                    Pick the service provider based on their rating.
                  </div>
                </div>
              </div>
              <div className="h-[220px] flex flex-col items-center justify-start gap-[15px]">
                <div className="relative w-[50px] h-[50px]">
                  <div className="absolute top-[0px] left-[0.5px] rounded-[50%] bg-white w-[50px] h-[50px]" />
                  <b className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_5px)] leading-[28px]">
                    3
                  </b>
                </div>
                <div className="flex flex-col items-center justify-center gap-[10px] text-center text-5xl text-white">
                  <div className="relative leading-[28px] font-semibold">{`Place Your Order & Relax`}</div>
                  <div className="relative text-base leading-[28px] font-medium inline-block w-[373px]">
                    Review and place the order. Now just sit back and relax.
                    We’ll assign the expert service provider’s schedule for you.
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className='h-[500px] w-[1200px] rounded-[209px] mx-auto pt-48 bg-[#3B6F82] '>
             <div className='w-[100px] h-[100px] p-auto bg-white mx-auto rounded-full  '>
               <div className='pl-[25px] pt-[25px] '>
                <BsFillCaretRightFill color='#18C15C' fontSize="50px"/>
               </div>
             </div>
        </div>
    </div>
  )
}

export default HowItWorks